
# Full Stack LLD & Projects: JavaScript-9: Kanban Board-3(Bussiness Logics & Local Storage)


**Agenda of this Lecture:**

- Locking Mechanism
- Changing the Priority color of the Task
- Filtering out Task with using the priority color filter
- Showing All Tasks on db click



### Explanation

Currently we have implemented Ticket geneartion and removal from the modal pop up with ID color and Task, Now we will be adding a lock so that a task can be edited of a ticket if it needs to be updated and we can lock it again

Hence, we will be implementing the lock in this section

We can use the **font-awesome** Icon libray again and get a lock icon for our tasks.

```javascript
function createTicket(ticketColor, ticketID, ticketTask) {
  // Create a new ticket container element
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");

  // Create the HTML content for the ticket container
  ticketCont.innerHTML = `
    <div class="ticket-color" style="background-color: ${ticketColor};"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    // Lock Icon div added below
    <div class="ticket-lock"><i class="fa-solid fa-lock"></i></div>
  `;

  // Append the ticket container to the main container
  mainCont.appendChild(ticketCont);

  handleRemoval(ticketCont);
}
```

- We have added an additional `div` element with the class `ticket-lock` to represent the lock icon for each ticket.

- Inside the `ticket-lock` div, we are using Font Awesome's icon syntax to include the lock icon using the fa-lock class from the `fa-solid` style.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/638/original/1.png?1695233411)

Now we have added the lock, but we need to make it functional now:

```javascript
let lockClose = "fa-lock";
let lockOpen = "fa-lock-open";

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];

  ticketLockIcon.addEventListener("click", function () {
    console.log("Lock Selected"); // Added single quotes around the log message
    if (ticketLockIcon.classList.contains(lockClose)) {
      ticketLockIcon.classList.remove(lockClose);
      ticketLockIcon.classList.add(lockOpen);
    } else {
      ticketLockIcon.classList.remove(lockOpen);
      ticketLockIcon.classList.add(lockClose);
    }
  });
}
```

This code snippet is designed to toggle the lock status of a ticket in a web application, changing its visual representation by switching icons.

point-by-point explanation of what each part of the code is doing:

1. **Variable Declarations:**

   - `let lockClose = 'fa-lock';` declares a variable `lockClose` and assigns it the string `'fa-lock'`. This string corresponds to a CSS class used to display a "locked" icon from the FontAwesome icon library
   - `let lockOpen = 'fa-lock-open';` declares another variable `lockOpen` and assigns it the string `'fa-lock-open'`. Similarly, this string is expected to represent a CSS class for an "unlocked" icon.

2. **Function Definition - `handleLock(ticket)`:**
   This section defines a function named `handleLock` that takes a single `ticket`. The function is designed to add interactive functionality to a lock icon within a ticket element in the DOM (Document Object Model).

   - **Finding the Ticket's Lock Element:**

     - `let ticketLockElem = ticket.querySelector('.ticket-lock');` uses the `querySelector` method on the `ticket` element to find the first child element with the class `.ticket-lock`. This child element is stored in the `ticketLockElem` variable.

     - `let ticketLockIcon = ticketLockElem.children[0];` accesses the first child element of `ticketLockElem` and assigns it to `ticketLockIcon`. This child the icon that visually represents the lock's current status (locked or unlocked).

   - **Adding an Event Listener to the Lock Icon:**

     - `ticketLockIcon.addEventListener('click', function() {...});` adds a click event listener to `ticketLockIcon`. When the icon is clicked, the anonymous function provided as the second argument to `addEventListener` is executed.

   - **Inside the Event Listener Function:**

     - `console.log('Lock Selected');` logs the message "Lock Selected" to the console whenever the lock icon is clicked. This serves as a simple way to confirm that the click event is being registered.

     - The `if` statement checks if `ticketLockIcon` currently has the class corresponding to a closed lock (`lockClose`):

       - If true (`ticketLockIcon.classList.contains(lockClose)`), it means the lock is currently shown as closed. The code then removes the `lockClose` class and adds the `lockOpen` class, visually changing the icon to an open lock.

       - If false, it implies the lock is shown as open. The code removes the `lockOpen` class and adds the `lockClose` class, changing the icon back to a closed lock.

