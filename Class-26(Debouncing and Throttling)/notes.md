

## Agenda

- The Need of Optimzing your Events and requests
- Debouncing and it's implementation
- Throttling and it's Implementation
- Async/Defer to load Scripts
 

We will try to cover these topics in today's sessions

So let's start.



1. Have you ever visited a website and noticed it becomes slow or unresponsive when you're scrolling, resizing the window, or typing in a search field? 

2. These issues often stem from inefficient event handling, which can overload the browser with too many tasks to process in a short span of time."

3. For example, think about a shopping site with a 'live search' feature. If the site searches the database with every keystroke, it can lead to performance issues, excessive database load, and a poor user experience.

4. But , now think about how the seach feature of some tech giants like , Amazon , filpkart and google works, they are so smooth and give the best user experince without any lag right?


Open Flipkart and show the search bar how it works

<img src=https://miro.medium.com/v2/resize:fit:1400/format:webp/1*DT0HK5DwwFuYU0dJDckPoA.png>

5. Here if you see , I have typed like 18 characters but the network call was not made for all the 18 characters I have typed but it was only made about 4 times , and those 4 times are the times when I made a pause while typing.


6. That means somehow flipkart has implemented this feature that for not for all the characters the api request will be made but only when the user pauses for a specific amount of time then only the request will be made it will make the fetch request to get the data and this can be achieved by something known as  `Debouncing` so that requests will be made only after a certain amount of pause and thus reducing the load on your server and this results in the overall better performance of your app.

7. Debouncing can  Delay the search in this example until the user stops typing for a specified time. 
We will learn to implement this today



8. Similarly, consider a social media feed that loads new content as you scroll. If it tries to load more content with every pixel you scroll, it may become sluggish beacuse the scroll event responds to each pixel movement, and of course you would not want to trigger the event on each tiny scroll , Without controlling scrolling even a small scrolling might attempt to load huge set of data, causing performance issues

9. How about to solve this issue you implement a feature that the event doesn't gets triggered on each and every scroll , but it only gets triggered after some specific intervals , this is what `throttling` is.


10. Now The overall Idea is somewhat clear that what `Debouncing` and `Throttling` will do , but you may have a question now , that both of these concepts seems somewhat the same , they are just making dealyed requests on or after some specific time interval, so What is the differnence between these two?


11. Let's understand this with a real life analogy and then we will implement these in code




12. Let’s use the analogy of a group of people trying to ask questions to a speaker at a Q&A session for both concepts.

### Debouncing: The Patient Speaker

Imagine you're at a Q&A session with a speaker who has decided to answer questions using a "debouncing" approach. This means the speaker will wait for a brief pause in the questions before choosing the most recent question to answer. If questions keep coming in rapidly, one after another without pause, the speaker keeps waiting, resetting their 'answer timer' with each new question.

**Analogy:** This is like having a conversation where you wait for the other person to finish their thoughts completely before you respond. If they keep adding to their point, you reset your internal clock until they finally take a pause, indicating they are ready for your response.

**Debouncing in Applications:** Just like the speaker who waits for a pause in questions, debouncing in web development ensures that a function (e.g., sending a search query to a server) is not executed until there's a pause in the event triggers (e.g., the user stops typing in the search box). This approach helps prevent overwhelming the server with too many requests.

### Throttling: The Time-Constrained Speaker

Now, imagine a different Q&A session where the speaker uses a "throttling" approach. Here, the speaker decides to answer one question every minute, no matter how many questions are asked in between. If ten questions are asked in a minute, the speaker still only answers the first one and ignores the rest until the next minute when they answer another question.

**Analogy:** Consider you’re taking phone calls with a rule that you’ll only answer one call every 15 minutes. If multiple calls come in during those 15 minutes, you still stick to your rule, ensuring you’re not overwhelmed by the calls and can focus on other tasks between calls.

**Throttling in Applications:** Similar to the speaker who answers questions at fixed intervals, throttling in software development limits the execution of a function to no more than once in a specified time period. This is useful in scenarios like scrolling through a webpage, where you might want to load images or additional content at regular intervals instead of constantly as the user scrolls.

