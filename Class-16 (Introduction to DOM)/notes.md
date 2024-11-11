# Introduction to Document Object Model




## Agenda

**First of all today we will start with Introduction of DOM and then we will solve some fun problems to understand how you can put interactivity to your web pages by using DOM methods and Properties , Today we will target to complete the topics listed below-**


- Selecting Elements (querySelector , querySelectorALL , getElementbyID etc)
- Event Listeners
- Creating appending and inserting Elements (createElement , appendChild , insertBefore)
- NodeList and ClassList 
- the event object
- getAttribute and setAttribute methods





## Introduction to the Document Object Model (DOM)

### Definition

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as a tree structure where each node is an object representing a part of the document. This model is constructed as a tree of Objects: 

- **Document:** The root node that represents the entire HTML document.
- **Elements:** Represent each tag in the HTML document. These are the nodes that have children (inner elements or text).
- **Attributes:** Define properties of elements, such as `class`, `id`, or `style`.
- **Text:** The actual text within elements is also considered a node.

### Importance of DOM

Understanding the DOM is crucial for web developers because it:

- Provides a structured representation of the document.
- Allows JavaScript to access and manipulate the content and structure of a webpage dynamically.
- Enables the creation of rich, interactive web applications by providing methods to change the document content, structure, and styles.

### Example Explanation

Let's analyze the given HTML document in the context of the DOM:

```htmlembedded
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>This is heading 2</h1>
    </div>
    <div>
        <h1>This is heading 1</h1>
        <p>This is Paragraph</p>
    </div>
</body>
</html>
```

- **Document Node:** Represents the entire HTML document.
- **HTML Element:** The root element that contains all other elements.
- **Head and Body:** These are child nodes of the HTML element. The Head element contains meta-information about the document, while the Body element contains the document's content.
- **Div Elements:** Each Div element acts as a container that groups other elements. There are two Div elements, each containing different content.
  - The first Div contains a Heading (`<h1>`), which is "This is heading 2".
  - The second Div contains a Heading (`<h1>`), "This is heading 1", and a Paragraph (`<p>`), "This is Paragraph".

This structure shows how elements in the HTML document are represented as a tree in the DOM, with each tag corresponding to a node in the tree. By accessing these nodes via JavaScript, developers can dynamically change the content, style, or structure of the webpage.

#### Output

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/258/original/upload_364afb8e43132cd223c90b39c021e52a.png?1695145205)


#### DOM tree visualization of above example

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/259/original/upload_604c9f192818c3459c15d376d0569b83.png?1695145257)

**Note:**
* We will be uisng javascript to put the interactivity in our web apps or websites.
* JavaScript is used to put interactivity in DOM elements.



### Manipulating the DOM with JavaScript

JavaScript can be used to interact with the DOM to:

- **Add, remove, or modify elements:** You can create new elements, delete existing ones, or change their properties.
- **Change styles:** Modify the CSS of elements to change their appearance.
- **Respond to events:** Set up event listeners to respond to user actions like clicks, keyboard input, or page loading.

We will explore DOM and how we can put interactivity in our web pages by solving problems, that's a very fun way to learn DOM to do some actual tasks with your nodes



So , let's start with a very basic task that we have a html button and whenever we click on that hello should be printed on the page

#### Question

On clicking the button append hello to the page.

We will go step by step by taking into account each and everthing

#### Solution

**Step 1:**  Selecting the html element

To select or identify a particular html element we have methods.
* getElementById - If you want to select an element based on ID
* querySelector - If you want to select an element based on any selector like class id or a combination or a specific element



**Code:** Using getElementById

#### Using `getElementById`


```htmlembedded
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <button id ="btn-1"> Say Hello </button>

    <script>
    
        // on clicking the button append hello to the page

        let btn = document.getElementById('btn-1')
        console.log(btn) // shows the button

    </script>
</body>
</html>

```


