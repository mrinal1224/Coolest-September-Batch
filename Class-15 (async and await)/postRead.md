## Asynchronous Programming 3

### Agenda



- Introduction to Async/Await
- The Basics of Async/Await
- Error Handling with Async/Await
- Practical Examples of Async/Await
- Best Practices and Common Pitfalls


#### What is Async/Await?

`async/await` is a modern JavaScript syntax feature that simplifies writing asynchronous code, making it more readable and easier to debug. Introduced in ES2017, it builds upon promises, providing a cleaner, more elegant syntax for working with asynchronous operations.

#### Why Async/Await?

Asynchronous operations are fundamental in JavaScript for non-blocking operations, such as fetching data from a server or reading files. While promises significantly improved asynchronous code readability, `async/await` further simplifies the syntax, allowing developers to write code that looks synchronous while executing asynchronously.

Look Synchronous? Didn't make sense right , let's understand



#### Declaring an Async Function

An `async` function returns a promise, automatically wrapping non-promise values in a promise. Here in this function we have initalized it with using the async keyword ,Whenever a function is initialized with a async keyword it always returns a Promise , although you can see we are just returing a simple data value but it will be returned with a promise

let's see the output 

```javascript
async function fetchData() {
  return 'data';
}

const dataPromise = fetchData()
console.log(dataPromise)
```

**Output**

Promise { 'data' }

Calling `fetchData()` returns a promise that can be resolved with 'data'.

Now how to resolve this promise?

You already know that to resolve a promise you can use the then method

So you can resolve it like 
```javascript
async function fetchData() {
  return 'data';
}

const dataPromise = fetchData()
console.log(dataPromise)

dataPromise.then((res)=> console.log(res))
```

This will resolve the promise for you and will give you the exact resolved value

**quick recap**

Whenever you use the async keyword with a function the function will always start returning a promise with it's value.

Now here I have retured a value that is getting wrapped inside a promise and being returned.

What if I instead of a value now I return a promise itself?

Suppose I create a very basic promise and I return it from the async function

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


async function fetchData() {
  return p;
}

const dataPromise = fetchData()
console.log(dataPromise)

// dataPromise.then((res)=> console.log(res))
```


This promise p is a very basic promise which just get resolved with a value 'Promise Resolved'  but now if I return this from the function fetchData try to guess what will be returned?

will this promise be wrapped inside another promise?
let's find out

**output**
Promise {<pending>}

So if the returned value is already a promise then it will be returned as it is and if it's a normal value it will be wrapped inside a promise and then it will be returned

So no matter what if the function is async it will always return a promise!

Now you can resolve this simply by again using the then method


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


async function fetchData() {
  return p;
}

const dataPromise = fetchData()
console.log(dataPromise)

dataPromise.then((res)=> console.log(res))
```

**output**
- Promise {<pending>}
- Promise Resolved


So this is how the async keyword works!



#### Using Await

OK! async keyword is clear that how it works , now let's move to understand what is this await keyword , The combination of async and await is used to handle promises , but before directly jumping to await keyword, let's understand how Promises were handled before async/await and then we will handle the promises with async/await so you will get a clear idea on what is happening


See the code snippet

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


function fetchData() {
  
}

```


Over here I have cleaned up the code and I have a very basic Promise which just resolves and a simple function fetchData , this time the function is not async , it's a normal function

So you will you handle the promise from the fetchData function?

Exactly! by using the then method

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})


function fetchData() {
  p.then((res)=> console.log(res))
}

fetchData()

```

**output**
- Promise Resolved

Perfect!


Now let's suppose I want to handle this promise within an async function


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  
}



function fetchData() {
  p.then((res)=> console.log(res))
}

fetchData()

```

So Now I have a async function and I want to handle the Promise with this function , to do this you can simply use the await keyword inside the async function and it will automatically resole the promise for you , let's see


```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  const val = await p
  console.log(val)
}

