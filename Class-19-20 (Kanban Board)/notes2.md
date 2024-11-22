# Full Stack LLD & Projects: JavaScript-8: Kanban Board-2(DOM Implementation & Manipulation)

**Agenda of this Lecture:**


* Modal Popup with Toggle 
* Ticket Generation
* Adding Task, colour, ID to generated ticket
* Ticket Removal



1. Whenever the (+) button is clicked we need to open the modal pop up box so that we can enter our Task and whenerver we click on the button (+) again the pop up closes.

How we will Implement this?

1. So to implement this we can use a very simple technique i.e we can set up a flag , 
2. by deafault we will keep it to `false`, so nothing will happen but as soon as we click the (+) button we will change the flag to `true` , and when it is true we will open the modal pop up
3. Again when you click on this now the flag will again turn back to `false` and the pop up will close


**Implementation**

**create a script.js file and link it with project's html and start wrting JS code**



```javascript
let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let addTaskFlag = false

addBtn.addEventListener('click' , function(){
    // Display the model
    addTaskFlag = !addTaskFlag
    
    if(addTaskFlag == true){
        modalCont.style.display = 'flex'
    }
    else{
        modalCont.style.display = 'none'
    }

})
```
This code snippet is a simple JavaScript implementation for toggling the visibility of a modal container element on a web page when a button is clicked. Here's a step-by-step explanation of what each part of the code is doing:

1. `let addBtn = document.querySelector('.add-btn')`: This line selects the first HTML element with the class name `add-btn` and stores a reference to it in the variable `addBtn`. This element is intended to be a button that, when clicked, will trigger the display or hiding of the modal container.

2. `let modalCont = document.querySelector('.modal-cont')`: Similar to the first line, this selects the first HTML element with the class name `modal-cont` and stores a reference to it in the variable `modalCont`. This element is the modal container that will be shown or hidden.

3. `let addTaskFlag = false`: This line initializes a boolean flag named `addTaskFlag` to `false`. This flag will be used to keep track of the modal's visibility state—whether it is currently shown (`true`) or hidden (`false`).

4. `addBtn.addEventListener('click' , function(){ ... })`: This line adds an event listener to the `addBtn` element. The listener listens for `click` events, meaning it will execute the provided function every time the `addBtn` is clicked.

   Inside the event listener function:
   
   a. `addTaskFlag = !addTaskFlag`: This toggles the value of `addTaskFlag`. If it was `false`, it becomes `true`, and vice versa. This effectively changes the state of the modal's visibility each time the button is clicked.
   
   b. `if(addTaskFlag == true){`: This checks if `addTaskFlag` is `true`. If so, it means the modal should be displayed.
   
   - `modalCont.style.display = 'flex'`: This line changes the CSS `display` property of the `modalCont` element to `flex`, making it visible. Flexbox is a CSS layout model that allows items within a container to be laid out in a flexible, responsive manner.
   
   c. `else {`: If `addTaskFlag` is not `true` (i.e., it is `false`), this block will execute.
   
   - `modalCont.style.display = 'none'`: This sets the `display` property of `modalCont` to `none`, effectively hiding it from view.




### Explanation 

Now , let's try to generate a task ticket, which involves creating a function to dynamically generate new task tickets.

In the file `script.js` we will add this function:

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
}
```

Now we will add **class** to this particular div using the `setAttribute` : 

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');

  // Set the class attribute of the ticket container
  ticketCont.setAttribute('class', 'ticket-cont'); // 
}
```

Whenever this function is called, a new ticket will be created with class `ticket-cont`.

As `ticketCont` contains 3 more divs inside, we will create them inside this function using `innerHTML` 

