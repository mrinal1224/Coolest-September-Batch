
---
title: Agenda
description:
duration: 600
card_type: cue_card
---

**Agenda of this Lecture:**

- Polyfills of higher Order Functions (Map ,Filter , reduce , Sort)
- Interview Problem solving on Funtional Programming

---
title: Polyfills of Higher order Functions
description:
duration: 600
card_type: cue_card
---

Polyfills in programming are pieces of code (usually JavaScript on the web) that provide modern functionality on older browsers that do not natively support it. Essentially, a polyfill is a fallback implementation for features that are expected in modern environments but are missing from the user's environment because they are using an outdated browser or platform.

Like suppose in our modern Browsers, We are able to use Map Filter and Reduce etc. methods, but maybe in some browser this support is not provided. So you will have to write your own implementation of these functions 

so let's start with writing polyfills for these three methods , first let's start with Map



---
title: Polyfill of Map method
description:
duration: 600
card_type: cue_card
---


### Quick Revision of `map` Method

The `map` method in JavaScript creates a new array populated with the results of calling a provided function on every element in the calling array. It doesn't change the original array and is often used for transforming data.

### Writing a Polyfill for the `map` 

Here's how to implement a polyfill for `Array.prototype.map` along with a detailed explanation of each line:

```javascript
// Polyfill for Array.prototype.map 
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback, thisArg) {
    // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Step 2: Create a new empty array for the results
    var result = [];

    // Step 3: Iterate over the array
    for (var i = 0; i < this.length; i++) {
      // Check if the index exists in the array to handle sparse arrays
      if (i in this) {
        // Step 4: Execute 'callback' for each element, considering 'thisArg'
        // Use a ternary operator to check if 'thisArg' is provided
        var context = thisArg ? thisArg : this;
        var mappedValue = callback(this[i], i, this);

        // Step 5: Push the result of the callback into the 'result' array
        result.push(mappedValue);
      }
    }

    // Step 6: Return the new array
    return result;
  };
}
```

#### Explanation:

1. **Feature Detection**: Start by checking if `Array.prototype.myMap` doesn't already exist to avoid overwriting any native implementations.

2. **Type Checking**: If the provided `callback` is not a function, throw a `TypeError` to enforce correct usage.

3. **Result Array**: Initialize an empty array (`result`) to hold the new values produced by the `callback` function.

4. **Iteration**: Loop through each element of the array with a `for` loop.

5. **Index Check**: Use `if (i in this)` to account for sparse arrays, ensuring that only existing indexes are processed.

6. **Callback Execution**: Directly execute the `callback` function for each element without using `call`. If `thisArg` is provided, it temporarily becomes the context (`this`) for the callback; otherwise, the current array (`this`) serves as the context. The callback function receives three arguments:
    - The current element (`this[i]`)
    - The current index (`i`)
    - The entire array (`this`)

7. **Push to Result Array**: Add the value returned by the `callback` to the `result` array.

8. **Return New Array**: After completing the iteration, return the `result` array, which now contains the transformed elements.

This polyfill replicates the functionality of the `map` method for environments where it's not natively supported, without relying on the `call` method to specify the `this` context. It ensures that developers can use `map`-like functionality across different JavaScript environments.



---
title: Polyfill of Filter method
description:
duration: 600
card_type: cue_card
---


### Quick Revision of `filter` Method

The `filter` method in JavaScript creates a new array with all elements that pass the test implemented by the provided function. It applies a given function to each element of the array, and if the function returns `true` for an element, that element is included in the new array. The original array is not modified.

### Writing a Polyfill for the `filter` 

Here's how to implement a polyfill for `Array.prototype.filter` without using the `call` method, along with a detailed explanation for each line:

