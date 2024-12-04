
---
title: Agenda of the lecture
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---

## Agenda

- What is Event Delegation?
  - Relation with concept of Bubbling
- Machine coding question
  - Star Rating Component
  - Counter Component
  - Comments Box

We will try to cover these topics in today's sessions

So let's start.

---

title: Event Delegation
description: Discussion of What is Event Delegation
duration: 2100
card_type: cue_card

---

## Event delegation

1. Event delegation is a powerful pattern in JavaScript, particularly useful when working with dynamically added elements or when optimizing performance for applications with many event listeners.

2. It leverages the fact that most events in JavaScript bubble up through the DOM, meaning that an event fired on a child node will propagate up to its parent nodes.

3. By taking advantage of this behavior, you can set a single event listener on a parent element to manage all events that bubble up from its children, rather than setting an event listener on each child individually.

Imagine you're browsing a website like Amazon, and on the product listing page, there are multiple product cards, each containing an "Add to Cart" button. Here's how event delegation comes into play:

1. **Event Delegation:**
   Event delegation involves attaching a single event listener to a common ancestor element (in this case, the container holding the product cards). Instead of placing event listeners on each "Add to Cart" button individually, you attach one listener to the container.

2. **Event Bubbling:**
   Event bubbling refers to the natural propagation of an event through the DOM hierarchy. When an event occurs on a deeply nested element, it first triggers the event handler on that element and then "bubbles up" through its ancestors as you have already seen in the previous class

Now, let's see how these concepts work together:

1. When a user clicks the "Add to Cart" button on a product card, the event starts at the button (target) and then bubbles up through its parent elements.

2. Since you've attached a single event listener to the container holding the product cards, the event bubbles up to the container.

3. The event listener captures the event at the container level and checks whether the clicked element (the button) matches certain criteria (e.g., having the class `add-to-cart`).

4. If the criteria are met, the listener knows that an "Add to Cart" action is intended and can extract information about the specific product from the event's context

Let's go through an example with code to demonstrate event delegation and event bubbling using different categories of products (headphones, laptops, mobiles) on a web page:

**HTML Structure:**

```html
<div id="categories">
  <div class="category" id="headphones">
    <h2>Headphones</h2>
    <div class="product">Product A</div>
    <div class="product">Product B</div>
  </div>
  <div class="category" id="laptops">
    <h2>Laptops</h2>
    <div class="product">Product X</div>
    <div class="product">Product Y</div>
  </div>
  <div class="category" id="mobiles">
    <h2>Mobiles</h2>
    <div class="product">Product P</div>
    <div class="product">Product Q</div>
  </div>
</div>
```

**JavaScript:**

```javascript
const categoriesContainer = document.getElementById("categories");

categoriesContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Check if the clicked element is a product
  if (clickedElement.classList.contains("product")) {
    const category = clickedElement
      .closest(".category")
      .querySelector("h2").textContent;
    const product = clickedElement.textContent;

    console.log(`Clicked on ${product} in the ${category} category.`);
    // Handle the click action for the product here
  }
});
```

In this example:

1. The `categoriesContainer` element is the common ancestor for all categories and products.

2. The event listener is attached to the `categoriesContainer` to capture clicks on any of its child elements.

3. When a product is clicked, the event bubbles up through the category section, reaching the `categoriesContainer`.

4. The listener checks if the clicked element has the class `product`. If it does, it extracts the category and product information and performs the necessary action.

5. This code efficiently handles clicks on products within any category, demonstrating the combined usage of event delegation and event bubbling.

With this setup, regardless of the number of categories or products, you only need one event listener to handle all clicks, making your code more maintainable and efficient.

---

title: Event Delegation Example-2
description: Discussion of What is Event Delegation
duration: 2100
card_type: cue_card

---

Let's create an example where event delegation is used to change the background color of elements by clicking on them. In this example, we'll create a set of colored boxes, and clicking on any box will change its background color using event delegation.

**HTML Structure:**