### Summary

1. **debouncing waits for a pause** in activity to act once, focusing on the final event in a series, 

2. while **throttling limits the frequency** of action, ensuring it only happens at regular intervals, no matter how many triggers occur.

So, in simple terms:
- **Debouncing** means you wait for a bit after the last action before you take your turn.
- **Throttling** is like setting a timer and only taking action when the timer goes off, no matter how much happens in between.

Debouncing vs Throttling
------------------------

Debouncing:
-----------
- Action:      [click]---[click]--------[click]-----------------------> Time
- Response:    -----------------------------------[response after delay]

Explanation:
- Waits for a pause in actions before executing, effectively bundling rapid sequences of calls into a single call after a delay.

Throttling:
-----------
- Action:      [click]---[click]---[click]---[click]---[click]--------> Time
- Response:    ----------[response]----------[response]----------[response]

Explanation:
- Ensures a function is executed at most once every set amount of time, regardless of how many times the action is triggered.


This is the major differnce between these two concepts.



First, We will write a very basic code which where on every input our events are triggered and it calls the callback function supposedly doing a fetch request

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input id="input_field" type="text">
</body>

<script>
 let inputField = document.querySelector('#input_field')
    // Function to process input
function processInput() {
    console.log("Processing input...");
}

// Directly attach the processInput function to the input event
// This means the function will be called every time there's user input
inputField.addEventListener("keydown", processInput);
</script>
</html>
```

Show the output in the console by typing something on the input field, you will notice for every keystroke the event will be triggered ,  every time the user types or interacts with an input field (`input` event), the `processInput` function is called immediately. 

This can lead to performance issues if `processInput` performs heavy computations or actions (like API calls) because it would be executed for every single input event without any delay.


So Now , The question is How will you optimize this?

**Yes , Debouncing!!**

### 1. Define the Debounce Function

First, you'll define a simple debounce function. This function will take another function as its argument (`func`) and a wait time in milliseconds (`wait`). It returns a new function that postpones the execution of `func` until after `wait` milliseconds have elapsed since the last time it was invoked.

```javascript
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const later = function() {
            clearTimeout(timeout);
            func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
```

### How This Works:

- **Step 1:** When the returned `executedFunction` is called (due to the event), it sets up a timer (`setTimeout`) to invoke `func` after `wait` milliseconds.

- **Step 2:** If `executedFunction` is called again before the timer expires, `clearTimeout` is used to cancel the previous timer and set up a new one. This ensures that `func` is not called until the user has stopped typing for `wait` milliseconds.

### 2. Apply Debounce to `processInput`

Now, you modify the event listener to use the debounce function. This way, `processInput` will only be called after the user has stopped typing for a specified duration.

```javascript
// Wrap the processInput function with debounce
const debouncedProcessInput = debounce(processInput, 250); // Waits for 250ms of no input before calling processInput

// Attach the debounced function to the input event
inputField.addEventListener("keydown", debouncedProcessInput);
```

### How It Improves the Code:

- **Reduces Workload:** Originally, `processInput` would be called on every keystroke, which could be unnecessarily frequent. Now, it's only called once the user has stopped typing for a specified duration (e.g., 250 milliseconds). This reduces the number of calls to `processInput`, which can improve performance and responsiveness, especially for operations that are computationally expensive or involve API calls.

- **User Experience:** For functionalities like search-as-you-type, debouncing prevents the application from becoming sluggish by reducing the number of search queries sent to the server, thus providing a smoother experience.

Here's the complete script with the debounce function included:

```html
<script>
let inputField = document.querySelector('#input_field');

function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const later = function() {
            clearTimeout(timeout);
            func();
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Function to process input
function processInput() {
    console.log("Processing input...");
}

const debouncedProcessInput = debounce(processInput, 250);
inputField.addEventListener("keydown", debouncedProcessInput);
</script>
```

By integrating the debounce function in this way, your code effectively balances responsiveness with efficiency, providing a better user experience without compromising performance.




**Let's just take an Example of Scrolling**

Whenver you visit these webisites like Amazon , Flikart for shopping for Instagram or twitter for just to pass some time , What do you do? You scroll to see more products or to see more posts or content

Now Imagine that for every pixel that you scroll a request is made

Let's build this type of system first and then we will optimize it


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unthrottled Scroll Example</title>
    <style>
        body, html {
            height: 3000px; /* Ensure there's enough space to scroll */
        }
        .status {
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="status">Scroll position: <span id="scrollPosition">0</span></div>

    <script>
        window.addEventListener('scroll', () => {
            document.getElementById('scrollPosition').textContent = window.scrollY;

            console.log('scrolled')
        });
    </script>
</body>
</html>
```
This JavaScript code  displays the current scroll position of the web page in real-time.

 Here's a step-by-step explanation:

1. **Event Listener for Scroll Event**: 
   ```javascript
   window.addEventListener('scroll', () => {
       ...
   });
   ```
   This line of code listens for the "scroll" event on the `window` object. The `window` object represents the browser window. The "scroll" event is triggered whenever the user scrolls through the page. When this event occurs, the anonymous arrow function provided as the second argument to `addEventListener` is called.

2. **Updating the Scroll Position Display**:
   ```javascript
   document.getElementById('scrollPosition').textContent = window.scrollY;
   ```
   Inside the function called on the scroll event, this line gets the element with the ID `"scrollPosition"` using `document.getElementById`. This element is a `<span>` tag inside the `<div class="status">`. The `textContent` property of this `<span>` element is set to the value of `window.scrollY`.
   
   - `window.scrollY` gives the number of pixels that the document is currently scrolled vertically from the origin (the top of the page). This value changes as the user scrolls up or down the page.
   - By setting `textContent` of the `<span>` element to `window.scrollY`, the code dynamically updates the displayed scroll position in the `<div>` at the top left of the page, giving the user real-time feedback on how far they have scrolled.

3. **Console Log on Scroll**:
   ```javascript
   console.log('scrolled');
   ```
   Each time the "scroll" event is triggered (meaning the user scrolls the page), "scrolled" is printed to the console. This serves as a simple way to observe the scroll event's occurrence during development or debugging. 

4. In summary, this JavaScript code provides real-time feedback on the vertical scroll position of the page by listening for the "scroll" event and updating the text content of a specified element to reflect the current vertical scroll offset (`window.scrollY`). 

But But But! Now Imagine You are just taking a walk in the Park and your fitness watch notifies you about each step that you take  , 1-step completed , 2-step completed, 3-step completed ....

That will be annoying right , Now notice the output of this code , isnt something similar happeing here? with every tiny pixel scroll events are getting triggered and this cn again increase the load on the app if with scroll some heavy operations are going on like data featching or animations , the scrolling can become sluggish!

How we are going to solve this then

Yes! This is let's use Throttling


```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Throttled Scroll Example</title>
    <style>
        body, html {
            height: 3000px; /* Ensure there's enough space to scroll */
        }
        .status {
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="status">Scroll position: <span id="scrollPosition">0</span></div>

    <script>
        var lastScrollTime = 0;

        function updateScrollPosition() {
            var now = new Date().getTime();
            if (now - lastScrollTime > 100) { // Throttle period is 100ms
                document.getElementById('scrollPosition').textContent = window.scrollY;
                console.log('scrolled');
                lastScrollTime = now;
            }
        }

        window.addEventListener('scroll', updateScrollPosition);
    </script>
</body>
</html>
```


 Let's break down the JavaScript portion of the code step by step. This JavaScript is designed to update the displayed scroll position in a throttled manner, limiting the frequency of updates during scroll events to improve performance.

### Variables
- `var lastScrollTime = 0;`: Initializes a variable to store the timestamp of the last scroll event that was processed. This is used to implement throttling.

### Functions
1. `function updateScrollPosition() { ... }`: Defines a function that updates the scroll position on the page.
  2.  `var now = new Date().getTime();`: Gets the current timestamp in milliseconds.
  3.  `if (now - lastScrollTime > 100) { ... }`: Checks if at least 100 milliseconds have passed since the last time the scroll position was updated. This is the core of the throttling mechanism, ensuring that the update function is not called more frequently than once every 100 milliseconds.
    4. `document.getElementById('scrollPosition').textContent = window.scrollY;`: Finds the HTML element with the ID `scrollPosition` and updates its text content with the current vertical scroll position (`window.scrollY`). This shows the user how far they have scrolled down the page.
    5. `console.log('scrolled');`: Logs a message to the console every time the scroll position is updated, serving as a debug aid to see when updates occur.
    6.  `lastScrollTime = now;`: Updates `lastScrollTime` with the current timestamp, resetting the throttle timer.

### Event Listener
1.  `window.addEventListener('scroll', updateScrollPosition);`: Adds an event listener to the global `window` object that listens for `scroll` events. Whenever the user scrolls, the `updateScrollPosition` function is called. 

2. Due to the throttling implemented inside `updateScrollPosition`, the actual updating of the scroll position displayed to the user will not occur more frequently than once every 100 milliseconds, regardless of how often the scroll event fires.

This throttling technique is particularly useful for improving performance in web applications. It reduces the number of times potentially expensive operations are executed during rapid, continuous events like scrolling. By limiting the frequency of updates, the script minimizes the workload on the browser, leading to smoother scrolling and a better user experience.


Note to Instructor - Pause here for a while for a break take questions and then Resume again with the last topic


---
title: Async/Defer Keywords to load scripts
description: 
duration: 2100
card_type: cue_card
---

When you include a JavaScript file in your HTML document, you can control how and when it loads and executes. This is particularly important for improving web page load time and user experience. Two commonly used attributes for this purpose are `async` and `defer`, which you can add to the `<script>` tag.

### How They Work

#### Without async or defer

Traditionally, when a browser encounters a `<script>` tag, it stops parsing the HTML, requests the script file, executes it, and then continues parsing the HTML. This behavior can significantly delay the parsing of the rest of your page if the script is large or if it's hosted on a slow server.

```html
<script src="script.js"></script>
```

#### With async

When you add the `async` attribute to a script, the browser will continue to parse the HTML while the script is being downloaded in the background. Once the script has finished downloading, the browser will halt the parsing and execute the script, then continue parsing the rest of the page.

This is useful for scripts that don't depend on other scripts and don't modify the DOM (Document Object Model). However, because `async` scripts are not guaranteed to execute in order, they're not suitable for scripts that depend on each other.

```html
<script async src="script.js"></script>
```

#### With defer

The `defer` attribute also allows the browser to continue parsing the HTML while the script is being downloaded, similar to `async`. 

However, scripts with `defer` are executed only after the entire document has been parsed. Unlike `async`, `defer` scripts are executed in the order they appear in the document.

This makes `defer` suitable for scripts that depend on each other or that modify the DOM.

```html
<script defer src="script.js"></script>
```

### Example Scenario

Imagine you have the following scripts:

1. **`lib.js`** - A library needed by `main.js`.
2. **`main.js`** - Your main script that depends on `lib.js`.
3. **`analytics.js`** - An analytics script that doesn't depend on the other scripts.

Here's how you might include them:

```html
<script defer src="lib.js"></script>
<script defer src="main.js"></script>
<!-- This script can load independently; thus, we use async -->
<script async src="analytics.js"></script>
```

### Summary

1. **Without Attributes**: The browser stops parsing HTML when it encounters a `<script>` tag, downloads and executes the script, then resumes parsing.

2. **With `async`**: The browser downloads the script in the background and continues parsing HTML. It pauses and executes the script as soon as it's downloaded, potentially in the middle of parsing.


3. **With `defer`**: The browser downloads the script in the background while continuing to parse HTML. It executes the script after completing the parsing, in the order the scripts appeared in the document.


That's all for Today's Session

Start the Doubt Session