```javascript
// Polyfill for Array.prototype.filter without using 'call'
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function(callback, thisArg) {
    // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Step 2: Create a new empty array for the results
    var result = [];

    // Step 3: Iterate over the array
    for (var i = 0; i < this.length; i++) {
      // Check if the index exists in the array to handle sparse arrays
      if (i in this) {
        // Define the context for the callback
        var context = thisArg ? thisArg : this;
        
        // Step 4: Execute 'callback' for each element, considering 'thisArg'
        // If 'callback' returns true, push the current element to 'result'
        if (callback(this[i], i, this)) {
          result.push(this[i]);
        }
      }
    }

    // Step 5: Return the new array
    return result;
  };
}
```

#### Explanation:

1. **Feature Detection**: Checks if `Array.prototype.myFilter` doesn't exist to avoid overwriting any native implementation.

2. **Type Checking**: Throws a `TypeError` if the provided `callback` is not a function to ensure proper usage.

3. **Result Array**: An empty array (`result`) is initialized to store elements that pass the callback function's test.

4. **Iteration**: The method iterates over each element of the array with a `for` loop.

5. **Index Check**: Using `if (i in this)` ensures that the callback is only applied to existing elements, which is particularly important for sparse arrays.

6. **Callback Execution**: The callback function is executed directly for each element. If `thisArg` is provided, it's used to set the context (`this`) for the callback; otherwise, the current array (`this`) serves as the context. The callback receives three arguments:
   - The current element (`this[i]`)
   - The current index (`i`)
   - The entire array (`this`)

   If the callback function returns `true`, indicating the current element passes the test, that element is added to the `result` array.

7. **Return New Array**: After iterating through all elements, the `result` array, now containing only elements that passed the test, is returned.

This polyfill allows for the functionality of the `filter` method to be used in environments where it is not natively supported, ensuring broader compatibility of web applications.



---
title: Polyfill of Reduce method
description:
duration: 600
card_type: cue_card
---

### Quick Revision of `reduce` Method

The `reduce` method in JavaScript applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. This method is often used for summing up all elements of an array, but it's versatile enough to handle tasks like building up a single object from an array of objects.

### Writing a Polyfill for the `reduce`

Creating a polyfill for the `reduce` method  involves implementing the core functionality of `Array.prototype.reduce` from scratch. Here's how you can do it, along with a detailed explanation:

```javascript
// Polyfill for Array.prototype.reduce 
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    // Step 1: Throw a TypeError if 'callback' is not a function
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // Step 2: Handle empty array with no initial value case
    if (this.length === 0 && arguments.length === 1) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    // Step 3: Set the initial index and accumulator
    var accumulator = arguments.length >= 2 ? initialValue : this[0];
    var startIndex = arguments.length >= 2 ? 0 : 1;

    // Step 4: Iterate over the array
    for (var i = startIndex; i < this.length; i++) {
      // Check if the index exists in the array to handle sparse arrays
      if (i in this) {
        // Step 5: Update the accumulator
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    // Step 6: Return the accumulated value
    return accumulator;
  };
}
```

#### Explanation:

1. **Feature Detection**: First, it checks if `Array.prototype.myReduce` does not already exist to avoid overriding any existing method.

2. **Type Checking**: If the `callback` argument is not a function, it throws a `TypeError`, ensuring that the method is called with appropriate arguments.

3. **Handling Empty Arrays**: If the method is called on an empty array without an initial value, it throws a `TypeError`, because in such cases, there's no value to return or to start the reduction with.

4. **Initial Values**: The `accumulator` starts with `initialValue` if provided; otherwise, it uses the first element of the array. The iteration starts from the first or second element accordingly.

5. **Iteration and Accumulation**: The method iterates over the array, updating the `accumulator` with the result of the `callback` function. The `callback` takes four arguments:
   - `accumulator`: The accumulator accumulates the callback's return values.
   - `currentValue`: The current element being processed in the array.
   - `currentIndex`: The index of the current element being processed.
   - `array`: The array `reduce` was called upon.

   This step carefully considers only the elements present in the array, which handles cases of sparse arrays gracefully.

6. **Return Value**: After iterating through the array, the method returns the accumulated value.

This polyfill allows for the use of the `reduce` functionality in environments where it might not be natively supported, ensuring broader compatibility across different JavaScript environments.