```javascript 
function createTicket() {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color"></div>
    <div class="ticket-id">12345/div>
    <div class="task-area">Random Task</div>`
  
  mainCont.appendChild(ticketCont)
}
```

Here we have created function named `createTicket()` that dynamically generates a new HTML element structure representing a "ticket" and appends it to an existing element in the DOM (Document Object Model). Here's a step-by-step explanation:

1. **Define a New Ticket Container Element**: 
   - `let ticketCont = document.createElement('div');`
   This line creates a new `<div>` element and stores it in the variable `ticketCont`. This `<div>` will serve as the container for the ticket content.

2. **Set a Class Attribute for the Ticket Container**:
   - `ticketCont.setAttribute('class', 'ticket-cont');`
   This line sets the `class` attribute of the `ticketCont` `<div>` to `'ticket-cont'`. This class can be used to apply specific CSS styles to the ticket container.

3. **Create the HTML Content for the Ticket Container**:
   - The `ticketCont.innerHTML = `...`` section assigns a string of HTML content to the `innerHTML` property of the `ticketCont` element. This HTML string includes the structure and content of the ticket, which is composed of three parts:
     - A `<div>` with a class of `"ticket-color"` which could be used to display a color indicator for the ticket.
     - A `<div>` with a class of `"ticket-id"` which contains a hardcoded ticket ID `12345`. There's a typo here: the closing tag should be `</div>` instead of `/div>`.
     - A `<div>` with a class of `"task-area"` which contains the text `Random Task`, representing the task or content of the ticket.

4. **Append the Ticket Container to the Main Container**:
   - `mainCont.appendChild(ticketCont)`
   This line adds the newly created `ticketCont` element as a child to an existing element in the DOM identified by the variable `mainCont`. The `mainCont` variable is presumed to reference an existing element on the page, acting as the main container for these tickets. This action effectively inserts the ticket into the webpage, making it visible to the user.

 the `createTicket()` function dynamically constructs a new ticket element with a specific structure and content, then adds this ticket to a parent container on the webpage.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/613/original/upload_ed6901a16250a577c26b8e2795b1f89d.png?1695229185)



### Explanation

The `addEventListener` method is used to attach an event listener to a DOM element, allowing you to respond to specific events like clicks, key presses, mouse movements, etc.

We add an event listener to the `modalCont` element for the 'keydown' event. This event occurs when a key on the keyboard is pressed and then released.

```javascript 
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    createTicket(); // Call the createTicket function to create a new ticket
    modalCont.style.display = 'none'; // Hide the modal
    textArea.value = ''; // Clear the textarea's content
  }
})
```

This code adds an event listener to an element referred to as `modalCont`, which listens for `keydown` events—these are triggered when a user presses a key while the element has focus. The functionality implemented in this listener performs specific actions when the `Shift` key is pressed. Here's a detailed breakdown:

1. **Add Event Listener**:
   - `modalCont.addEventListener('keydown', function(e) { ... })`
   This line attaches a `keydown` event listener to the `modalCont` element. Whenever a key is pressed down while this element is focused, the specified anonymous function will be called, receiving the event object `e` as its argument.

2. **Get the Pressed Key**:
   - `let key = e.key;`
   Within the event handler function, this line retrieves the `key` property from the event object `e`. The `key` property represents the value of the key that was pressed.

3. **Conditionally Execute Actions for the Shift Key**:
   - The `if (key === 'Shift') { ... }` block checks if the pressed key is the `Shift` key. If it is, the code block inside the `if` statement is executed, which involves three actions:
     - `createTicket();`
       This line calls the `createTicket()` function, which, as described previously, creates a new ticket element and adds it to the page.
     - `modalCont.style.display = 'none';`
       This line hides the `modalCont` element by setting its `display` style property to `'none'`. This is typically used to hide modal dialogs or similar components after completing an action.
     - `textArea.value = '';`
       This line clears the content of an element referred to by `textArea`. Presumably, `textArea` is a variable referencing a `<textarea>` element or another input field, and this action resets its value to an empty string, effectively clearing any text the user had entered.

Overall, the purpose of this code is to listen for a keydown event on the `modalCont` element and, if the `Shift` key is pressed, to create a new ticket, hide the `modalCont` element (likely a modal dialog), and clear the contents of a `textArea` input field.


![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/624/original/upload_55a8528debc5766a05e91dfe21a5cad8.png?1695232320)



### Explanation

1. As of now only the static ticket is getting generated on press of the `shift` 

2. everything like Task, color and ID of the created task is static and we are not abel to set the values form ourselves.

3. Now let's move forward and generate everything dynamically one by one

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/625/original/1.png?1695232401)

So we can choose color so a specific color band will be applied to the ticket, and the ticket will also have a unique ID for which we will generate IDs for them

To identify and select these priority color divs, we will use `querySelectorAll` method

We want to select all elements with the class name 'priority-color' using `querySelectorAll` and then iterate through each of these elements using the forEach method. Here's how you can do that:

```javascript 
let allPriorityColors = document.querySelectorAll('.priority-color');

allPriorityColors.forEach(function(colorElem) {
  colorElem.addEventListener('click', function() {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function(priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add('active');

    // Implement additional logic to assign the selected color to a task
    // For example, you can use this space to perform your task color assignment
  });
});
```

In this code, when a color element with the class 'priority-color' is clicked, the event listener:

* Iterates through all `allPriorityColors` and removes the 'active' class from each element.
* Adds the 'active' class to the clicked `colorElem`.
* Implements additional logic to assign the selected color to a task 

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/626/original/2.png?1695232419)

So right now we have implemented such that we can select this color, but now we want to get the value of the particular color.

Now we will have a **color array**.

We define an array of colors and updates the modalPriorityColor variable based on the selected color when a color element is clicked. 

```javascript
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1]; // Default to black

let allPriorityColors = document.querySelectorAll('.priority-color');

