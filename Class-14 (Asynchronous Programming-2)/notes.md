# Asynchronous Programming 2



- What are Promises
- Asynchronous Programming with Promises
- Chaining of Promises
- Async Tasks in Concurrent Order
- Async Task in Serial Order





#### Definition

**Promise:** In JavaScript, a promise is an object representing the eventual completion or failure of an asynchronous operation. It provides a way to handle asynchronous code more cleanly and manage the results or errors that may occur when the operation completes. Promises have three states: pending, resolved (fulfilled), or rejected, and they allow you to attach callback functions to handle these different outcomes.


Like in real life when you make a promise to someone , What can happen to that promise?

When someone makes you promise , that person is not going complete their promise then and there only it genrally takes some time, now after a while that person can either keep the promise or they can break the promise , so basically when the promise is made the outcome of will not come immediately you will have to wait for the person to complete it , and this stage of the promise is called Pending , But as soon as the person who made the promise completes it , the promise is fulfilled and everyone is happy! so this satge when a promise is Successful we call it Resolved and now if the promise is not kept someone breaks the promise then we ca call the promise is not successful and this stage you can call as failure , when a promise fails we say it's rejected , and in both the cases no matter what is the result fulfilled or rejected the promise will finish that means it has to settle , so this stage of promise when a promise finished we call it Settled.


So in real life how a promise is done and works , the same principe is followed in JS as well.




Let's understand the stages of Promises

*States of Promise*

* Made a Promise => Pending State
* Promise can be fulfilled => Resolved
* Promise can not be fulfilled => Rejected State
* Settled => Promise Executed

Promises in JavaScript are a powerful way to handle asynchronous operations. They are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Before we dive deep into promises, let's understand why they are necessary.

### The Need for Promises

In traditional JavaScript, asynchronous operations like web requests were handled using callbacks. A callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action as you have seen in the previous class. However, callbacks can lead to complex, nested code structures known as "callback hell," making the code difficult to read and maintain.

Now you may ask what is a callback hell? We will talk about this after learing Promises  We will see this issue and will solve this with Promises and also async/await , but before solving a problem with promises and async/await you must know what is a promise and async/await

So let's see!


### Creating a Promise

A promise is created using the `Promise` constructor, which takes a function called the "executor" as its argument. The executor function is executed immediately by the Promise implementation, and it receives two functions as parameters: `resolve` and `reject`.

- `resolve(value)` — If the operation is successful, this function is called with the result.
- `reject(error)` — If the operation fails, this function is called with the error.

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (the producing code)
});
```

### A Simple Example

Let's create a simple promise that simulates a coin toss:

```javascript
let coinTossPromise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    // simulate a coin toss delay
    const isHeads = Math.random() > 0.5;
    if (isHeads) {
      resolve("Heads");
    } else {
      reject("Tails - Coin toss resulted in tails, considered as a fail for this example.");
    }
  }, 1000); // simulate a 1-second coin toss
});
```

### Consuming a Promise

To use a promise, you attach callbacks to it using the `.then()`, `.catch()`, and `.finally()` methods.

- `.then()` takes two arguments: a callback for the success case and an optional callback for the failure case but now to handle failures we attach catch
- `.catch()` is used to handle any errors or rejections from the promise.
- `.finally()` allows you to execute logic regardless of the promise's outcome.

```javascript
coinTossPromise
  .then((result) => {
    console.log(result); // "Heads" if resolved
  })
  .catch((error) => {
    console.error(error); // Error message if rejected
  })
  .finally(() => {
    console.log("Coin toss completed."); // Always executed
  });
```


### Chaining Promises

One of the strengths of promises is their ability to be chained. The `.then()` method returns a new promise, which allows for sequential execution of asynchronous operations.

Now suppose , let's take a very real life example to understand this

I have always been an unorganized guy , So my Mother says that If you clean your room and remove the garbage She will reward me with an Ice Cream , Sounds fun right?

So now there are some promises that I have to fulfill like clean room and remove garabage if both the promises are fulfilled then only my Mother will keep her end of the promise of rewarding me with an icecream and If I fail , No ice cream for me!

So if you see the winIceCream promise is dependent on cleanRoom and removeGarbage promise , So how will you make sure that first these two promises are completed and then when they resolve the winIceCream promise should execute

The answer is by Chaining the Promises one after the other

Let's see how chaining works with using the same example

```javascript
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    resolve('Cleaned The Room');
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then removed Garbage');
  });
};

let winIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + ' then won Icecream');
  });
};

cleanRoom().then(function(result){
  return removeGarbage(result);
}).then(function(result){
  return winIcecream(result);
}).then(function(result){
  console.log('finished ' + result); // Logs the final message after all promises are resolved
})
```

In this way you can mainatain your Promises in Sequence!

### Error Handling in Chains

When chaining promises, a rejection in any promise will skip all the subsequent `.then()` methods until it finds a `.catch()`. This behavior simplifies error handling in a chain of asynchronous operations.


To handle rejection more explicitly in our ice cream example, let's adjust the functions to include scenarios where they might fail. We'll also incorporate explicit rejection handling to demonstrate how you can manage both success and failure outcomes in a promise chain.

### Updated Example with Rejections


Suppose I skip cleanRoom and I didn't Fulfill my end of the Promise , Should I win the ice cream then? Nope! or if I clean the room but do not remove the garabage then also I will fail to win the ice cream

Suppose now there is a 50% chance that I will fulfill my Promises and 50% chance that I will not!

First, we update our functions to include a possibility of failure, which will be represented by rejecting the promise. For simplicity, let's say each step has a 50% chance of failing.

```javascript
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    // 50% chance of success
    if (Math.random() < 0.5) {
      resolve('Cleaned The Room');
    } else {
        // 50% chance of failure
      reject('Failed to clean the room');
    }
  });
};

let removeGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    // 50% chance of success
    if (Math.random() < 0.5) {
      resolve(message + ' then removed Garbage');
    } else {
        // 50% chance of failure
      reject('Failed to remove garbage');
    }
  });
};

let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
    resolve(message + ' then won Icecream');
  });
};
```

### Handling Rejections in Promise Chain

When chaining these promises, we can handle rejection at each step or at the end of the chain. Handling it at each step allows for more granular error handling, which might be useful if you want to attempt recovery or perform specific actions based on the type of failure.

```javascript
cleanRoom().then(function(result){
  console.log(result);
  return removeGarbage(result);
}).then(function(result){
  console.log(result);
  return winIcecream(result);
}).then(function(result){
  console.log('finished ' + result);
}).catch(function(error){
  console.error(error); // This will catch any error that occurs in the chain basically the reject parts in this example.
});
```

In this setup, if any of the promises are rejected, the execution jumps directly to the `.catch()` method, skipping any remaining `.then()` methods. This is useful for centralizing error handling logic.

So now if there is any error or failure then sadly No Ice Cream for me!


### Conclusion

By introducing the possibility of failure and handling these failures explicitly, we can build robust asynchronous workflows that can gracefully handle both success and failure scenarios. This flexibility is one of the key strengths of using promises in JavaScript, allowing developers to write more reliable and maintainable code when dealing with asynchronous operations.



- Note to Instructor - Stop for 5-10 mins discuss with the learners about any questions they may have give them some time to digest this whole thing and then move forward



#### Question

**How to read a file using Promises?**

#### Solution

First of we will see how to read file using callback only , this we have seen in our previous class

```javascript
const fs = require('fs')

fs.readFile('f1.txt', cb)

function cb(err, data) {
    if(err) {
        console.log(err)
    }else {
        console.log("This is File 1 data -> " + data)
    }
}

```

**Output:**

File 1's data


Now we will se how to read the file with using promises.

For Resolve State:  

```javascript
const fs = require('fs')

let promiseReadFile = fs.promises.readFile('f1.txt')

promiseReadFile.then(function(data) {
    console.log('This is file data -> ' + data)
})

promiseReadFile.catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

```

**Output:**

This is file data - file data



**Explanation:** There is a in-built process of 'resolve' and 'reject' body which passes through the then and catch method. If the promise is fulfilled then it lies under the 'resolve' state and we consume it using 'then' method. else it lies under the 'reject' state we consume using 'catch' method.  



#### Question

**How to read all files using promises?**

```javascript
const fs = require('fs')