---
title: Interview Problem 1
description:
duration: 600
card_type: cue_card
---

### Problem 1 

**Flattening an Array**

**Problem Statement: Flatten Nested Array**

You are given a nested array containing array elements. Your task is to write a JavaScript function to flatten this nested array into a single-dimensional array, where all the nested arrays' elements are moved to the top-level array.

For example, given the following nested array:

```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
```

The flattened array should be:

```javascript
[1, 2, 3, 4, 5, 6]
```

Your task is to implement a function `flattenArray` that takes the nested array as input and returns the flattened array.

**Input:**
- A nested array `arr` containing integers.

**Output:**
- A single-dimensional array containing all the elements of the nested array.

Input:
```javascript
const nestedArray = [1, [2, 3], [4, [5, 6]]];
```

Output:
```javascript
[1, 2, 3, 4, 5, 6]
```

**Note:**
- Ensure that your solution works for arrays of any depth and can handle arrays with mixed data types.



### Solution

let's break down the solution step by step:

1. **Define the `flattenArray` function**: First, we define a function named `flattenArray` which takes an array `arr` as its parameter.

```javascript
function flattenArray(arr) {
    // Function implementation will go here
}
```

2. **Use the `reduce` method to iterate over the array**: We'll use the `Array.prototype.reduce()` method to iterate over each element of the array.

```javascript
function flattenArray(arr) {
    return arr.reduce((flatArray, item) => {
        // Logic will be implemented inside this callback function
    }, []);
}
```

3. **Check if the current element is an array or not**: Inside the callback function of `reduce()`, we check whether the current `item` is an array or not.

```javascript
function flattenArray(arr) {
    return arr.reduce((flatArray, item) => {
        if (Array.isArray(item)) {
            // If it's an array, flatten it
        } else {
            // If it's not an array, push it to the flatArray
        }
    }, []);
}
```

4. **Recursively flatten nested arrays**: If the `item` is an array, we'll recursively call the `flattenArray` function on that nested array.

```javascript
function flattenArray(arr) {
    return arr.reduce((flatArray, item) => {
        if (Array.isArray(item)) {
            flatArray.push(...flattenArray(item)); // Recursively flatten nested arrays
        } else {
            flatArray.push(item); // If it's not an array, push it to the flatArray
        }
        return flatArray;
    }, []);
}
```

5. **Return the flattened array**: Finally, we return the `flatArray` which contains all the elements of the nested array flattened into a single-dimensional array.

```javascript
function flattenArray(arr) {
    return arr.reduce((flatArray, item) => {
        if (Array.isArray(item)) {
            flatArray.push(...flattenArray(item)); // Recursively flatten nested arrays
        } else {
            flatArray.push(item); // If it's not an array, push it to the flatArray
        }
        return flatArray;
    }, []);
}

// Example nested array
const nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flatten the nested array
const flattenedArray = flattenArray(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
```

This solution effectively flattens any nested array into a single-dimensional array.



---
title: Interview Problem 2
description:
duration: 600
card_type: cue_card
---

## Problem-2

**Problem Statement:**

You are given an array of objects representing transactions made by customers. Each object contains the following properties:

- `customerId`: Number, representing the unique ID of the customer.
- `amount`: Number, representing the amount of the transaction.
- `date`: String, representing the date of the transaction (in the format "YYYY-MM-DD").

Your task is to write a JavaScript function using functional programming techniques that takes this array of transaction objects and returns an object containing the following information:

- `totalTransactions`: Total number of transactions.
- `totalAmount`: Total amount of all transactions.
- `averageTransactionAmount`: Average amount of transactions.
- `transactionsPerDay`: An object where keys are dates and values are arrays containing transactions made on that date.
- `transactionsByCustomer`: An object where keys are customer IDs and values are arrays containing transactions made by that customer.