handlePromise()



function fetchData() {
  p.then((res)=> console.log(res))
}

// fetchData()

```

Over here you see you just used the await keyword inside the async function and as soon as you call the function the await keyword resolves the promise and provides you the resolved value un the variable val

**output**
- Promise Resolved



**important things to note**

- Await can only be used inside an async function
- You write the await keyword infornt of a Promise and it handles it


Great! Now we know how to handle promises with normal function and how an async function can handle promise with using the await keyword!

but still there is no proper difference that you see the Syntax is diffrent of course but if we can handle promise with the then method then why we even need async/await to handle promises?

Let's find out!


Now I will change my Promise a Little bit

```javascript

const p = new Promise((resolve , reject)=>{
  resolve('Promise Resolved')
})

async function handlePromise() {
  const val = await p
  console.log(val)
}

handlePromise()



function fetchData() {
  p.then((res)=> console.log(res))
}

// fetchData()

```

In this snippet the promise is getting executed(resolved) immediately but Promises are meant to take some time because we do heavy operations with them like reading a big file , fetching data from an api and all , So let's make the promise act like a real promise for that we will resolve the promise after some delay with setting a little delay

so Now the code snippet looks like

```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

// async function handlePromise() {
//   const val = await p
//   console.log(val)
// }

// handlePromise() // This code to be used later



function fetchData() {
  // JS engine will not wait for the promise 
  p.then((res)=> console.log(res))
  console.log("Create Impact")
}

 fetchData()

```

Now focus on the Promise and the fetchData function

What will be the output and in what  order this will be executed?

Create Impact then promise Resolved , or Promise Resolved then  Create Impact?


**output**
- Create Impact
- Promise Resolved // after 10 sec

Exactly right? The console.log statement will be executed first as the promise will now wait in the event loop and after 10 seconds it will be resolved , The event loop will do it's job perfectly

This is how promises work!


Now , lets try to resolve this promise with async/await and let's see what will happen

```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward
  const val = await p
  console.log('Create Impact')
  console.log(val)
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

Now what will be the output here? give time to students to guess their answers and then run the code


**output**

- Create Impact // after 10 sec
- Promise Resolved // after 10 sec



Here the whole code inside the async function will now wait for the promise to get resolved and when it resolves after 10 seconds then only it will move forward to execute the next lines

This is the major diffrence between handling promises with .then() method and handling it with async/await 

Now Imagine if I put a console.log() statement at the top


```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") // this line will be excuted immediateley

  const val = await p 
  // this will wait for the promise to be resolved and then only it will move forward (excutionn pauses here)

  console.log('Create Impact') // Delayed Execution
  console.log(val) // Prints the value of resolved promise
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

**output**
- Scaler // then and there
- Create Impact // after 10 sec
- Promise Resolved // after 10 sec

This is how async/ await works

Here, await pauses handlePromise until p is resolved. This approach simplifies asynchronous control flow, making it more akin to synchronous code in appearance and readability.


Now as you understand how async/await works , let's play around with it more for better clarity


Let me do something with the above code-


```javascript

