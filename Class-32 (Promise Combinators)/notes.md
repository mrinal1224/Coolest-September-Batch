---
title: Agenda
description:
duration: 600
card_type: cue_card
---

**Agenda of this Lecture:**

- What are Promise Combinators
- Promise.all
- Promise.allSettled
- Promise.race
- Promise.any
- Polyfills of Each one of them


---
title: What are Promise Combinators
description:
duration: 600
card_type: cue_card
---


Promise combinators are some methods that are defined in JavaScript used to manage multiple promises together.

They help simplify handling several asynchronous operations by providing different strategies for dealing with groups of promises. Here are the main promise combinators you'll encounter:

1. **Promise.all()**:
  - **Use**: When you want to run multiple asynchronous operations in parallel and wait for all of them to complete before proceeding.
   - **Behavior**: It takes an array of promises and returns a single promise. This returned promise resolves when all the promises in the array have resolved, or it rejects as soon as one of the promises in the array rejects.
   - **Example**: If you're fetching data from multiple APIs and need all the data before you can process it, `Promise.all()` would be useful.
   - **Analogy**: Imagine organizing a group project where the project can only be considered complete when every member has finished their part. If any member fails to complete their task, the entire project fails. This is like `Promise.all()`, where every task (promise) needs to succeed for the overall operation to be successful.

2. **Promise.allSettled()**:
   - **Use**: Similar to `Promise.all()`, but used when you want to wait for all promises to complete regardless of whether they resolve or reject.
   - **Behavior**: It returns a promise that resolves after all the given promises have either resolved or rejected. The result is an array of objects describing the outcome of each promise.
   - **Example**: Useful when you need to perform multiple operations, but the success or failure of each operation does not depend on the others.
   - **Analogy**: Consider receiving updates on the health status of every member of a distant family. Regardless of whether the news is good or bad for each individual, you want to hear back about everyone. Here, `Promise.allSettled()` corresponds to waiting for all news, good or bad, without any of them blocking the others.

3. **Promise.race()**:
   - **Use**: When you need to run multiple promises but only care about the one that finishes first.
   - **Behavior**: It returns a promise that resolves or rejects as soon as one of the promises in an iterable resolves or rejects, with the value or reason from that promise.
   - **Example**: Ideal for timeout patterns where you reject a slow API request if it takes too long to respond.
  - **Analogy**: Think of a sprint race among several runners where the race ends as soon as the first runner crosses the finish line. You don't wait for all runners to finish; the result is decided by the fastest one. Similarly, `Promise.race()` completes as soon as the first promise settles, either resolves or rejects.


4. **Promise.any()**:
   - **Use**: Similar to `Promise.race()`, but it only rejects if all of the input promises have rejected. The rejection reason is an AggregateError, holding all the rejection reasons.
   - **Behavior**: It returns the first promise that resolves; it does not care if other promises reject (unless all of them reject).
   - **Example**: Useful when you need a successful result from multiple redundant sources with similar data or functionality.
   - **Analogy**: Imagine you're trying to catch a flight, and there are several traffic routes to get to the airport. You only need one route to be clear to make it on time. `Promise.any()` acts like taking whichever route clears up first while ignoring the ones that are jammed unless all routes are blocked, in which case you miss your flight.



  So Now I suppose the Overall Idea about them is clear now let's see some code examples to make everything more clear to you


---
title: Promise.all
description:
duration: 600
card_type: cue_card
---

`Promise.all` is a powerful utility in JavaScript for managing multiple promises simultaneously. It takes an iterable of promises as an input and returns a single `Promise` that resolves when all of the input promises have resolved or rejects if any of the input promises reject. Let's go through its functionality step by step with an example and discuss its use cases.

### How Promise.all Works