This code toggles the visual state of a lock icon on a ticket between an open and closed lock each time the icon is clicked, utilizing CSS classes to change the icon's appearance. The use of `classList.contains`, `classList.add`, and `classList.remove` allows for this dynamic change in class assignments, which in turn changes the icon displayed to the user based on the ticket's lock status.

Now to make the content editable inside the task section whenever the lock is open, we will make the following changes:

```javascript
let lockClose = "fa-lock";
let lockOpen = "fa-lock-open";

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];

  let ticketTaskArea = ticket.querySelector(".task-area"); // Corrected selector

  ticketLockIcon.addEventListener("click", function () {
    console.log("Lock Selected");
    if (ticketLockIcon.classList.contains(lockClose)) {
      ticketLockIcon.classList.remove(lockClose);
      ticketLockIcon.classList.add(lockOpen);
      ticketTaskArea.setAttribute("contenteditable", "true"); // Changed 'contenteditable', 'true'
    } else {
      ticketLockIcon.classList.remove(lockOpen);
      ticketLockIcon.classList.add(lockClose);
      ticketTaskArea.setAttribute("contenteditable", "false"); // Changed 'contenteditable', 'false'
    }
  });
}
```

Now let's add functionality related to a "task area" within a ticket, allowing it to become editable or non-editable based on the lock status:

1. **New Variable Declaration for the Ticket Task Area:**

   - `let ticketTaskArea = ticket.querySelector('.task-area');` is a new line of code that finds and assigns the first element within the `ticket` that matches the `.task-area` selector.

   - This element, stored in `ticketTaskArea`, represents an area within the ticket that contains task-related content that can be edited.

2. **Adjustments Within the Event Listener Function:**
   The functionality to make the task area editable or non-editable based on the lock status is introduced with the following lines inside the `if` statement's branches:

   - When the lock is opened (`if` branch):

     - `ticketTaskArea.setAttribute('contenteditable', 'true');` is a new line that sets the `contenteditable` attribute of the `ticketTaskArea` to `'true'`. This makes the task area editable, allowing users to modify its content directly in the browser. This change is applied when the lock icon is clicked and the lock is transitioning from closed to open.

   - When the lock is closed (`else` branch):
     - `ticketTaskArea.setAttribute('contenteditable', 'false');` replaces the task area's `contenteditable` attribute value with `'false'`. This action reverses the editability of the task area, making it non-editable to the user. This occurs when the lock icon is clicked and the lock transitions from open to closed.
   - This allows for a more interactive and secure way to manage content within each ticket, preventing unintended edits when the ticket is "locked".

This is how we have implemented the Lock Mechanism for the ticket


### Explanation

Now , We have created the Ticket and have implemented the Lock Functionality.

Now , Suppose you want to change the priority of the task as well , Suppose a ticket is in lightpink color and you want to change it to lightblue , lightgreen or black , (you just want to move a particlular task from one status to another)

How will you do it?

In this section we will handle the color of the tasks

```javascript
function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color"); // Corrected selector
  ticketColorBand.addEventListener("click", function () {
    let currentColor = ticketColorBand.classList[0]; // Changed index to 0

    let currentColorIdx = colors.findIndex(function (color) {
      return currentColor === color;
    });

    currentColorIdx++; // Increment the index

    let newTicketColorIdx = currentColorIdx % colors.length; // Corrected variable name
    let newTicketColor = colors[newTicketColorIdx]; // Corrected variable name

    ticketColorBand.classList.remove(currentColor); // Corrected spelling
    ticketColorBand.classList.add(newTicketColor); // Corrected spelling
  });
}
```

function `handleColor` is designed to change the color of a specific element within a "ticket" based on user interaction (a click).