**Example Input:**
```javascript
const transactions = [
  { customerId: 1, amount: 100, date: '2024-03-01' },
  { customerId: 2, amount: 150, date: '2024-03-01' },
  { customerId: 1, amount: 200, date: '2024-03-02' },
  { customerId: 3, amount: 50, date: '2024-03-02' },
  { customerId: 2, amount: 120, date: '2024-03-03' }
];
```

**Solution with Step-by-Step Explanation:**

```javascript
const transactions = [
  { customerId: 1, amount: 100, date: '2024-03-01' },
  { customerId: 2, amount: 150, date: '2024-03-01' },
  { customerId: 1, amount: 200, date: '2024-03-02' },
  { customerId: 3, amount: 50, date: '2024-03-02' },
  { customerId: 2, amount: 120, date: '2024-03-03' }
];

// Step 1: Calculate the total number of transactions.
const totalTransactions = transactions.length;

// Step 2: Calculate the total amount of all transactions.
const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);

// Step 3: Calculate the average amount of transactions.
const averageTransactionAmount = totalAmount / totalTransactions;

// Step 4: Group transactions by date.
const transactionsPerDay = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.date]) {
    acc[transaction.date] = [];
  }
  acc[transaction.date].push(transaction);
  return acc;
}, {});

// Step 5: Group transactions by customer.
const transactionsByCustomer = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.customerId]) {
    acc[transaction.customerId] = [];
  }
  acc[transaction.customerId].push(transaction);
  return acc;
}, {});

// Step 6: Combine all results into a single object.
const result = {
  totalTransactions,
  totalAmount,
  averageTransactionAmount,
  transactionsPerDay,
  transactionsByCustomer
};

console.log(result);
```

let's go through the solution step by step:

**Step 1: Calculate the total number of transactions.**
```javascript
const totalTransactions = transactions.length;
```
Here, we're simply using the `.length` property of the `transactions` array to get the total number of transactions.

**Step 2: Calculate the total amount of all transactions.**
```javascript
const totalAmount = transactions.reduce((total, transaction) => total + transaction.amount, 0);
```
We're using the `reduce` function to iterate over each transaction in the `transactions` array. The `total` accumulator starts at 0, and for each transaction, we add its `amount` to the total.

**Step 3: Calculate the average amount of transactions.**
```javascript
const averageTransactionAmount = totalAmount / totalTransactions;
```
We've already calculated `totalAmount` and `totalTransactions` in the previous steps. Here, we're simply dividing the total amount by the total number of transactions to get the average.

**Step 4: Group transactions by date.**
```javascript
const transactionsPerDay = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.date]) {
    acc[transaction.date] = [];
  }
  acc[transaction.date].push(transaction);
  return acc;
}, {});
```
We're using `reduce` to iterate over each transaction. For each transaction, we check if there's already an entry in the accumulator (`acc`) for the transaction's date. If not, we initialize it as an empty array. Then, we push the transaction into the array corresponding to its date. This way, we're grouping transactions by date.

**Step 5: Group transactions by customer.**
```javascript
const transactionsByCustomer = transactions.reduce((acc, transaction) => {
  if (!acc[transaction.customerId]) {
    acc[transaction.customerId] = [];
  }
  acc[transaction.customerId].push(transaction);
  return acc;
}, {});
```
Similar to Step 4, we're using `reduce` to iterate over each transaction. For each transaction, we check if there's already an entry in the accumulator (`acc`) for the transaction's `customerId`. If not, we initialize it as an empty array. Then, we push the transaction into the array corresponding to its `customerId`. This way, we're grouping transactions by customer.

**Step 6: Combine all results into a single object.**
```javascript
const result = {
  totalTransactions,
  totalAmount,
  averageTransactionAmount,
  transactionsPerDay,
  transactionsByCustomer
};
```
Finally, we're combining all the results into a single object called `result`, containing `totalTransactions`, `totalAmount`, `averageTransactionAmount`, `transactionsPerDay`, and `transactionsByCustomer`.

These are the kind of problems you can be asked in an interview to solve , Do pratice questions like these and Solve you assignments