const p = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") 

  const val = await p 

  console.log('Create Impact 1')
  console.log(val) 

  const val2 = await p 

  console.log('Create Impact 2')
  console.log(val2) 
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```


how do you expect this code will work? These are the kind of questions you can also get in your interviews , interviewer can ask these kinf of questions to judge if you understand the whole thing deeplhy or not

So try to figure out the output of the above code

**Explanation**

 Let's break down how the code works step-by-step:

1. **Creating a Promise (`p`):**
   - A new `Promise` object is instantiated with an executor function that takes two arguments: `resolve` and `reject`.
   - Inside the executor function, `setTimeout` is used to simulate an asynchronous operation that takes 10 seconds (10000 milliseconds) to complete. After 10 seconds, the `resolve` function is called with the string `'Promise Resolved'` as its argument. This marks the promise (`p`) as fulfilled.

2. **Defining an asynchronous function (`handlePromise`):**
   - An asynchronous function `handlePromise` is defined. This function will use the `await` keyword to wait for Promises to resolve before continuing with the next lines of code.

3. **Execution within `handlePromise`:**
   - When `handlePromise` is called, it first executes `console.log("Scaler")`, immediately printing `"Scaler"` to the console.
   - Next, the code encounters the `await` keyword before `p`, causing the JavaScript engine to pause execution within `handlePromise` until the promise `p` is resolved (i.e., 10 seconds later). No further code within `handlePromise` is executed during this waiting period.
   - Once `p` is resolved (after 10 seconds), its resolved value (`'Promise Resolved'`) is assigned to `val`. Then, `"Create Impact"` is printed to the console followed by the resolved value of `p` (`"Promise Resolved"`).
   - The next line also awaits the resolution of `p`. However, since `p` has already been resolved, JavaScript does not wait another 10 seconds. The resolved value of `p` is immediately assigned to `val2`, and then `"Create Impact"` and `"Promise Resolved"` are printed to the console again.

4. **Calling `handlePromise` function:**
   - Finally, `handlePromise` is called, initiating the sequence described above.

In summary, the output of the program will be as follows, with a 10-second pause after printing `"Scaler"` and before the first `"Create Impact"`:

```
Scaler
// 10-second pause
Create Impact 1
Promise Resolved
Create Impact 2
Promise Resolved
```

Superb!

Now if I create a diffrent promise and I try to resolve it so now my code will have two promises with different delays , So now I have two promises suppose p1 and p2 


```javascript

const p1 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 10000)
})

const p2 = new Promise((resolve , reject)=>{
  setTimeout(()=>{
      resolve('Promise Resolved')
  } , 5000)
})

async function handlePromise() {
  // JS engine waits for the promise to get resolved and then moves forward

  console.log("Scaler") 

  const val = await p1 

  console.log('Create Impact 1')
  console.log(val) 

  const val2 = await p2 

  console.log('Create Impact 2')
  console.log(val2) 
}

handlePromise() 



// function fetchData() {
//   p.then((res)=> console.log(res))
//   console.log("Create Impact")
// }

//  fetchData()