```html
<div id="colorPalette">
  <div class="color-box" style="background-color: red;"></div>
  <div class="color-box" style="background-color: green;"></div>
  <div class="color-box" style="background-color: blue;"></div>
</div>
```

**JavaScript:**

```javascript
const colorPalette = document.getElementById("colorPalette");

colorPalette.addEventListener("click", (event) => {
  const clickedElement = event.target;

  // Check if the clicked element is a color box
  if (clickedElement.classList.contains("color-box")) {
    const color = clickedElement.style.backgroundColor;
    document.body.style.backgroundColor = color;
  }
});
```

In this example:

1. The `colorPalette` element is the common ancestor for all color boxes.
2. The event listener is attached to the `colorPalette` to capture clicks on any of its child elements.
3. When a color box is clicked, the event bubbles up to the `colorPalette`.
4. The listener checks if the clicked element has the class `color-box`. If it does, it extracts the background color of the clicked color box.
5. The background color of the `body` element is then set to the extracted color, effectively changing the page's background color.

This demonstrates how event delegation can be used to efficiently manage interactions across a set of elements, in this case, color boxes. By using event delegation, you handle all color box clicks with a single event listener, making the code cleaner and more maintainable.

---

title: Machine Coding Questions
description: Discussion about various questions asked in the Machine Coding interviews.
duration: 2100
card_type: cue_card

---

Here are the problem statements for each of the machine coding round problems that we will cover in this class:

1. Nested Comment System

build a nested comment system where users can leave comments on a post. Each comment can have replies, creating a nested structure. Users should be able to reply to comments and collapse/expand comment threads.


### Nested Comment System

Firstly we will be discussing the problem statement of building a nested comment system where users can leave comments on a post. Each comment can have replies, creating a nested structure. Users should be able to reply to comments and collapse/expand comment threads.

**Nested Comment System: Overview**

A nested comment system allows users to leave comments on a post, and each comment can have replies, forming a threaded or hierarchical structure. Users should also be able to collapse and expand comment threads for better readability. This is commonly seen on social media platforms and discussion forums.

This code snippet creates a webpage featuring a nested comment system, allowing users to post comments on an original post and reply to those comments in a nested manner.
The code is structured into HTML, CSS, and JavaScript segments, each handling different aspects of the webpage.

Let's break down each part step by step.

 Basic HTML for Nested Comment - 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nested Comments System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="commentForm">
        <textarea id="commentInput" placeholder="Write a comment..."></textarea>
        <button id="submitComment">Comment</button>
    </div>

    <div id="commentsContainer"></div>

    
</body>
<script src="script.js"></script>
</html>
```

**Body Section:**

1. Inside the <body> tag, there are two main divisions (<div> elements).


2. The first div with the ID commentForm contains a form for submitting comments. This form includes a <textarea> for entering a comment with a placeholder text "Write a comment..." and a <button> to submit the comment.


3. The second div with the ID commentsContainer is  where the comments will be displayed.








```css
/* Enhanced style.css */
body {
  font-family: "Arial", sans-serif;
  background-color: #f9f9f9;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

#commentForm textarea {
  width: 100%;
  max-width: 600px;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
}

#commentForm button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #005a9c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#commentForm button:hover {
  background-color: #003d73;
}