1. **Input**: `Promise.all` takes an array (or any iterable) of promises.
2. **Output**: It returns a new promise.
3. **Resolution**: The promise returned by `Promise.all` resolves only when every promise in the input iterable has resolved. The result is an array of the results from the input promises, in the same order as the promises were provided.
4. **Rejection**: If any of the input promises reject, the promise returned by `Promise.all` immediately rejects with the reason of the first promise that rejected. This rejection is "fast-failing" and ignores the result of any other promises (whether they resolve or reject).

### Example Code

Let's consider a practical simulating an API example where you want to fetch user data and posts from two separate API endpoints simultaneously:

```javascript
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
    });
}

function fetchUserPosts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
    });
}

Promise.all([fetchUserData(), fetchUserPosts()])
    .then(results => {
        console.log("User Data:", results[0]); // { userId: 1, username: "JohnDoe" }
        console.log("User Posts:", results[1]); // ["Post 1", "Post 2", "Post 3"]
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });
```

### Step-by-Step Explanation

1. **Creating Promises**: Two functions, `fetchUserData` and `fetchUserPosts`, each return a promise that resolves after 1 second. Each promise simulates fetching data from a network.
2. **Using Promise.all**: These promises are passed as an array to `Promise.all`.
3. **Handling Results**: When both promises resolve, `Promise.all` also resolves. Its resolution value is an array containing the results of each promise in the order they were provided. These results are then logged to the console.
4. **Error Handling**: If any promise had rejected, the catch block would log the error if there are any

### Use Cases

`Promise.all` is especially useful in scenarios where multiple asynchronous tasks need to be performed simultaneously, and you need all results together to proceed. Here are a few use cases:

- **Data Aggregation**: Gathering data from multiple sources/APIs before processing.
- **Initialization**: Performing multiple setup tasks before an application becomes ready.
- **Database Transactions**: Executing multiple database operations that depend on each other and need to be committed only if all succeed.

### Conclusion

`Promise.all` is a robust method for handling multiple promises concurrently. It helps in optimizing asynchronous operations by parallel processing and provides a straightforward way to manage their results or handle errors efficiently.

---
title: Promise.allSettled
description:
duration: 600
card_type: cue_card
---


`Promise.allSettled` is another useful function in JavaScript for handling multiple promises. Unlike `Promise.all`, which immediately rejects upon any of the input promises rejecting, `Promise.allSettled` waits for all promises to either resolve or reject and then resolves with an array of objects representing the outcome of each promise. This makes it particularly useful for cases where you want to ensure that all promises have completed regardless of their individual success or failure.

### How Promise.allSettled Works

1. **Input**: `Promise.allSettled` takes an array (or any iterable) of promises.
2. **Output**: It returns a new promise that always resolves.
3. **Resolution**: The promise returned by `Promise.allSettled` resolves with an array of objects. Each object represents the result of each promise in the iterable and has either a `status` of `'fulfilled'` with a `value` (if the promise resolved) or a `status` of `'rejected'` with a `reason` (if the promise rejected).

### Example Code

Let's create an example where we have two promises: one that resolves and another that rejects. This will help illustrate how `Promise.allSettled` handles different outcomes.

```javascript
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ userId: 1, username: "JohnDoe" }), 1000);
    });
}

function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Failed to fetch posts")), 1000);
    });
}

Promise.allSettled([fetchUserData(), fetchUserPosts()])
    .then(results => {
        console.log(results); // [{ status: 'fulfilled', value: {...}}, { status: 'rejected', reason: Error }]
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index + 1} resolved with value:`, result.value);
            } else {
                console.error(`Promise ${index + 1} rejected with reason:`, result.reason);
            }
        });
    });