```

How will this code work now? there is a promise which resolves in 5 sec (p1) and there is promise which resolves in 10 sec (p2) , So will the 5 sec promise excute first and it will be printed will the 10 sec promise execute first and then the 5 sec promise will start doing it's job , will the total time be 15 sec to execute the whole function or will it be 10 sec where both the promise will resolve in a 10 sec timeframe? 

Ugh!!!!!!

Trust me Folks! You will have to answer all of these things

the output of the code will be like-


```
Scaler
// 10-second pause
Create Impact 1
Promise Resolved
Create Impact 2
Promise Resolved
```

Dont Worry! It's super simple , let's break it down

The code snippet you've provided makes use of JavaScript Promises and the `async/await` syntax to handle asynchronous operations. Here's a step-by-step explanation of how the JavaScript engine, specifically the call stack, event loop, and other components like the Web API environment and the task queue, will handle this code:

1. **Start Execution**: When the script starts executing, the top-level code is run. The definition of `p1` and `p2` are encountered, and they are both initialized as promises. Each promise is set to resolve after a certain timeout (`p1` after 10 seconds, and `p2` after 5 seconds). The `setTimeout` function calls are handed off to the Web API environment, which will handle the timer.

2. **Call `handlePromise`**: Next, the `handlePromise` function is called. This call is placed on the call stack, and the function starts executing.

3. **Log "Scaler"**: The first operation inside `handlePromise` is a `console.log("Scaler")`, which is executed immediately, logging "Scaler" to the console. This operation is synchronous and executed straight away.

4. **Await `p1`**: The execution then reaches the `await p1` statement. At this point, the JavaScript engine checks the status of `p1`. Since `p1` is not yet resolved (it's set to resolve after 10 seconds), the `await` pauses the execution of `handlePromise`, allowing other operations to run (if there were any). The function's execution is essentially paused, waiting for `p1` to resolve. The function is removed from the call stack, and control is returned to the event loop.

5. **`p2` Resolves First**: After 5 seconds, `p2` resolves ("Promise Resolved"). However, because `handlePromise` is currently awaiting the resolution of `p1` and not `p2`, this resolution does not immediately affect the paused state of `handlePromise`. The resolved promise (`p2`) is ready, but its handling awaits the execution flow to reach the `await p2` statement.

6. **`p1` Resolves**: After 10 seconds from the start, `p1` resolves. Since `handlePromise` was awaiting `p1`, the resolution of `p1` allows the paused execution of `handlePromise` to resume. The resolved value of `p1` is assigned to `val`, and the execution continues to the next lines, logging "Create Impact 1" and the resolved value of `p1` to the console.

7. **Await `p2`**: Immediately after logging the value of `p1`, the execution reaches `await p2`. Since `p2` has already resolved by this time (it resolved while we were waiting for `p1` to resolve), its resolved value is immediately available, and there is no pause in execution here. The resolved value of `p2` is assigned to `val2`.

8. **Log "Create Impact 2"**: The last part of the function logs "Create Impact 2" and the resolved value of `p2` to the console. This concludes the execution of `handlePromise`.

9. **Conclusion**: The event loop, during this process, continually checks if the call stack is empty and if there are any pending callbacks (from resolved promises or other asynchronous operations) that need to be executed. In this case, it ensures that once `p1` and `p2` are resolved, their results are properly handled according to the `async/await` logic within `handlePromise`.

To summarize, the call stack executes synchronous operations immediately and utilizes the event loop and Web API environment to handle asynchronous operations like timeouts and promises. The `await` keyword pauses the execution of the async function until the awaited Promise is resolved, allowing other tasks to run in the meantime.


This example illustrates how multiple asynchronous operations can be managed using Promises and the `async/await` syntax, allowing for sequential handling of asynchronous results even when those operations complete at different times.



Now as you know the how async/await works , We will take a real example , first we will solve it by using promises and then we will use async/await to solve the same problem



#### Question

Here we have a problem that we are at a coffee shop and the now the coffee shop only has coffee we cannot order for any other drink , it will reject if any other drink is ordered and if s coffee is ordered it will be accepted then it will be processed then it will be serverd and at the end we will recieve a bill

How will you solve this problem and how do you think you can code this simple system

Exactly! by using promises

Create resolve and reject states of Promise to place a order, then process the order and then generate a bill process.

#### Solution


**Step - 1:** Create a Promise method for placing/accepting the order.

1.1 Create resolve state if order is placed

```javascript
function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

placeOrder('coffee').then(function(orderStatus) {
    console.log(orderStatus)
})

```

**Output:**

![](https://hackmd.io/_uploads/rygdYvmA3.png)

1.2 Create reject state if order is not placed

```javascript
function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

placeOrder('tea').then(function(orderStatus) {
    console.log(orderStatus)
}).catch(function(error) {
    console.log(error)
})

```

**Output:**

![](https://hackmd.io/_uploads/ByDBcPQR2.png)

**Step - 2:** Create a Promise method for process the order.

```javascript
function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function(resolve) {
        resolve(`${orderPlaced} and Served.`)
    })
}

placeOrder('coffee').then(function(orderStatus) {
    console.log(orderStatus)
    return orderStatus
}).then(function(orderStatus) {
    let orderIsProcessed = processOrder(orderStatus)
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    console.log(orderIsProcessed)
})