.comment, .reply {
  background-color: #ffffff;
  margin: 10px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.comment:hover, .reply:hover {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.comment .replyBtn, .comment .toggleReplies {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment .replyBtn:hover, .comment .toggleReplies:hover {
  background-color: #0056b3;
}

.repliesContainer {
  margin-top: 20px;
}

.replyInput {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  resize: vertical;
  display: none; /* Initially hide the reply input */
}

.comment:hover .replyInput {
  display: block; /* Show reply input on comment hover */
}

.collapsed {
  display: none;
}

.repliesContainer {
  padding-left: 20px;
  border-left: 3px solid #eee;
}

```

CSS part for the Problem.

Note to instructor - You do not have to write the whole css , you can copy paste this css and just explain how each element is styled







```js

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitComment");
    const commentInput = document.getElementById("commentInput");
    const commentsContainer = document.getElementById("commentsContainer");

    submitBtn.addEventListener("click", () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            addComment(commentText);
            commentInput.value = ""; // Clear input field after adding
        }
    });

    // Using event delegation for reply and toggle functionality
    commentsContainer.addEventListener("click", (e) => {
        if (e.target.className.includes("replyBtn")) {
            const parentComment = e.target.closest(".comment");
            const replyInput = parentComment.querySelector(".replyInput");
            const replyText = replyInput.value.trim();
            if (replyText) {
                addReply(parentComment, replyText);
                replyInput.value = ""; // Clear input field after replying
            }
        } else if (e.target.className.includes("toggleReplies")) {
            const repliesContainer = e.target.nextElementSibling;
            repliesContainer.classList.toggle("collapsed");
        }
    });

    function addComment(text) {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
          <p>${text}</p>
          <button class="replyBtn">Reply</button>
          <div class="repliesContainer collapsed"></div>
          <textarea class="replyInput" placeholder="Write a reply..."></textarea>
      `;
        commentsContainer.appendChild(commentElement);
    }

    function addReply(parentComment, text) {
        const repliesContainer =
          parentComment.querySelector(".repliesContainer");
        const replyElement = document.createElement("div");
        replyElement.className = "reply";
        replyElement.innerHTML = `<p>${text}</p>`;
        repliesContainer.appendChild(replyElement);
        repliesContainer.classList.remove("collapsed");
    }
});

```
This JavaScript code snippet adds interactivity to a webpage that allows users to submit comments and replies to those comments. It also includes functionality for toggling the visibility of the replies. Here's a step-by-step explanation:

1. **Wait for the DOM to be fully loaded:** `document.addEventListener("DOMContentLoaded", () => {...});` ensures that the code inside it only runs after the HTML document has been fully loaded. This is important to make sure that the elements we want to manipulate are available in the document.

2. **Select DOM elements:** The code selects three important elements from the DOM and assigns them to variables for easy reference:
   - `submitBtn`: The button used to submit a new comment.
   - `commentInput`: The input field where users type their new comment.
   - `commentsContainer`: The container that will hold all the comments and replies.

3. **Add a click event listener to the submit button:** When the submit button (`submitBtn`) is clicked, it triggers a function that:
   - Trims the input from `commentInput` to remove any leading or trailing spaces.
   - Checks if the trimmed input is not empty.
   - If it's not empty, it calls the `addComment` function with the trimmed input as an argument to add a new comment.
   - Clears the `commentInput` field by setting its value to an empty string.

4. **Event delegation for handling replies and toggling replies:** Instead of adding event listeners to each reply and toggle button directly, the code uses event delegation by adding a single click event listener to the `commentsContainer`. This approach is more efficient, especially when dealing with a dynamic number of elements (comments and replies can be added dynamically). The event listener checks the class name of the clicked target to determine the action:


   1. If the clicked target has a class name that includes `"replyBtn"`, it finds the closest parent comment element, gets the reply input field, checks if the reply text is not empty, and then calls `addReply` function to add the reply.
   2.  If the clicked target has a class name that includes `"toggleReplies"`, it finds the next sibling element (assumed to be the replies container) and toggles the `"collapsed"` class to show or hide the replies.

5. **The `addComment` function:** This function takes a text argument and creates a new comment element with that text. It sets up the HTML structure of the comment, which includes the comment text, a reply button, a container for replies (initially collapsed), and a textarea for typing a reply. This new comment element is then appended to the `commentsContainer`.

6. **The `addReply` function:** This function takes two arguments: `parentComment` (the comment element to which the reply belongs) and `text` (the reply text). It finds the replies container within the parent comment, creates a new reply element with the reply text, and appends this reply to the replies container. It also removes the `"collapsed"` class from the replies container to ensure the replies are visible after adding a new reply.

this code  allows users to add comments, reply to specific comments, and toggle the visibility of the replies section for each comment.

Start the Doubt Session.