```

### Step-by-Step Explanation

1. **Creating Promises**: We define two functions, `fetchUserData` and `fetchUserPosts`. The first function returns a promise that resolves after 1 second with user data, and the second returns a promise that rejects after 1 second with an error.
2. **Using Promise.allSettled**: We pass both promises to `Promise.allSettled`.
3. **Handling Results**: After both promises have settled (either resolved or rejected), `Promise.allSettled` resolves. The result is an array of objects where each object details the outcome of each promise. We then loop through the results to check whether each promise was fulfilled or rejected and handle accordingly.
4. **Displaying Output**: The results are printed to the console, showing the status and value or reason for each promise.

### Use Cases

`Promise.allSettled` is valuable in scenarios where the completion of all operations is critical, regardless of their success:

- **Audit Logs**: Performing several operations that should each be logged whether they succeed or fail.
- **Cleanup Tasks**: Completing multiple cleanup operations in a system, where each task's success or failure does not affect the other.
- **Data Loading**: Loading multiple data sources where each source's failure should be independently handled and not block other data from being processed.

### Conclusion

`Promise.allSettled` is essential when you need to ensure all operations have completed and want to handle their results separately, making it a robust choice for handling multiple asynchronous operations that should not necessarily depend on each other's success.

---
title: Promise.race
description:
duration: 600
card_type: cue_card
---

`Promise.race` is another method in JavaScript used to handle multiple promises. It allows you to race multiple promises against each other and returns a promise that settles as soon as the first of the input promises settles, whether it resolves or rejects. This method is especially useful for timing operations or handling situations where the first response is prioritized over others.

### How Promise.race Works

1. **Input**: `Promise.race` takes an array (or any iterable) of promises.
2. **Output**: It returns a new promise.
3. **Settlement**: The promise returned by `Promise.race` resolves or rejects as soon as one of the input promises resolves or rejects. The result or error of the fastest promise is used as the result or error of the returned promise.

### Example Code

Let's consider a scenario where we have two promises: one that resolves quickly and another that either resolves slowly or rejects quickly. This example will demonstrate how `Promise.race` handles both the resolve and reject conditions.

```javascript
function quickResolve() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Quickly resolved"), 500);
    });
}

function slowResolveOrFastReject() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Slowly resolved"), 2000);
        setTimeout(() => reject(new Error("Quickly rejected")), 1000);
    });
}

Promise.race([quickResolve(), slowResolveOrFastReject()])
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });
```


*Note to Instructor - You can change the timings and show how race rejects and resolves*

### Step-by-Step Explanation

1. **Creating Promises**: 
   - `quickResolve` is a promise that resolves after 500 milliseconds.
   - `slowResolveOrFastReject` is a promise that is set to resolve after 2000 milliseconds but reject after 1000 milliseconds.
2. **Using Promise.race**: Both promises are passed to `Promise.race`.
3. **Handling Outcome**: 
   - If `quickResolve` is faster, `Promise.race` resolves with the message "Quickly resolved".
   - If `slowResolveOrFastReject` rejects before `quickResolve` resolves, `Promise.race` rejects with the error "Quickly rejected".
4. **Displaying Output**: The result or error is then printed to the console.

### Use Cases

`Promise.race` is useful in several scenarios, including:

- **Timeouts for Promises**: Ensuring that a promise either resolves within a certain time or times out, especially useful for network requests or any operations where a response time guarantee is needed.
- **Responding to User Interaction**: Returning the result of whichever user interaction completes first (like clicking a button vs automatic timeout).
- **System Resource Races**: Handling scenarios where multiple resources are requested and only the first is needed.

### Conclusion

`Promise.race` provides a powerful way to handle multiple promises by responding to the first one that settles. It is particularly useful in scenarios where response time is critical and you only need the result of the fastest promise, whether it resolves or rejects.

---
title: Promise.any
description:
duration: 600
card_type: cue_card
---

`Promise.any` is a relatively recent addition to JavaScript's Promise APIs, introduced to handle multiple promises by accepting the first promise that resolves successfully, ignoring any promises that reject, unless all promises reject. It offers a solution when you have several asynchronous operations and care only about the first successful completion, disregarding any failures 

### How Promise.any Works

1. **Input**: `Promise.any` takes an array (or any iterable) of promises.
2. **Output**: It returns a new promise.
3. **Resolution**: The promise returned by `Promise.any` resolves as soon as any one of the input promises resolves. The resolution value is the result of the first promise to successfully resolve.
4. **Rejection**: If all of the input promises reject, the promise returned by `Promise.any` rejects with an `AggregateError`, a special error type that groups together individual errors from each of the promises that failed.

### Example Code

Let's see `Promise.any` in action with an example where we have several promises, some of which might resolve and others might reject:

```javascript
function resolveQuickly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved quickly"), 500);
    });
}