allPriorityColors.forEach(function(colorElem) {
  colorElem.addEventListener('click', function() {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function(priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add('active');

    modalPriorityColor = colorElem.classList[0]; // Update modalPriorityColor
  });
});
```

In this code:

* You define an array colors with color names.
* `modalPriorityColor` is initially set to the last color in the array ('black') as the default.
* The event listener loop iterates through each color element and adds a click event listener.
* When a color element is clicked, the 'active' class is toggled as before.
* Additionally, the `modalPriorityColor` is updated to match the class name of the clicked color element, indicating the selected color.



**Passing ticketColor to createTicket Function:**

In the `createTicket` function, you need to add a parameter `ticketColor` to the function signature. This parameter is intended to hold the selected color for the ticket. When calling the `createTicket` function inside the `modalCont` event listener, you're passing the `modalPriorityColor` as an argument to this function.

This change allows you to set the ticket color dynamically based on the selected priority color. You can use the ticketColor parameter to apply the selected color to the appropriate part of the ticket's HTML content.

```javascript 
function createTicket(ticketColor) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">Random Task</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    createTicket(modelPriorityColor); // Create a new ticket with the selected color
    modalCont.style.display = 'none'; // Hide the modal
    textArea.value = ''; // Clear the textarea's content
  }
});
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/628/original/4.png?1695232451)


Now we need to update the task details

1. The `createTicket` function accepts two parameters: `ticketColor` for the color of the ticket and `ticketTask` for the content of the ticket's task.
2. The `ticketTask` parameter is used to dynamically insert the task content into the task-area div element.
3. In the modalCont event listener, the content of the `textAreaCont` element is retrieved using .value and assigned to taskContent.
4. When the 'Shift' key is pressed, a new ticket is created with the selected color and task content, and then the modal is hidden.
5. The content of the `textAreaCont` element is cleared for the next input.

```javascript 
function createTicket(ticketColor, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">${ticketTask}</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    createTicket(modelPriorityColor, taskContent); // Create a new ticket with the selected color and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});
```

Now we need to uniquely generate ID for each task created:

We will be using an external library **shortID** for this

1. use this script - 

 <script src="https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.min.js"></script>

Add this script to your HTML file at the bottom and this will give out a function `shortid()` whenever invoked it generates a unique ID

```javascript 
function createTicket(ticketColor, ticketID, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    let ticketID = shortid(); // Generate a unique ticket ID
    createTicket(modelPriorityColor, ticketID, taskContent); // Create a new ticket with the selected color, ticket ID, and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/629/original/5.png?1695232474)



To remove the ticket, we can do similarly to what we did for adding task:

```javascript 
let removeTaskFlag = false;

let removeBtn = document.querySelector('.remove-btn'); // Replace with the actual class or ID selector
removeBtn.addEventListener('click', function() {
  removeTaskFlag = !removeTaskFlag; // Toggle the removeTaskFlag when the button is clicked
  
  if (removeTaskFlag) {
    alert('Delete button is activated.');
    removeBtn.style.color = 'red'
  }
   else{
        removeBtn.style.color = 'white'
    }

});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}
```

This wil remove the selected ticket from the UI.



We know how to toggle the delete button and set it to active and not active and when it is active we are now able to delete the ticket.

So the agenda for the next class will be


1. Handle locking and unlocking content 
2. Set up the function to filter tasks according to the color selected
3. Implement Local storage for task persistance

Complete code for this class


```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanban Board Class</title>
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/589957875e.js" crossorigin="anonymous"></script>
</head>
<body>
    
       <!-- Toolbox (Navbar) -->
    <div class="toolbox-cont">
        <div class="toolbox-priority-cont">
            <div class="lightpink color"></div>
            <div class="lightgreen color"></div>
            <div class="lightblue color"></div>
            <div class="black color"></div>
        </div>


        <div class="action-btn-cont">

            <div class="add-btn">
                <i class="fa-solid fa-plus"></i>
            </div>

           <div class="remove-btn">
            <i class="fa-solid fa-xmark"></i>
           </div>
        </div>
    </div>


    <!-- Task Ticket -->

    <div class="main-cont">
         <!-- <div class="ticket-cont">
             <div class="ticket-color"></div>
             <div class="ticket-id">12345</div>
             <div class="task-area" contenteditable="false">Random Task</div>
              <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
              </div> -->
              <!-- commented as this is now getting generated dynamically -->
         </div>
        

         
    </div>




    <!-- Modal Task Area -->


    <div class="modal-cont">

        <textarea class="textArea-cont" placeholder="Enter Your Task">

        </textarea>

        <div class="priority-colors-container">
            <div class="lightpink priority-color"></div>
            <div class="lightgreen priority-color"></div>
            <div class="lightblue priority-color"></div>
            <div class="black priority-color active"></div>
        </div>








    </div>
    <script src="https://unpkg.com/shortid-dist@1.0.5/dist/shortid-2.2.13.min.js"></script>
   <script src="./script.js"></script>