- **Method Used**: `document.getElementById('btn-1')`
- **Purpose**: Selects the first element with the specified ID. It's a straightforward and efficient way to select elements if they have a unique ID.
- **Example Use**: In the provided code, this method selects a button with the ID `btn-1`.






**Code:** Using querySelector by ID

```htmlembedded
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn - 1"> Say Hello </button>

    <script>
    
        // on clicking the button append hello to the page

        let btn = document.querySelector('#btn - 1')
        console.log(btn)

    </script>
</body>
</html>

```

#### Using `querySelector` by ID

- **Method Used**: `document.querySelector('#btn-1')`
- **Purpose**: Selects the first element that matches the specified CSS selector. In this case, it selects the element with the ID `btn-1`. `querySelector` is more versatile than `getElementById` because it can select elements based on classes, attributes, and more complex selectors. here you will just need to pass the exact identifier as well for id `#` for class `.` and so on
- **Example Use**: The script uses this method to select a button by its ID in a similar manner to `getElementById`, showcasing an alternative approach.


**Code:** Using querySelector by class

```htmlembedded
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <button id = "btn - 1"> Say Hello </button>
    <button class = "btn - 1"> Say Bye </button>

    <script>
    
        // on clicking the button append hello to the page

        let btn = document.querySelector('.btn-1')
        console.log(btn)

    </script>
</body>
</html>

```


#### Using `querySelector` by Class

- **Method Used**: `document.querySelector('.btn-1')`
- **Purpose**: Selects the first element that matches the specified class. This is useful when you're working with CSS classes instead of IDs or need to select elements based on other attributes or complex selectors.
- **Example Use**: This variant selects a button with the class `btn-1`, demonstrating how to use `querySelector` to select elements by class name.



**Code:** Using querySelector by elements

The document method querySelector() returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

```htmlembedded
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <button id = "btn - 1"> Say Hello </button>

    <script>
    
        // on clicking the button append hello to the page

        let btn = document.querySelector('button')
        console.log(btn)

    </script>
</body>
</html>

```
#### Using `querySelector` by Element

- **Method Used**: `document.querySelector('button')`
- **Purpose**: Selects the first `<button>` element on the page. This method is useful when you want to select elements by their tag name and are sure there's either only one such element or you specifically need the first one.
- **Example Use**: The code uses this method to select the first button element in the document, regardless of its class or ID.




Now as we know ho to select elements based on diffrent approcahes now let's make this element do something as well..



**Step 2:** Append "Hello" to the page

Before we dive into making the button functional, it's crucial to understand what an event is in the context of web development.

**What is an Event?**
An event refers to any action that triggers a specific response . For instance, clicking a button is and event which will trigger the action to display "Hello" on the screen.
Event is much more than this but for now just understand this, We will deep dive into events moving forward

Now how to make a element respond to an event?
Comes into the picture event listeners!

**Method - addEventListener:** 
The `addEventListener` method allows us to attach an event to any DOM element. This method is essential for interactive web development, enabling dynamic responses to user actions.

Here's an example illustrating how to use `addEventListener` to make the button work and print Button Clicked on an event:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn-1">Say Hello</button>

    <script>
        // Target the button and attach a click event listener
        let btn = document.querySelector('#btn-1');

        btn.addEventListener('click', function(e){
            console.log("button Clicked")
        });
    </script>