function resolveSlowly() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Resolved slowly"), 2000);
    });
}

function rejectFast() {
    return new Promise((reject) => {
        setTimeout(() => reject(new Error("Rejected fast")), 300);
    });
}

function rejectSlowly() {
    return new Promise((reject) => {
        setTimeout(() => reject(new Error("Rejected slowly")), 1500);
    });
}

Promise.any([rejectFast(), rejectSlowly(), resolveQuickly(), resolveSlowly()])
    .then(result => {
        console.log("Result:", result);
    })
    .catch(error => {
        console.error("Error:", error);
        if (error instanceof AggregateError) {
            // Log each error individually
            error.errors.forEach((err, idx) => console.log(`Error ${idx + 1}:`, err.message));
        }
    });
```

### Step-by-Step Explanation

1. **Creating Promises**: We create four promises: two that resolve (one quickly and one slowly) and two that reject (one quickly and one slowly).
2. **Using Promise.any**: These promises are passed to `Promise.any`.
3. **Handling Outcome**:
   - If `resolveQuickly` resolves first, `Promise.any` resolves with the result "Resolved quickly".
   - The fast and slow rejections are ignored unless all promises reject.
4. **Error Handling**: If all promises were to reject, `Promise.any` would reject with an `AggregateError` containing all individual rejection reasons, which are then logged.

### Use Cases

`Promise.any` is particularly useful in the following scenarios:
- **Fetching Redundant Resources**: Loading the same resource from multiple sources or mirrors and using the first successful load.
- **Service Availability**: Sending requests to multiple services or endpoints where you only need a response from one to proceed.
- **Competitive Conditions**: Handling scenarios where multiple potential sources of data or actions are available, and only the fastest (first successful) is needed.

### Conclusion

`Promise.any` complements the existing suite of Promise combinators by providing a way to respond positively as soon as the first promise resolves successfully, thus ignoring all failures unless they are complete. This functionality is especially useful in optimizing performance and responsiveness in applications where multiple potential sources or paths can fulfill a requirement but only one is needed.

---
title: Polyfill for Promise.all
description:
duration: 600
card_type: cue_card
---


**Let’s implement polyfill for Promise.all**

Approach:

*We will create a `myall` function which will take an array of promises as input*


**In the `myall` function we will do below:**


1. We will declare a const variable named a promise, a result that will store the result of all the promises, and a total that will keep count of how many promises have resolved with values.


2. we will create a new promise, inside the promise we will iterate over all the promises received as input, and whenever an input promise resolves we will increment the total and we will store the resolved value in the result array


3. at the same index where the promise was present. If the total is equal to the input array’s length then we will resolve with the result array. 
 
4. If the promise rejects with an error then straight away we will reject it with the same error.

```js
Promise.myall = function (values) { 
    const promise = new Promise(function (resolve, reject) { 
        let result = []; 
        let total = 0; 
        values.forEach((item, index) => { 
            Promise.resolve(item).then((res) => { 
                result[index] = res; 
                total++; 
                if (total === values.length) 
                    resolve(result); 
            }). 
                catch((err) => { 
                    reject(err); 
                }) 
        }) 
    }) 
    return promise 
} 