```

**Output:**

![](https://hackmd.io/_uploads/ByszAwmC2.png)


**Step - 3:** Create a Promise method for generate the bill.

```javascript
function placeOrder(drink) {
    return new Promise(function(resolve, reject) {
        if(drink === 'coffee') {
            resolve('Order for Coffee Placed.')
        }
        else {
            reject('Order can not be Placed.')
        }
    })
}

function processOrder(orderPlaced) {
    return new Promise(function(resolve) {
        resolve(`${orderPlaced} and Served.`)
    })
}

function generateBill(processedOrder) {
    return new Promise(function(resolve) {
        resolve(`${processedOrder} and Bill Generated with 200 Rs.`)
    })
}

placeOrder('coffee').then(function(orderStatus) {
    console.log(orderStatus)
    return orderStatus
}).then(function(orderStatus) {
    let orderIsProcessed = processOrder(orderStatus)
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    console.log(orderIsProcessed)
    return orderIsProcessed
}).then(function(orderIsProcessed) {
    let BillGenerated = generateBill(orderIsProcessed)
    return BillGenerated
}).then(function(BillGenerated) {
    console.log(BillGenerated)
}).catch(function(err) {    
    console.log(err)
})
    
```
**Output:**

![](https://hackmd.io/_uploads/r1hZ-O70h.png)

**Explanation:** Firstly, we have create placeOrder function to place the order then if we pass 'coffee' then the promise is in resolve state. As soon as it is resolved we get the orderStatus and printing it. After that as soon as order is placed then we need to process the order this will be also in resolved state. After processing the order we need to generate the bill this should be also in resolved state, this process called the promise chaining method as you already know


But do you see a problem here the code looks very unclean you have return promise at each then step resolve it and get the output , You can write the solution for the same problem with using async/await with a very clen structure


**Optimized Solution:** Using Async & Await

**Step - 1:** We will use async and await method to make code more clean and readable. to use async and await we need to create a function.

```javascript
function placeOrder(drink){
    return new Promise(function(resolve , reject){
        if(drink ==='coffee'){
            resolve('Order for Coffee Placed')
        }
        else{
            reject('Order cannot be Placed')
        }
    })
  }
  
  
  function processOrder(orderPlaced){
      return new Promise(function(resolve){
          resolve(`${orderPlaced} and Served`)
      })
  }
  
  function genreateBill(processedOrder){
      return new Promise(function(resolve){
          resolve(`${processedOrder} and Bill generated with 200Rs`)
      })
  }

// Async and Await 
// to use async await you need to create Functions

async function serveOrder(){
        let orderstatus = await placeOrder('coffee')
        console.log(orderstatus)
        let processedOrder = await processOrder(orderstatus)
        console.log(processedOrder)
        let generatedBill = await genreateBill(processedOrder)
        console.log(generatedBill)
}

serveOrder()

```

**Output:**

![](https://hackmd.io/_uploads/B10D6OQCh.png)

**Step - 2:** To Handle error we will use try and cacth method

```javascript
function placeOrder(drink){
    return new Promise(function(resolve , reject){
        if(drink ==='coffee'){
            resolve('Order for Coffee Placed')
        }
        else{
            reject('Order cannot be Placed')
        }
    })
  }
  
  
  function processOrder(orderPlaced){
      return new Promise(function(resolve){
          resolve(`${orderPlaced} and Served`)
      })
  }
  
  function genreateBill(processedOrder){
      return new Promise(function(resolve){
          resolve(`${processedOrder} and Bill generated with 200Rs`)
      })
  }

// Async and Await 
// to use async await you need to create Functions

async function serveOrder(){
    try {
        let orderstatus = await placeOrder('tea')
        console.log(orderstatus)
        let processedOrder = await processOrder(orderstatus)
        console.log(processedOrder)
        let generatedBill = await genreateBill(processedOrder)
        console.log(generatedBill)
    } catch (error) {
        console.log(error)
    }
}

serveOrder()

```

At each await statment the promise related to it will be resolved and in a sequntial manner everything will be executed!


This is how you can use async/await in JS