</body>
</html>
```

### Adding an Event Listener to the Button
```javascript
btn.addEventListener('click', function(){
    console.log("button Clicked")
});
```
- `btn.addEventListener('click', ...)`: This method is called on the button element (`btn`). It listens for a "click" event, meaning it waits for the button to be clicked. When a click occurs, it executes the function provided as the second argument.
- `function(){ ... }`: This is an anonymous function (a function without a name) that is executed when the button is clicked. 
- `console.log("button Clicked)`: Inside the function, this line is supposed to log the message "button Clicked" to the browser's console. This indicates that the button has been clicked. 

Show this whole thing in the Browser and the Browser's Console


**Step 3:**  CreateElement and AppendChild

So now to append hello on the click of the button we first need to create a element in which `hello` will be placed then we need to attach that element in our DOM tree in a appropriate position to get it appended and visible  , We can do this by using two methods to Create an element where Hello will go we can use `createElement` method and to attach that element to DOM we can use `appendChild` , let's see how they work and how to use them

```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <button id = "btn - 1"> Say Hello </button>

    <script>
    
        // on clicking the button append hello to the page

        let btn = document.querySelector('#btn-1')
        console.log(btn)

        btn.addEventListener('click', function(){
            

            let divElem = document.createElement('div')

            divElem.innerText = 'Hello'

            let body = document.querySelector('body')

            body.appendChild(divElem)

        })

    </script>
</body>
</html>

```
Let's break this down


1. **Creating a New `<div>` Element**:
   ```javascript
   let divElem = document.createElement('div')
   ```
   - `document.createElement('div')` creates a new `<div>` element. This method takes one argument, the tag name of the element to be created.
   - The new `<div>` element is stored in the variable `divElem`.
   - This method (`createElement`) is crucial for dynamically adding new elements to the DOM (Document Object Model).

2. **Setting the Inner Text of the `<div>` Element**:
   ```javascript
   divElem.innerText = 'Hello'
   ```
   - The `innerText` property of `divElem` is set to `'Hello'`. This means the text content of the newly created `<div>` will be "Hello".
   - `innerText` is used here to define what text the `<div>` element will display.

3. **Selecting the `<body>` Element**:
   ```javascript
   let body = document.querySelector('body')
   ```
   - `document.querySelector('body')` selects the `<body>` element of the page.
   - The selected `<body>` element is stored in the variable `body`.

4. **Appending the `<div>` to the `<body>`**:
   ```javascript
   body.appendChild(divElem)
   ```
   - `appendChild` is a method used to append a node as the last child of a node. In this case, `divElem` (the newly created `<div>` with the text "Hello") is appended to `body` (the `<body>` element of the document).
   - After this method is executed, the new `<div>` will appear on the webpage as part of the document's body. Each click on the button will create and append a new `<div>` with "Hello" to the body.

 this JavaScript code listens for clicks on a button. Upon each click, it creates a new `<div>` element, sets its text content to "Hello", and appends this `<div>` to the body of the document, resulting in "Hello" being added to the page each time the button is clicked. The `createElement` and `appendChild` methods are fundamental here for dynamically adding elements to the DOM.

**Output:**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/267/original/upload_c04b7917d2c7dd94fad263612d3bae02.png?1695145825)


**By Solving this simple problem You now know how to slelect elements based on diffrennt approcahes how to listen to events and respond to them by event listeners and how you can create and append element in the DOM tree**

**take 5 mins here to clear any doubts and move to next question**



### Problem Statement

You are given an HTML document containing an unordered list (`<ul>`) with list items (`<li>`) representing numbers 1 through 10. However, there is an element missing between the numbers 6 and 8. Your task is to identify the missing number in the sequence and insert it appropriately into the list to maintain the sequential order using JavaScript.

**Ask learners how they may approcah this**


Explain step by step that how to break down a problem and solve it step by step 

To achieve this, you should:

1. Identify the missing number in the list.
2. Create a new list item (`<li>`) with the missing number as its content.
3. Insert the new list item into the correct position in the list to maintain the sequential numbering 

Always without thinking of the methods , code or anything else only think about what should be done to achieve something and then you can read , google or research about what you can use to achieve the end results , Software Engineering works like this , so make habit of thinking of the solution in parts without focusing on the implementatiom first then step by step start implementing things


Ok! enough Talk , now let's solve this

#### Solution

**Step 1:** creating node list

Now as you can see the whole list , the number 7 is missing , so now to put 7 in between 6 and 8 we will need access to the whole list , that means I will need every list node in the same order and then I can identfy where the node is missing and can add that right?