Here's a step-by-step explanation of what the code does:

1. **Function Definition (`handleColor`)**: The function `handleColor` is defined to take a single parameter, `ticket`, which is expected to be a DOM element that represents a ticket on the webpage.

2. **Selecting the `.ticket-color` Element**: Inside the function, `ticket.querySelector('.ticket-color')` is called to select the first element with the class `.ticket-color` that is a descendant of the `ticket` element. This element is stored in the variable `ticketColorBand`.

3. **Adding an Event Listener**: An event listener for the "click" event is added to `ticketColorBand`. This means that the function provided as the second argument to `addEventListener` will be executed whenever `ticketColorBand` is clicked.

4. **Inside the Click Event Listener Function**:

   - **Getting the Current Color**: The current color class of `ticketColorBand` is assumed to be stored in its first class, which is accessed with `ticketColorBand.classList[0]`. This current color is stored in the variable `currentColor`.

   - **Finding the Index of the Current Color**: The index of `currentColor` within the `colors` array is found using `colors.findIndex()`. This method takes a function that returns `true` for the element that matches the current color. The index of this color in the `colors` array is stored in `currentColorIdx`.

   - **Incrementing the Color Index**: The color index (`currentColorIdx`) is incremented by 1 to move to the next color in the `colors` array. If this increment makes the index equal to the length of the `colors` array, it will wrap around to 0 in the next step due to the modulo operation.

   - **Calculating the New Color Index**: The new color index is calculated using `currentColorIdx % colors.length`. This ensures that if the incremented index is beyond the last index of the `colors` array, it wraps around to the beginning (cyclic behavior).

   - **Getting the New Color**: The new color class to be applied is retrieved from the `colors` array using the new index (`newTicketColorIdx`) and stored in `newTicketColor`.

   - **Updating the Element’s Class**: The current color class is removed from `ticketColorBand` using `classList.remove(currentColor)`, and the new color class is added using `classList.add(newTicketColor)`. This changes the visual appearance of the `ticketColorBand` element to reflect the new color.

In summary, this function allows a user to cycle through a predefined list of color classes for an element within a ticket by clicking on it, changing its visual appearance each time it's clicked.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/639/original/2.png?1695233433)



### Explanation

In this feature, we need to filter the task according to the priority color.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/640/original/3.png?1695233456)

```javascript
let toolboxColors = document.querySelectorAll(".color");

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", function () {
    let selectedToolboxColor = toolboxColors[i].classList[0];

    let allTickets = document.querySelectorAll(".ticket-cont"); // Corrected selector
    for (let j = 0; j < allTickets.length; j++) {
      allTickets[j].remove(); // Removed square brackets and added j to index

      let filteredTickets = ticketsArr.filter(function (ticket) {
        return selectedToolboxColor === ticket.ticketColor;
      });

      filteredTickets.forEach(function (filteredTicket) {
        createTicket(
          filteredTicket.ticketColor,
          filteredTicket.ticketTask,
          filteredTicket.ticketID
        );
      });
    }
  });
}
```

The code is designed to filter and display these tickets based on their color when a color from a toolbox is clicked. Here's a step-by-step breakdown:

1. **Select Elements by Class Name**: `let toolboxColors = document.querySelectorAll('.color');`

   - This line selects all elements with the class name `color` and stores them in the variable `toolboxColors`. These elements represent different color options in a toolbox UI component.

2. **Loop Over Color Options**: `for (let i = 0; i < toolboxColors.length; i++) { ... }`

   - This loop iterates over each element in `toolboxColors`. Each element represents a color option in the toolbox.

3. **Add Click Event Listeners to Each Color Option**: `toolboxColors[i].addEventListener('click', function() { ... });`

   - For each color option found in the toolbox, the code attaches a click event listener. When a color option is clicked, the function inside the event listener is executed.