```

`myAll` function is designed to take an array of promises (or values that can be resolved as promises) and returns a new promise that resolves when all the input promises have resolved or rejects if any of the input promises reject. Below, I'll break down the code step-by-step to explain how it works:

### Step 1: Define `Promise.myAll`
```javascript
Promise.myAll = function(values) { 
```
This line defines a new static method named `myAll` on the `Promise` constructor. The function takes one parameter, `values`, which is expected to be an array of promises (or values).

### Step 2: Create and Return a New Promise
```javascript
    const promise = new Promise(function(resolve, reject) { 
```
A new `Promise` is created. The constructor of the `Promise` receives a function with two arguments: `resolve` and `reject`. These functions are used to settle the promise: `resolve` to fulfill the promise and `reject` to reject it.

### Step 3: Initialize Variables
```javascript
        let result = []; 
        let total = 0; 
```
Two variables are initialized:
- `result`: An array to store the results of each promise.
- `total`: A counter to track how many promises have successfully resolved.

### Step 4: Iterate Over Each Item in `values`
```javascript
        values.forEach((item, index) => { 
```
The `forEach` loop is used to iterate over each item in the `values` array. Each item (`item`) and its index (`index`) are provided as arguments to the callback function.

### Step 5: Handle Each Promise
```javascript
            Promise.resolve(item).then((res) => { 
                result[index] = res; 
                total++; 
                if (total === values.length) 
                    resolve(result); 
            }).catch((err) => { 
                reject(err); 
            }) 
        }) 
```
For each item:
- `Promise.resolve(item)`: Ensures that the `item` is a promise. If it's not, it's converted into a resolved promise with `item` as the resolved value.
- `.then((res) => { ... })`: When the promise resolves, the result (`res`) is stored in the `result` array at the corresponding `index`. The `total` counter is incremented. If the `total` number of resolved promises equals the length of the `values` array, all promises have resolved, and the `result` array is passed to the `resolve` function of the outer promise.
- `.catch((err) => { ... })`: If any promise rejects, the error (`err`) is passed to the `reject` function of the outer promise, and the entire process stops.

### Step 6: Return the Outer Promise
```javascript
    }) 
    return promise 
}
```
After setting up the promise handling logic, the newly created promise (`promise`) is returned. This promise will eventually resolve with an array of results if all input promises resolve, or it will reject with the reason from the first promise that rejects.

This implementation ensures that all promises are processed in parallel, and it will correctly handle an array of mixed values and promises, resolving when all are complete, or rejecting upon the first failure.

**Let's test it with some Promises**


To test the custom `Promise.myAll` function, we need to create some promises that resolve and some that reject. We'll set up test cases for both scenarios:

### Scenario 1: All Promises Resolve
Here, we'll create an array of promises that all resolve, and we'll use `Promise.myAll` to handle them. We expect it to resolve with an array containing the resolved values of each promise.

### Scenario 2: At Least One Promise Rejects
In this scenario, we'll include a promise that rejects among others that resolve. We expect `Promise.myAll` to reject with the error of the first promise that rejects.

Here's the code to test these scenarios:

```javascript
// Define Promise.myAll as provided
Promise.myAll = function (values) { 
    return new Promise(function (resolve, reject) { 
        let result = []; 
        let total = 0; 
        values.forEach((item, index) => { 
            Promise.resolve(item).then((res) => { 
                result[index] = res; 
                total++; 
                if (total === values.length) 
                    resolve(result); 
            }).catch((err) => { 
                reject(err); 
            }) 
        }) 
    }) 
} 

// Test 1: All promises resolve
let promises1 = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

Promise.myAll(promises1)
    .then(results => console.log('All resolved:', results))
    .catch(error => console.error('Rejected:', error));

// Test 2: Including a promise that rejects
let promises2 = [
    Promise.resolve(10),
    Promise.reject(new Error('Failed')),
    Promise.resolve(30)
];

Promise.myAll(promises2)
    .then(results => console.log('All resolved:', results))
    .catch(error => console.error('Rejected:', error));