So to do that we can use the method `querySelectorAll` and can pass the element name inside it 

The `querySelectorAll` method is a powerful tool provided by the Document Object Model (DOM) Web API that allows you to select and manipulate elements on a webpage. It enables you to find all elements within the document that match a specified CSS selector(s). Here's a breakdown of its functionality:

 **Return Value**: `querySelectorAll` returns a `NodeList` of all elements within the document that match the specified group of selectors. A `NodeList` is a collection of DOM nodes that can be iterated over like an array but it is not an array it is a array like structure which is indexed and that's why it can be iterated over

To Sum up ,  Node list is an array like structure which will have your elements stored in indexed form.  

```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        // Fix the list by inserting the missing element using querySelectorAll and insertBefor

        let allItems = document.querySelectorAll('li');
        console.log(allItems);      

    </script>
</body>
</html>

```

**Output:**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/271/original/upload_fc8a7cf791547f64129ac0eef13aa66e.png?1695146016)

**Step 2:** adding element 

```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        
        <li>8</li>
        <li>9</li>
        <li>10</li>
    </ul>

    <script>
        // Fix the list by inserting the missing element using querySelectorAll and insertBefore

        let ourList = document.querySelector('ul');
        console.log(ourList);

        let allItems = document.querySelectorAll('li');
        console.log(allItems);   
        
        let indexThatHas8 = allItems[6];

        let sevenElement = document.createElement('li')
        sevenElement.innerText = '7'

        ourList.insertBefore(sevenElement, indexThatHas8)

    </script>
</body>
</html>

```

**Explanation of the code and all the methods step by step**

1. **Select the unordered list**: `let ourList = document.querySelector('ul');`
   - This line selects the first `<ul>` element found in the document and stores it in the variable `ourList`.
   - `document.querySelector('ul')` uses the `querySelector` method to find the first element that matches the specified CSS selector ('ul' in this case).

2. **Log the unordered list to the console**: `console.log(ourList);`
   - This line prints the unordered list element (referenced by `ourList`) to the browser's console. It's a way to verify that the correct element has been selected.

3. **Select all list items**: `let allItems = document.querySelectorAll('li');`
   - This line selects all `<li>` elements (list items) within the document and stores them in the `allItems` variable.
   - `document.querySelectorAll('li')` returns a NodeList containing all the `<li>` elements found. This method is used to select multiple elements that match the given CSS selector.

4. **Log all list items to the console**: `console.log(allItems);`
   - This prints the NodeList of all list items (referenced by `allItems`) to the console, allowing you to see all the list items in the console for debugging or verification purposes.

5. **Identify the position of the list item that contains "8"**: `let indexThatHas8 = allItems[6];`
   - This line assigns the seventh `<li>` element in the NodeList (which contains the number "8") to the variable `indexThatHas8`. Note that array indexing starts at 0, so `allItems[6]` refers to the seventh element in the list.

6. **Create a new list item with the text "7"**: 
   - `let sevenElement = document.createElement('li')`
     - This line creates a new `<li>` element but does not yet insert it into the document. The new element is stored in the variable `sevenElement`.
   - `sevenElement.innerText = '7'`
     - This sets the text content of the newly created `<li>` element to "7".

7. **Insert the new list item before the one that contains "8"**: `ourList.insertBefore(sevenElement, indexThatHas8)`
   - This line inserts the newly created list item (`sevenElement`) into the unordered list (`ourList`) right before the list item that contains "8" (referenced by `indexThatHas8`).
   - The `insertBefore` method is used to insert a node before the reference node as a child of a specified parent node. Here, it ensures the list item "7" is added in the correct place to maintain numerical order.

the JavaScript part of the code fixes the missing "7" in the list by dynamically creating a new `<li>` element with the text "7" and inserting it into the correct position in the unordered list.