4. **Get Selected Color**: `let selectedToolboxColor = toolboxColors[i].classList[0];`

   - Inside the event listener function, the code retrieves the first class name of the clicked color option and stores it in `selectedToolboxColor`. This assumes that the first class name of the color option element represents the color.

5. **Select All Ticket Elements**: `let allTickets = document.querySelectorAll('.ticket-cont');`

   - The code selects all elements with the class name `ticket-cont`, which represent individual ticket containers in the UI, and stores them in `allTickets`.

6. **Remove All Ticket Elements**: `for (let j = 0; j < allTickets.length; j++) { allTickets[j].remove(); }`

   - This loop iterates over each ticket container element in `allTickets` and removes it from the document. This effectively clears all displayed tickets.

7. **Filter Tickets Based on Selected Color**:
   - After removing all tickets, the code immediately filters `ticketsArr` (presumably an array of ticket objects available in the larger scope) to include only those tickets whose `ticketColor` matches the selected color (`selectedToolboxColor`).
     ```js
     let filteredTickets = ticketsArr.filter(function (ticket) {
       return selectedToolboxColor === ticket.ticketColor;
     });
     ```
8. **Create and Display Filtered Tickets**: `filteredTickets.forEach(function(filteredTicket) { ... });`
   - For each ticket in `filteredTickets`, the code calls a function `createTicket` with the ticket's color, task, and ID as arguments. The `createTicket` function (not shown in the snippet) presumably creates a new ticket element for each filtered ticket and adds it back to the UI, thus displaying only tickets that match the selected color.

This code enables a user interface feature where clicking on a color in a toolbox filters and displays tickets of that color.

Now, Here you will Notice an Issue!



A new issue has arisen. Upon initial usage, the filter buttons function as intended. Yet, upon subsequent clicks, a problem arises where duplicate tickets of the selected color are generated.

**[Ask the leaners]**
What might be the underlying cause of this problem?

To address this issue, we're planning to implement a validation process using unique identifier to prevent the occurrence of duplicate tickets.

This is the code that we have implemented till now for filtering tickets.

We've executed the loop that iterates through the toolbox colors, covering every index. For each color dip, we've attached corresponding event listeners. When a click event occurs, our first step is to determine which color dip or filter was clicked – for instance, selecting black would mean retrieving tasks labeled with a black priority color.

Following the color selection from the toolbox, we proceed to match that color with the colors associated with each ticket. We apply a filtering process to narrow down the array of tickets to only include those that match the selected color. The result is an array of filtered tickets, where each ticket object contains information like color values, task details, and IDs.

At this juncture, we remove the default set of tickets and replace them with the newly filtered array. This is the approach we discussed in the previous session. However, an issue arises when we repeatedly select a color, leading to the duplication of arrays.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/630/original/1.png?1695232771)

#### Pseudocode

```javascript
for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", function () {
    let selectedToolBoxColor = toolboxColors[i].classList[0];

    let filteredTickets = ticketsArr.filter(function (ticket) {
      return selectedToolBoxColor === ticket.ticketColor;
    });

    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    filteredTickets.forEach(function (filteredTicket) {
      createTicket(
        filteredTicket.ticketColor,
        filteredTicket.ticketTask,
        filteredTicket.ticketId
      );
    });
  });
}
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/641/original/4.png?1695233480)

To tackle this issue, we're planning to implement a validation mechanism that utilizes unique identifier to ensure that duplicate tickets aren't generated. This way, the filtered ticket array will only consist of distinct tickets corresponding to the selected color.

So, using the unique IDs associated with each ticket is a great way to prevent duplicates. This way, we can ensure that the same ticket isn't added to the filtered array more than once.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/049/631/original/2.png?1695232789)

**[Ask the learners]** In which part of the code should you integrate this ID-checking mechanism to effectively prevent duplicate tickets from being included in the filtered array?

Within the createTicket method, we'll implement the following logic: if a ticket possesses an existing ID, it will be used; otherwise, a new unique ID will be generated during its initial creation. It's essential to note that the ticket will only be pushed to the array if it lacks an ID, ensuring avoidance of duplication.

#### Pseudocode

```javascript
function createTicket(ticketColor, ticketTask, ticketId) {
  // Adding an identifier
  let id = ticketId || shortid();
}
```

Prior to adding the ID to the array, we will perform a validation to ascertain its existence, and only if it indeed exists, will it be appended within the createTicket method.

#### Pseudocode

```javascript
function createTicket(ticketColor, ticketTask, ticketId) {
  // Adding an identifier
  let id = ticketId || shortid();

  // Other code

  if (!ticketId) {
    ticketArr.push({ ticketColor, ticketTask, ticketId: id });
  }
}
```



Complete JS code for the class -

```js
let addBtn = document.querySelector(".add-btn");
let removeBtn = document.querySelector(".remove-btn");
let modalCont = document.querySelector(".modal-cont");
let mainCont = document.querySelector(".main-cont");
let textAreaCont = document.querySelector(".textArea-cont");
let allPriorityColors = document.querySelectorAll(".priority-color");