let promiseReadFile1 = fs.promises.readFile('f1.txt')
let promiseReadFile2 = fs.promises.readFile('f2.txt')
let promiseReadFile3 = fs.promises.readFile('f3.txt')

// For File 1
promiseReadFile1.then(function(data) {
    console.log('This is file 1 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

// For File 2
promiseReadFile2.then(function(data) {
    console.log('This is file 2 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

// For File 3
promiseReadFile3.then(function(data) {
    console.log('This is file 3 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

```

```f1.txt
I AM FILE 1 DATA

```

```f2.txt
I AM FILE 2 DATA

```

```f3.txt
I AM FILE 3 DATA

```

**Output:**

![](https://hackmd.io/_uploads/ByPjJNQ02.png)

**Explanation:** Since we are using promises , so promises also follow the event loop Mechanism , So you will see random order here Files will be read in a concurrent fashion

**cleaning the code**

For then method

```javascript
const fs = require('fs')

let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function readFileCallback(data) {
    console.log('This is the data -> ' + data)
}

f1p.then(readFileCallback)
f2p.then(readFileCallback)
f3p.then(readFileCallback)

```

**Output:**

![](https://hackmd.io/_uploads/HJ8D7EX0n.png)

For catch method

```javascript
const fs = require('fs')

let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')

function readFileCallback(data) {
    console.log('This is the data -> ' + data)
}

function handleError(err) {
    console.log('This is my error -> ' + err)
}

f1p.then(readFileCallback)
f2p.then(readFileCallback)
f3p.then(readFileCallback)

f1p.catch(handleError)
f2p.catch(handleError)
f3p.catch(handleError)

```

**Output:**

F1 data , F3 data , F2 data

**Explanation:** 

The provided JavaScript code snippet demonstrates asynchronous file reading using the `fs.promises` API from Node.js. It reads three files (`f1.txt`, `f2.txt`, `f3.txt`) asynchronously and handles the outcomes (data or error) using promises. Let's break down how this code works, especially focusing on the event loop mechanism in Node.js.



### Initialization Phase
1. The `fs` module is required at the beginning. This module provides an API for interacting with the file system.
2. Three variables (`promiseReadFile1`, `promiseReadFile2`, `promiseReadFile3`) are declared and assigned the promises returned by calling `fs.promises.readFile()` on three different files. These operations are asynchronous and non-blocking, meaning the code execution continues without waiting for these operations to complete.

### Event Loop Phases
The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations, despite JavaScript being single-threaded. Here's how the event loop handles the promises:

#### Poll Phase
- **Reading Files**: The event loop moves to the poll phase, where it checks for I/O events and executes their callbacks when the file reading operations complete. The `fs.promises.readFile()` method initiates reading files asynchronously. The actual reading happens in the background (outside the event loop), thanks to Node's libuv library.

#### Check Phase
- Once a file read operation completes, the corresponding promise is either fulfilled or rejected, depending on the outcome of the operation.
- If the file was read successfully, the promise is fulfilled, and the callback passed to `.then()` is scheduled to be called with the file data as its argument.
- If there was an error reading the file (e.g., the file doesn't exist), the promise is rejected, and the callback passed to `.catch()` is scheduled to be called with the error as its argument.

#### Microtasks Queue
- **Promise Callbacks Execution**: Promise callbacks (`then` and `catch`) are considered microtasks in Node.js and are executed immediately after the current phase of the event loop completes and before moving to the next phase. This means that as soon as the promise settles (either fulfilled or rejected), the corresponding `.then()` or `.catch()` callbacks are placed in the microtasks queue and executed in the order they were scheduled.
- The callbacks for reading `f1.txt`, `f2.txt`, and `f3.txt` are executed as soon as their respective read operations complete and the event loop gets to processing microtasks. The order of logs (`This is file 1 data ->`, `This is file 2 data ->`, `This is file 3 data ->`) to the console depends on the order in which the files are read successfully. It's not guaranteed to be in the order `f1.txt`, `f2.txt`, `f3.txt` as you already know why?. Concurrency!

Ask students to answer this as they have already learnt about this in the previous class

### Error Handling
- Each `readFile` promise has a `.catch()` method attached. If any file read results in an error, its respective `.catch()` method logs the error to the console.

### Conclusion
- The event loop facilitates the non-blocking I/O operations by allowing the file reads to happen in the background. Once these operations are complete, the event loop ensures the registered callbacks are executed at the appropriate time.
- The promises and the microtask queue allow handling asynchronous operations' outcomes in a clear and manageable way, executing promise callbacks as soon as possible after their asynchronous operations complete.



**Visualization for microtask queue**

![](https://hackmd.io/_uploads/SyaF_4QCh.png)


#### Example

```javascript
function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }


logA();
setTimeout(logB, 0);
Promise.resolve().then(logC);
logD();

```

**Output:**

![](https://hackmd.io/_uploads/r1wuFNm03.png)

**Explanation:** MicroTaks queue will be given the higher priority promisified code will run earlier than callback.

**Visulization:**

![](https://hackmd.io/_uploads/HyJBhVQ0h.gif)



**Promise Chaining:** Suppose Now , we Want all this files to be read in a serial order , You already know Promise chaining that how you can maintain a squence of Promises. It involves linking multiple asynchronous operations together, ensuring that one operation starts only after the previous one has completed successfully. This is typically achieved using the `.then()` method to handle the result of a Promise and return another Promise, allowing you to chain multiple operations together in a clean and sequential manner.  


![](https://hackmd.io/_uploads/Sy4elHQC2.png)

#### Example

```javascript
const fs = require('fs')

console.log('Before')

let f1p = fs.promises.readFile('f1.txt')

function cb1(data) {
    console.log('This is File 1 Data -> ' + data)

    let f2p = fs.promises.readFile('f2.txt')

    return f2p
}

function cb2(data) {
    console.log('This is File 2 Data -> ' + data)

    let f3p = fs.promises.readFile('f3.txt')

    return f3p
}

function cb3(data) {
    console.log('This is File 3 Data -> ' + data)
}

f1p.then(cb1).then(cb2).then(cb3)

console.log('After')

```

**Output:**

![](https://hackmd.io/_uploads/SJAXSrQ02.png)

**Explanation:** 

 this demonstrates how to read files asynchronously using Promises and the `fs` (File System) module's `promises` API. Let's break down what it does step by step:

1. **Import the `fs` module**: The code starts by requiring the `fs` module, which provides a lot of functionality to work with the file system in Node.js.

2. **Print a message "Before"**: This shows that the script has started executing. It's a simple console log that gets printed before any file operations are initiated.

3. **Read the first file (`f1.txt`)**: It uses `fs.promises.readFile('f1.txt')` to asynchronously read the contents of `f1.txt`. This method returns a promise that will eventually be fulfilled with the contents of the file.

4. **Define callback functions**: Three callback functions (`cb1`, `cb2`, `cb3`) are defined, each intended to handle the data from the files `f1.txt`, `f2.txt`, and `f3.txt`, respectively.
   
   - **`cb1(data)`**: This function is called when `f1.txt` has been read successfully. It logs the contents of `f1.txt` to the console, then proceeds to read `f2.txt` in a similar asynchronous manner, returning the promise from reading `f2.txt`.
   
   - **`cb2(data)`**: Similar to `cb1`, this function handles the data from `f2.txt`, logging it and then reading `f3.txt` asynchronously, again returning the promise from the read operation.
   
   - **`cb3(data)`**: This function is the final callback, handling the contents of `f3.txt` and logging them to the console.

5. **Chain the operations**: The code then chains these operations using `.then()` syntax. This means that `cb1` will be called with the data from `f1.txt` once it's available. The promise returned by `cb1` (which involves reading `f2.txt`) is then handled by `cb2`, and similarly, `cb2` returns a promise for reading `f3.txt`, which is handled by `cb3`.


In summary, this code demonstrates asynchronous file reading in Node.js, using Promises to handle the data from each file in sequence. It shows how to chain asynchronous operations in a clean and readable manner, with each step waiting for the previous one to complete before proceeding, without blocking the execution of subsequent code like the "After" log message.

this is how you can achieve Serial Operations with Promises

Start the Doubt Session