**Output:**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/273/original/upload_9cda233672dc980dc39259973628c350.png?1695146091)


**By Solving this problem you have learnt about how querySelectorAll works , What is a NodeList and insertBefore Method works**


#### Question

Fix the mathmatical problem using JS 

- Problem Statement : Given a mathematical expression Fix the expression by using Javascript and taking help of the DOM

(Pass this question as a fun question in the class ask students to solve this in break)

#### Solution

```javascript
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF - 8">
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0">
    <title>Document</title>
</head>
<body>
    <!-- Q. Fix the mathmatical problem usng JS <br> -->
    <p>2 + 2 = 22</p>

    <script>
        let para = document.querySelector('p')
        para.innerText = `2 + 2 = 4`
    </script>
    
</body>
</html>

```

**Output:**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/274/original/upload_7e599ac46343deed76441a6ec8a415e8.png?1695146150)




**Before Moving to the Next Question Lets discuss about something known as `classList`**

The `classList` property in the Document Object Model (DOM) is a read-only property that returns a live  collection of the class attributes of the element. It provides a convenient way to access and manipulate the class names of an element. With `classList`, you can easily add, remove, and toggle CSS classes on an element, which is particularly useful for dynamically changing the appearance or behavior of elements in response to user interactions.

Here are some of the most commonly used methods of `classList`:

- `add(className)`: Adds a specified class to the element. If the class already exists in the element's class list, it will not add it again.

- `remove(className)`: Removes a specified class from the element. If the class does not exist, it does nothing.

- `contains(className)`: Checks if a specified class exists in the element's class list, returning `true` if it does and `false` otherwise.


### Small Example:

Suppose you have an HTML element like this:

```html
<div id="myDiv" class="content visible">Hello, world!</div>
```

You can use the `classList` property to manipulate this element's classes in JavaScript:

```javascript
// Get the element
var div = document.getElementById('myDiv');

// Add a new class
div.classList.add('highlight');

// Remove a class
div.classList.remove('visible');


// Check if a class exists
if (div.classList.contains('content')) {
    console.log('The div has a "content" class.');
}
else{
    console.log('The div does not has a "content" class.');
}
```

After running this script, the class attribute of the `div` element would be modified based on the operations performed. For example, if the `highlight` class didn't exist before, it would be added; the `visible` class would be removed; and the `hidden` class would be toggled, adding it if it wasn't there or removing it if it was.



**Now Let's move forward with the next Problem**

#### Question

Write a script which fetches the data-color attribute of the card and double clicking on them and attahces the fetched class to that card and also changes the data-color attribute to "used"

#### Solution

```javascript
<!DOCTYPE html>
<html lang = "en">
  <head>
    <meta charset = "UTF - 8" />
    <meta http - equiv = "X - UA - Compatible" content = "IE = edge" />
    <meta name = "viewport" content = "width = device - width, initial - scale = 1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }

      body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 5rem;
      }

      .blue {
        background-color: blue;
        box-shadow: 0px 0px 6px 5px;
      }

      .green {
        background-color: green;
        box-shadow: 0px 0px 6px 5px;
      }

      .red {
        background-color: red;
        box-shadow: 0px 0px 6px 5px;
      }

      .card {
        border: 1px solid;
        height: 10rem;
        width: 10rem;
        margin: 2rem;
      }
    </style>
  </head>

  <body>
    <div class = "card" data-color = "blue"></div>  
    <div class = "card" data-color = "red"></div>
    <div class = "card" data-color = "blue"></div>
    <div class = "card" data-color = "red"></div>
    <div class = "card" data-color = "red"></div>
    <div class = "card" data-color = "blue"></div>
    <div class = "card" data-color = "green"></div>
    <div class = "card" data-color = "blue"></div>
    <div class = "card" data-color = "green"></div>
    <div class = "card" data-color = "blue"></div>
    <script>
      // Q Write a script which fetches the data-color attribute of the card on 
      //double clicking on them and attaches the fetched class to that card.
      // Also changes the data-color attribute to "used"

      let cardsNodeList = document.querySelectorAll('.card')

      console.log(cardsNodeList)

      for(let i = 0 ; i < cardsNodeList.length; i ++ ){
        cardsNodeList[i].addEventListener('dblclick' , function(e){

         console.log(e) // In this line explain all about the e object

          console.log(e.currentTarget)
           let classTobeAttached = e.currentTarget.getAttribute('data-color')

           console.log(classTobeAttached)

           e.currentTarget.classList.add(classTobeAttached)
           e.currentTarget.setAttribute('data-color' , 'used')

        })
      }
    </script>
  </body>

```