let colors = ["lightpink", "lightgreen", "lightblue", "black"];

let toolboxColors = document.querySelectorAll(".color");

let lockClass = "fa-lock"; // closed lock
let unlockClass = "fa-lock-open"; // open-lock

let addTaskFlag = false;
let removeTaskFlag = false;

let modalPrioritycolor = colors[colors.length - 1];

let ticketsArr = [];


// Making Tasks visibile according to colors (filtering)

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", function () {
    let selectedToolBoxColor = toolboxColors[i].classList[0];

    let filterdTickets = ticketsArr.filter(function (ticket) {
      return selectedToolBoxColor === ticket.ticketColor;
    });

    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    filterdTickets.forEach(function (filterdTicket) {
      createTicket(
        filterdTicket.ticketColor,
        filterdTicket.ticketTask,
        filterdTicket.ticketID
      );
    });
  });
}

// Selecting color for your task
allPriorityColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElem) {
      priorityColorElem.classList.remove("active");
    });
    colorElem.classList.add("active");
    modalPrioritycolor = colorElem.classList[0]; // lightpink
  });
});
addBtn.addEventListener("click", function () {
  // Display the model
  addTaskFlag = !addTaskFlag;

  if (addTaskFlag == true) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag == true) {
    alert("delete button has been activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});
modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPrioritycolor, textAreaCont.value, shortid()); // ticket generation
    modalCont.style.display = "none";
    console.log(textAreaCont.value);
    textAreaCont.value = "";
  }
});


function createTicket(ticketColor, ticketTask, ticketID) {
  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `<div class=" ticket-color ${ticketColor} "></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
  </div>
    `;

  mainCont.appendChild(ticketCont);

  ticketsArr.push({ ticketColor, ticketTask, ticketID });

  console.log(ticketsArr);

  handleRemoval(ticketCont);

  handleLock(ticketCont);
  handleColor(ticketCont);
}

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}

function handleLock(ticket) {
  let ticketLockElem = ticket.querySelector(".ticket-lock");
  let ticketLockIcon = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");
  ticketLockIcon.addEventListener("click", function () {
    if (ticketLockIcon.classList.contains(lockClass)) {
      ticketLockIcon.classList.remove(lockClass);
      ticketLockIcon.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLockIcon.classList.remove(unlockClass);
      ticketLockIcon.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }
  });
}


// Handle color function
function handleColor(ticket) {
  let ticketColorBand = ticket.querySelector(".ticket-color");
  ticketColorBand.addEventListener("click", function () {
    let currentColor = ticketColorBand.classList[1];
    let currentColorIdx = colors.findIndex(function (color) {
      return currentColor === color;
    });
    currentColorIdx++;
    let newTicketColorIdx = currentColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    ticketColorBand.classList.remove(currentColor);
    ticketColorBand.classList.add(newTicketColor);
  });
}
```