```

### Running the Test
To run this code, simply copy it into a JavaScript environment that supports promises, such as a modern web browser's developer console or Node.js.

1. **Output Expected for Test 1**: The console should display `"All resolved: [1, 2, 3]"` since all promises resolve successfully.
2. **Output Expected for Test 2**: The console should display `"Rejected: Error: Failed"` since one of the promises in the array rejects, and according to the behavior of `Promise.all` and our custom `Promise.myAll`, the overall promise should reject with the error of the first rejecting promise.


---
title: Polyfill for Promise.any
description:
duration: 600
card_type: cue_card
---

Implementation of a polyfill for `Promise.any`, a method that resolves with the result of the first promise that fulfills among a group of promises. If all the promises reject, then `Promise.any` rejects with an aggregate error.

### Implementing `Promise.any`

The `Promise.any` method takes an array of promises and returns a promise that fulfills as soon as one of the input promises fulfills. If all the input promises are rejected, it returns an error that aggregates the errors of the promises.

Here is the polyfill:

```js
Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) reject(new AggregateError('No promises were provided.'));

        let rejections = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve) // Resolve immediately on any promise resolution
                .catch((error) => {
                    rejections[index] = error;
                    rejectedCount++;
                    if (rejectedCount === promises.length) {
                        reject(new AggregateError(rejections, 'All promises were rejected.'));
                    }
                });
        });
    });
};
```

### Explanation of `Promise.myAny` Implementation

1. **Define `Promise.myAny`:**
   ```javascript
   Promise.myAny = function(promises) {
   ```
   This line adds a new method named `myAny` to the `Promise` object. It takes an array of promises or values (`promises`).

2. **Create and Return a New Promise:**
   ```javascript
       return new Promise((resolve, reject) => {
   ```
   A new `Promise` is created, with `resolve` and `reject` functions to determine its final state.

3. **Handle Empty Array Input:**
   ```javascript
       if (promises.length === 0) reject(new AggregateError('No promises were provided.'));
   ```
   If the input array is empty, the promise is rejected with an `AggregateError` indicating that no promises were provided.

4. **Initialize Variables for Rejection Tracking:**
   ```javascript
       let rejections = [];
       let rejectedCount = 0;
   ```
   - `rejections`: Array to store errors from rejected promises.
   - `rejectedCount`: Counter to track the number of rejections.

5. **Iterate Over Each Promise in `promises`:**
   ```javascript
       promises.forEach((promise, index) => {
   ```
   Iterates over each promise in the array.

6. **Resolve or Reject Each Promise:**
   ```javascript
           Promise.resolve(promise)
               .then(resolve) // If a promise fulfills, resolve `myAny` immediately.
               .catch((error) => {
                   rejections[index] = error;
                   rejectedCount++;
                   if (rejectedCount === promises.length) {
                       reject(new AggregateError(rejections, 'All promises were rejected.'));
                   }
               });
   ```
   - `Promise.resolve(promise)`: Ensures the item is a promise.
   - `.then(resolve)`: Resolves the `myAny` promise with the result of the first fulfilled promise.
   - `.catch(...)`: Handles rejections, storing the error and incrementing the rejection counter. If all promises reject, `myAny` is rejected with an `AggregateError` containing all the rejection reasons.

7. **Return the Outer Promise:**
   The promise handling logic ensures that `myAny` will resolve with the result of the first promise that fulfills or reject with an aggregate error if all promises reject.

### Testing `Promise.myAny`

To test this implementation, we can create scenarios where promises resolve and reject in various orders:

```javascript
// Test 1: First Promise Resolves
let promises1 = [
    Promise.resolve(1),
    Promise.reject(new Error('Failed')),
    Promise.resolve(3)
];

Promise.myAny(promises1)
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.error('Rejected with:', error));

// Test 2: All Promises Reject
let promises2 = [
    Promise.reject(new Error('Failed')),
    Promise.reject(new Error('Error')),
    Promise.reject(new Error('Problem'))
];

Promise.myAny(promises2)
    .then(result => console.log('Resolved with:', result))
    .catch(error => console.error('Rejected with:', error.errors));
```

**Expected Outputs:**
- **Test 1**: Should log `"Resolved with: 1"` as the first promise resolves.
- **Test 2**: Should log `"Rejected with:"` followed by an array of error messages, as all promises reject. 

This polyfill and these tests mimic the behavior of the official `Promise.any` method, providing a useful fallback where `Promise.any` is not natively supported.


---
title: Polyfill for Promise.race
description:
duration: 600
card_type: cue_card
---

Implementing a polyfill for `Promise.race` involves creating a function that returns a promise that resolves or rejects as soon as one of the promises in the input array settles—that is, as soon as one of them either resolves or rejects. Here’s how to create a custom implementation, named `Promise.myRace`.

### Implementation of `Promise.myRace`

```js
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (promises.length === 0) {
            throw new TypeError('Cannot perform Promise.race on an empty array');
        }

        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
};
```

### Explanation of `Promise.myRace` Implementation

1. **Define `Promise.myRace`:**
   ```javascript
   Promise.myRace = function(promises) {
   ```
   This line defines a new method named `myRace` on the `Promise` object. It takes an array of promises or values (`promises`).

2. **Create and Return a New Promise:**
   ```javascript
       return new Promise((resolve, reject) => {
   ```
   A new `Promise` is created, and the function provided to the constructor receives `resolve` and `reject` functions used to determine the promise's outcome.

3. **Handle Empty Array Input:**
   ```javascript
       if (promises.length === 0) {
           throw new TypeError('Cannot perform Promise.race on an empty array');
       }
   ```
   If the input array is empty, a `TypeError` is thrown immediately, as racing over an empty array of promises does not logically proceed.

4. **Iterate Over Each Promise in `promises`:**
   ```javascript
       promises.forEach(promise => {
   ```
   Each promise in the array is processed.

5. **Resolve or Reject Based on the First Settled Promise:**
   ```javascript
           Promise.resolve(promise).then(resolve).catch(reject);
   ```
   - `Promise.resolve(promise)`: Converts non-promise values to promises and ensures that `promise` is a promise.
   - `.then(resolve)` and `.catch(reject)`: These methods will trigger the resolution or rejection of the `myRace` promise as soon as one of the input promises settles. It ensures that the `myRace` promise adopts the state of the first promise to settle.

6. **Return the Outer Promise:**
   The outer promise (`Promise.myRace`) will resolve or reject based on the first promise in the input array to settle.

### Testing `Promise.myRace`

To ensure the `Promise.myRace` method behaves as expected, you can test it with promises that resolve and reject at different times:

```javascript
// Test 1: First Promise Resolves Quicker
let promises1 = [
    new Promise(resolve => setTimeout(() => resolve('Quick'), 100)),
    new Promise(resolve => setTimeout(() => resolve('Slow'), 500))
];

Promise.myRace(promises1)
    .then(result => console.log('Race won by:', result))
    .catch(error => console.error('Race error:', error));

// Test 2: First Promise Rejects Quicker
let promises2 = [
    new Promise((reject) => setTimeout(() => reject(new Error('Quick Fail')), 100)),
    new Promise(resolve => setTimeout(() => resolve('Slow Success'), 500))
];

Promise.myRace(promises2)
    .then(result => console.log('Race won by:', result))
    .catch(error => console.error('Race error:', error));
```

**Expected Outputs:**
- **Test 1**: Should log `"Race won by: Quick"` as the first promise resolves faster than the second.
- **Test 2**: Should log `"Race error:"` followed by the error message, as the first promise to settle is the one that rejects.

This setup demonstrates the expected behavior of `Promise.race` where the outcome of the entire operation depends solely on the first promise to settle, whether it resolves or rejects.


*Note to Instructor-* 
**Promise.allSettled can be provided as Homework and will be added in the post reads and revision material**


Start the Doubt Session