### HTML Brief

- **DOCTYPE, html, head, meta tags, and title**: These lines define the basic structure of an HTML document, including setting the character set, compatibility, viewport settings for responsive design, and the title of the document.

- **style tags**: Inside these tags, CSS is used to style elements on the page. Every element is set to `box-sizing: border-box;`. The body is styled to display its children in a flex layout, centered and with some padding at the top. Classes `.blue`, `.green`, and `.red` assign background colors and a box-shadow to elements. The `.card` class defines a bordered box with specified height, width, and margin.

### JavaScript

- **let cardsNodeList = document.querySelectorAll('.card')**: This line selects all elements with the class "card" and stores them in `cardsNodeList`. `querySelectorAll` returns a NodeList, which is a collection of document nodes.

- **console.log(cardsNodeList)**: This line logs the NodeList of card elements to the console, allowing you to see the elements selected by the previous command.

- **for loop**: The loop iterates over each item in the `cardsNodeList`. The variable `i` is used as the index to access each element in the NodeList.

- **cardsNodeList[i].addEventListener('dblclick', function(e))**: This line adds an event listener to each card element. The event listener listens for a 'dblclick' event (a double-click), and when such an event occurs, it executes the function provided as the second argument. The `e` parameter represents the event object that gets passed to the function when the event occurs.

#### The `e` (Event) Object Explained:

- **console.log(e)**: This logs the event object to the console. The event object `e` contains all the information about the event that occurred, including which element was clicked, the type of event, the position of the mouse, and more.

- **e.currentTarget**: This property of the event object refers to the element to which the event listener was attached. In this context, `e.currentTarget` is the card that was double-clicked.

- **e.currentTarget.getAttribute('data-color')**: This method gets the value of the `data-color` attribute from the clicked card. This value indicates the color class (blue, red, or green) that should be applied to the card.

- **e.currentTarget.classList.add(classTobeAttached)**: This line adds the class (obtained from the `data-color` attribute) to the clicked card's class list, changing its appearance according to the CSS definitions for `.blue`, `.green`, or `.red`.

- **e.currentTarget.setAttribute('data-color', 'used')**: Finally, this line changes the `data-color` attribute of the clicked card to "used", indicating that the card's color has been set and the attribute has been utilized.

### Summary:

The JavaScript code dynamically adds event listeners to each card element, allowing them to respond to double-click events. Upon a double-click, the script reads the card's `data-color` attribute to determine which color class to apply, adds that class to the card, and then marks the `data-color` attribute as "used". The `e` object, representing the event, plays a crucial role in accessing the target element and its attributes.

**Output:**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/276/original/upload_108dfa145e3eef14525de6578e2be0f0.png?1695146343)


We will be exploring more about the `event object (e)` and how it can be used further in solving diffrent problems


So, with this class you now have a deep understanding about.


- Selecting Elements (querySelector , querySelectorALL , getElementbyID etc)
- Event Listeners
- Creating appending and inserting Elements (createElement , appendChild , insertBefore)
- NodeList and ClassList 
- the event object
- getAttribute and setAttribute methods


Let me know if the questions were fun!! in the next class we will have more questions and will explore more DOM property and methods

Till then! Take care and Bye!

**Start Doubt Session.**