</body>
</html>

```


```css

*{
    box-sizing: border-box;
}


body{
    margin: 0;
    padding: 0;
}

.toolbox-cont{
    height: 5rem;
    background-color: #4b4b4b;
    display: flex;
    align-items: center;

}

.toolbox-cont > *{
    margin-left: 4rem;
}


.toolbox-priority-cont{
    height: 3.5rem;
    width: 18rem;
    background-color:#3d3d3d;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

}

.toolbox-priority-cont>*:hover{
    background-color: #485460;
}



.color{
    height: 1.5rem;
    width: 3rem;
}


.lightpink{
    background-color: lightpink;
}


.lightgreen{
    background-color: lightgreen;
}


.lightblue{
    background-color: lightblue;
}

.black{
    background-color: black;
}


.action-btn-cont{
    height: 3.5rem;
    width: 8rem;
    background-color:#3d3d3d ;
    display: flex;
}


.action-btn-cont>*{
    display: flex;
    width: 50%;
    font-size: 2rem;
    color: white;
    justify-content: center;
    align-items: center;
}


.add-btn:hover{
 background-color: #4BB543;
 }

 .remove-btn:hover{
    background-color: #4BB543;
 }






.main-cont{
    display: flex; 
    gap:2rem;
    justify-content: center;
    padding: 2rem;
    flex-wrap: wrap;
}

.ticket-cont{
    height: 12rem;
    width: 15rem;
    background-color: coral;
}

.ticket-color{
    height: 1rem;
}

.ticket-id{
    background-color: yellow;
    height: 2rem;
}

.ticket-lock{
    display: flex;

    justify-content: flex-end;
    margin-top: 90px;
    margin-right: 5px;
    font-size: 1.5rem;
}

.modal-cont{
    height: 50vh;
    width: 45vw;
    display: flex;
    background-color: lightsalmon;
    position: absolute;
    top:30%;
    left: 27%;
    display: none;
 
 
 }



 .textArea-cont{
     height: 100%;
     width: 75%;
     resize: none;
     outline: none;
     border: none;
     background-color: #dfe4ea;
     font-size: 2rem;
     color: black;
 }


 .priority-colors-container{
     height: 100%;
     width: 25%;
     display: flex;
     flex-direction: column;
     background-color: #4b4b4b;
     align-items: center;
     justify-content: space-around;

 }


 .priority-color{
     height: 3rem;
     width: 5rem;
 }


 .active{
     border: 5px solid lightsalmon;
 }


```

```js

// Buttons and Flags
let addBtn = document.querySelector('.add-btn')
let addTaskFlag = false
let removeBtn = document.querySelector('.remove-btn')
let removeTaskFlag = false

// Elements for Modal pop up box and ticket
let modalCont = document.querySelector('.modal-cont')

let textAreaCont = document.querySelector('.textArea-cont')

//Elements for Tickets
let mainCont = document.querySelector('.main-cont')

// Elements for color Selection
let allPriorityColors = document.querySelectorAll('.priority-color')
let colors = ["lightpink", "lightgreen", "lightblue", "black"];
let modalPriorityColor = colors[colors.length - 1];





addBtn.addEventListener('click' , function(){
    // Display the model
    addTaskFlag = !addTaskFlag
    
    if(addTaskFlag == true){
        modalCont.style.display = 'flex'
    }
    else{
        modalCont.style.display = 'none'
    }

})


function createTicket(ticketColor, ticketID, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement('div');
  ticketCont.setAttribute('class', 'ticket-cont');

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
  `;
  
  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);
}

//Selecting a color and setting it for the task
allPriorityColors.forEach(function(colorElem) {
  colorElem.addEventListener('click', function() {
    // Remove 'active' class from all priority colors
    allPriorityColors.forEach(function(priorityColorElem) {
      priorityColorElem.classList.remove('active');
    });

    // Add 'active' class to the clicked colorElem
    colorElem.classList.add('active');

    modalPriorityColor = colorElem.classList[0]; // Update modalPriorityColor
  });
});

// Event listener for 'Shift' key press in modalCont
modalCont.addEventListener('keydown', function(e) {
  let key = e.key;

  if (key === 'Shift') {
    let taskContent = textAreaCont.value; // Get the content from the textarea
    let ticketID = shortid(); // Generate a unique ticket ID
    createTicket(modalPriorityColor, ticketID, taskContent); // Create a new ticket with the selected color, ticket ID, and task content
    modalCont.style.display = 'none'; // Hide the modal
    textAreaCont.value = ''; // Clear the textarea's content
  }
});





```