
## Agenda

**Brief description about the Project**

1. The project is a web-based Kanban board application designed to enhance task management and productivity for individuals. 

2. At its core, the Kanban board facilitates organizing tasks into a visual format, allowing users to easily manage their workloads and prioritize tasks according to urgency and importance. 

3. The application is built using HTML, CSS, and JavaScript, ensuring a responsive and interactive user experience across various devices and screen sizes.

**Overview Features and Demo of the Project**
let's delve into the features of the Kanban board project

1. **Dynamic Task Addition**: 
   - Users can create new tasks via a modal pop-up, which becomes visible upon clicking the add (+) button. This feature is essential for inputting new tasks into the board, allowing users to detail what needs to be done.

2. **Task Priority Color Coding**:
   - Each task can be assigned a priority level represented by colors (light pink, light green, light blue, black). This visual differentiation helps users quickly identify task importance or categorize them based on priority, enhancing task management efficiency.

3. **Task Filtering by Color**:
   - The Kanban board provides functionality to filter tasks based on their priority color. Clicking on a color in the toolbox shows only tasks of that color, while a double-click resets the filter, showing all tasks. This feature aids in focusing on tasks of a specific priority or category, making it easier to manage large numbers of tasks.

4. **Editable Task Descriptions**:
   - Tasks are editable after their creation. Users can unlock a task to edit its description directly on the board and lock it back once done. This inline editing feature makes it convenient to update task details without needing a separate edit mode or pop-up.

5. **Local Storage for Persistence**:
   - The application uses the web browser's local storage to save tasks, ensuring that user data is preserved between sessions. This means that tasks remain on the board even after the browser is closed or refreshed, providing a persistent user experience.

6. **Task Deletion**:
   - Users can delete tasks from the board. A delete (or remove) mode can be toggled, after which clicking on a task will remove it. This feature allows for the easy removal of completed or unwanted tasks, maintaining a clean and up-to-date task list.

7. **Priority Color Selection in Modal**:
   - When adding a new task, users can select its priority color within the modal through a set of color options. This selection process lets users categorize or prioritize the task right at the point of creation.

8. **Unique Task Identification**:
   - Each task is assigned a unique ID, ensuring that tasks can be individually identified. This is particularly useful for managing tasks programmatically, such as updating or deleting specific tasks based on user actions.

9. **Interactive UI Elements**:
   - The application includes interactive UI elements such as buttons for adding and removing tasks and color selections for priority. These elements are designed to provide a user-friendly experience, making task management both efficient and enjoyable.

10. **Responsive Design**:
    - The project is styled with responsiveness in mind, meaning it's designed to look and function well on a variety of devices and screen sizes. This adaptability enhances accessibility and user experience across different platforms.



**We will cover the Structure and Design part in Today's Session**

So let's start.


## Demo and Wireframe of the project:

Initially showing the demonstartion of the adding task, setting the colors, unlock/lock feature, filtering based on the colors and delete feature.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/293/original/upload_a9d95787724a2eefbc93ff4c186e60f4.png?1695962045)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/294/original/upload_13e69cd676c1c6d6d59196e64feca84f.png?1695962069)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/295/original/upload_17f12377711408328263574d51b2f1d2.png?1695962111)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/296/original/upload_be9923603755a2c965d7de8883361c37.png?1695962174)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/297/original/upload_072c08517a1a2e792b109cd3e694555b.png?1695962206)


### WireFrame of the Kanban Board

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/298/original/upload_ad6e9829fa6c28b5099af52832588dac.png?1695962233)



So now let's take a blank HTML Page and start designing the first section of the app (The toolbox Container) basically the Navbar

The Toolbox will have-

- 4 diffrent colored boxes(buttons) clicking on them our tasks will get filtered , the color which will be clicked that task will be visible

- Two buttons one Add (+) and one Cross (X) we will get the icons form font awesome

Let's create the toolbox

### HTML - The Toolbox Container

```html
<div class="toolbox-cont"></div>
```

- This `div` acts as the main container for the toolbox. The class `toolbox-cont` signifies it will be styled specifically as a toolbox, containing both priority indicators and action buttons.

Inside the toolbox, there are two main sections: one for priority colors (`toolbox-priority-cont`) and one for action buttons (`action-btn-cont`).

#### Priority Colors Section

```html
<div class="toolbox-priority-cont"></div>
```

- A container for priority color indicators. It's styled to visually differentiate between various priority levels through color.

```html
<div class="lightpink color"></div>
<div class="lightgreen color"></div>
<div class="lightblue color"></div>
<div class="black color"></div>
```

- These divs represent individual priority colors. Each `div` uses a combination of a specific color class (e.g., `lightpink`) and a general `color` class for common styling.

#### Action Buttons Section

```html
<div class="action-btn-cont"></div>
```

- A container for the action buttons, including add and remove buttons. It's designed to allow user interactions with the toolbox.

We will be using font awesome to get Icons

Using Font Awesome icons in a web project involves a few straightforward steps. Font Awesome provides a vast library of icons that can be easily integrated and styled directly within your HTML and CSS. Here's how you can use Font Awesome icons

### Step 1: Include Font Awesome Library

First, you need to include the Font Awesome library in your HTML document. This can be done by adding a link to the Font Awesome stylesheet in the `<head>` section of your HTML file. Font Awesome offers a CDN (Content Delivery Network) link that you can use to include the latest version of the icons directly from their servers.

In your code snippet, this is achieved with the following line:

```html
<script
  src="https://kit.fontawesome.com/589957875e.js"
  crossorigin="anonymous"
></script>
```

This `<script>` tag includes the Font Awesome kit you've created or selected on their website. The `crossorigin="anonymous"` attribute is used to enable CORS (Cross-Origin Resource Sharing), allowing the browser to request resources from another domain.

### Step 2: Use Font Awesome Icons in HTML

After including the Font Awesome library, you can start using the icons in your HTML. To do this, you add an `<i>` (or `<span>`) element with the class names that correspond to the specific icon you want to use. Font Awesome icons have two parts to their class names: the style prefix and the icon name.

For example, in your code, you have:

```html
<div class="add-btn">
  <i class="fa-solid fa-plus"></i>
</div>
<div class="remove-btn">
  <i class="fa-solid fa-xmark"></i>
</div>
```

- `fa-solid` is the style prefix indicating you're using the solid style of the icons.
- `fa-plus` and `fa-xmark` are the icon names for the plus and cross icons, respectively.

- Inside, individual `div` elements for the add and remove buttons are defined, each containing an icon from FontAwesome (plus and x-mark icons). The classes `add-btn` and `remove-btn` are used for specific styling and interactions.

### CSS - Styling the Toolbox

#### Global Styles

```css
* {
  box-sizing: border-box;
}
```

- Applies the `box-sizing` property with a value of `border-box` to all elements. This makes elements' dimensions include padding and border, but not the margin.

```css
body {
  margin: 0;
  padding: 0;
}
```

- Resets the default margin and padding of the `body` element to 0, providing a clean slate for further styling.

#### Toolbox Container

```css
.toolbox-cont {
  height: 5rem;
  background-color: #4b4b4b;
  display: flex;
  align-items: center;
}
.toolbox-cont > * {
  margin-left: 4rem;
}
```

- The `.toolbox-cont` class styles the toolbox container, setting its height, background color, and centering its child elements using Flexbox. The `> *` selector increases the left margin of all direct children, spacing out the priority color and action button containers.

#### Priority Colors Container

```css
.toolbox-priority-cont {
  height: 3.5rem;
  width: 18rem;
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.toolbox-priority-cont > *:hover {
  background-color: #485460;
}
```

- Styles the priority color container, setting dimensions, background color, and evenly spacing the color indicators. The `:hover` pseudo-class changes the background color of any color indicator on hover, enhancing user interaction.

#### Color Indicators

```css
.color {
  height: 1.5rem;
  width: 3rem;
}
.lightpink {
  background-color: lightpink;
}
.lightgreen {
  background-color: lightgreen;
}
.lightblue {
  background-color: lightblue;
}
.black {
  background-color: black;
}
```

- The `.color` class sets the size for all color indicators. Individual color classes apply specific background colors, visually representing different priority levels.

#### Action Buttons Container

```css
.action-btn-cont {
  height: 3.5rem;
  width: 8rem;
  background-color: #3d3d3d;
  display: flex;
}
.action-btn-cont > * {
  display: flex;
  width: 50%;
  font-size: 2rem;
  color: white;
  justify-content: center;
  align-items: center;
}
```

- Defines the styling for the action button container and its children. Each button is designed to take up half the container's width, centering the FontAwesome icons with white color and significant font size for visibility.

#### Button Hover Effects

```css
.add-btn:hover,
.remove-btn:hover {
  background-color: #4bb543;
}
```

- Adds a hover effect to both the add and remove buttons by changing their background color, providing visual feedback that the buttons are interactive.

**Complete HTML code for the Toolbox -**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
    <link />
  </head>
  <body>
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
  </body>

  <script
    src="https://kit.fontawesome.com/589957875e.js"
    crossorigin="anonymous"
  ></script>
</html>
```

**Complete CSS code for the Toolbox -**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.toolbox-cont {
  height: 5rem;
  background-color: #4b4b4b;
  display: flex;
  align-items: center;
}

.toolbox-cont > * {
  margin-left: 4rem;
}

.toolbox-priority-cont {
  height: 3.5rem;
  width: 18rem;
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.toolbox-priority-cont > *:hover {
  background-color: #485460;
}

.color {
  height: 1.5rem;
  width: 3rem;
}

.lightpink {
  background-color: lightpink;
}

.lightgreen {
  background-color: lightgreen;
}

.lightblue {
  background-color: lightblue;
}

.black {
  background-color: black;
}

.action-btn-cont {
  height: 3.5rem;
  width: 8rem;
  background-color: #3d3d3d;
  display: flex;
}

.action-btn-cont > * {
  display: flex;
  width: 50%;
  font-size: 2rem;
  color: white;
  justify-content: center;
  align-items: center;
}

.add-btn:hover {
  background-color: #4bb543;
}

.remove-btn:hover {
  background-color: #4bb543;
}
```

**Output-**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/305/original/upload_d2b4ce1974ce2ded96f913efa5888f58.png?1695962865)



Let's start creating the design for tickets This will be a task  ticket that will appear in the application, including elements like a color-coded priority indicator, a ticket ID, a task description area, and a lock icon for editing control.

### HTML Structure

```html
<div class="main-cont">
  <div class="ticket-cont">
    <div class="ticket-color"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">Random Task</div>
    <div class="ticket-lock">
      <i class="fa-solid fa-lock"></i>
    </div>
  </div>
</div>
```

#### `.main-cont`

- This container holds all the tickets. It's designed to be flexible, allowing for multiple tickets to be displayed together, potentially in a grid or row layout depending on the screen size.

#### `.ticket-cont`

- Represents an individual ticket or task. This container includes all elements related to a single task, such as its priority color, ID, description, and lock status.

#### `.ticket-color`

- A small div used to display the task's priority color. The height is specified, but the width extends to the full width of the `.ticket-cont` container by default.

#### `.ticket-id`

- Displays the unique ID of the task. It's styled distinctly (with a yellow background in this case) to stand out from the rest of the task elements.

#### `.task-area`

- Intended for the task description. This is where the details of the task are shown.

#### `.ticket-lock`

- Contains an icon indicating whether the task is locked or editable. This is represented by the lock icon from the Font Awesome library.

### CSS Styles

#### `.main-cont`

```css
.main-cont {
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;

  /* As many tickets can be added here so this will make sure that the design is neat to accomodate multiple tickets */
}
```

- Sets up a flexible container with a gap between items for spacing, centered alignment, and wrapping behavior. This ensures that no matter how many tickets are added, the layout remains neat and scalable.

#### `.ticket-cont`

```css
.ticket-cont {
  height: 12rem;
  width: 15rem;
  background-color: coral;
}
```

- Defines the size and background color of each ticket container. These dimensions ensure that each ticket has sufficient space to display its content clearly.

#### `.ticket-color`

```css
.ticket-color {
  height: 1rem;
}
```

- Sets the height of the priority color bar. The width is not specified, so it extends to the full width of its parent container (`.ticket-cont`).

#### `.ticket-id`

```css
.ticket-id {
  background-color: yellow;
  height: 2rem;
}
```

- Styles the ticket ID area, making it visually distinct with a yellow background and a specific height.

#### `.ticket-lock`

```css
.ticket-lock {
  display: flex;
  justify-content: flex-end;
  margin-top: 90px;
  margin-right: 5px;
  font-size: 1.5rem;
}
```

- Positions the lock icon at the bottom-right corner of the ticket, with a margin at the top to push it down and a smaller margin on the right. The `display: flex` and `justify-content: flex-end` properties align the icon to the right. The font size increases the icon's size for better visibility.

#### `.textArea-cont`

```css
.textArea-cont {
  height: 100%;
  width: 75%;
  resize: none;
  outline: none;
  border: none;
  background-color: #dfe4ea;
  font-size: 2rem;
  color: black;
}
```

**Complete code up till ticket-cont**

**_HTML_**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./style.css" />
  </head>
  <body>
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
      <div class="ticket-cont">
        <div class="ticket-color"></div>
        <div class="ticket-id">12345</div>
        <div class="task-area" contenteditable="false">Random Task</div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>
      </div>
    </div>
  </body>

  <script
    src="https://kit.fontawesome.com/589957875e.js"
    crossorigin="anonymous"
  ></script>
</html>
```

**_CSS_**

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

/* Toolbox styles */

.toolbox-cont {
  height: 5rem;
  background-color: #4b4b4b;
  display: flex;
  align-items: center;
}

.toolbox-cont > * {
  margin-left: 4rem;
}

.toolbox-priority-cont {
  height: 3.5rem;
  width: 18rem;
  background-color: #3d3d3d;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.toolbox-priority-cont > *:hover {
  background-color: #485460;
}

.color {
  height: 1.5rem;
  width: 3rem;
}

.lightpink {
  background-color: lightpink;
}

.lightgreen {
  background-color: lightgreen;
}

.lightblue {
  background-color: lightblue;
}

.black {
  background-color: black;
}

.action-btn-cont {
  height: 3.5rem;
  width: 8rem;
  background-color: #3d3d3d;
  display: flex;
}

.action-btn-cont > * {
  display: flex;
  width: 50%;
  font-size: 2rem;
  color: white;
  justify-content: center;
  align-items: center;
}

.add-btn:hover {
  background-color: #4bb543;
}

.remove-btn:hover {
  background-color: #4bb543;
}

.modal-cont {
  height: 50vh;
  width: 45vw;
  display: flex;
  background-color: lightsalmon;
  position: absolute;
  top: 30%;
  left: 27%;
  display: none;
}

/* Ticket styles */

.main-cont {
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 2rem;
  flex-wrap: wrap;
}

.ticket-cont {
  height: 12rem;
  width: 15rem;
  background-color: coral;
}

.ticket-color {
  height: 1rem;
}

.ticket-id {
  background-color: yellow;
  height: 2rem;
}

.ticket-lock {
  display: flex;

  justify-content: flex-end;
  margin-top: 90px;
  margin-right: 5px;
  font-size: 1.5rem;
}

.textArea-cont {
  height: 100%;
  width: 75%;
  resize: none;
  outline: none;
  border: none;
  background-color: #dfe4ea;
  font-size: 2rem;
  color: black;
}
```

**Output-**

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/313/original/upload_2d430278f46b2c037ad120ae71d7a62c.png?1695963341)


Let's Design The modal component used for adding or editing tasks in a Kanban board application. It includes a text area for entering the task's content and a side panel for selecting the task's priority through color codes. Let's walk through each part of the HTML and CSS and build tis from scratch

### HTML Structure

#### Modal Container

```html
<div class="modal-cont"></div>
```

- This `div` acts as the container for the entire modal. It's designed to overlay other content and provide a focused area for inputting task details and selecting a priority.

#### Text Area for Task Input

```html
<textarea class="textArea-cont" placeholder="Enter Your Task"></textarea>
```

- A `textarea` element where users can type the task they wish to add or edit. The `placeholder` attribute provides a hint about what to enter. It's styled to integrate seamlessly with the modal's design.

#### Priority Colors Container

```html
<div class="priority-colors-container"></div>
```

- This `div` houses the priority color options. It's a distinct section within the modal, allowing users to choose a priority for their task visually.

#### Priority Color Options

```html
<div class="lightpink priority-color"></div>
<div class="lightgreen priority-color"></div>
<div class="lightblue priority-color"></div>
<div class="black priority-color active"></div>
```

- Individual `div` elements represent different priority levels through color (`lightpink`, `lightgreen`, `lightblue`, `black`). The `active` class on the last element indicates the current selection or default value.

### CSS Styles

#### Modal Container

```css
.modal-cont {
  height: 50vh;
  width: 45vw;
  display: flex;
  background-color: lightsalmon;
  position: absolute;
  top: 30%;
  left: 27%;
}
```

- Styles the modal container with a fixed size relative to the viewport (`vh` and `vw` units), centers it on the screen using `position: absolute` and offsets from the top and left. The `display: flex` property indicates its children (the text area and priority colors container) will be laid out in a row.

#### Text Area

```css
.textArea-cont {
  height: 100%;
  width: 75%;
  resize: none;
  outline: none;
  border: none;
  background-color: #dfe4ea;
  font-size: 2rem;
  color: black;
}
```

- Configures the task input area to take up the majority of the modal's space, removing the default border and resize handle for a cleaner look. The large font size improves readability.

#### Priority Colors Container

```css
.priority-colors-container {
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: #4b4b4b;
  align-items: center;
  justify-content: space-around;
}
```

- Sets up a sidebar for priority color selection, occupying a smaller portion of the modal. It's designed to display color options in a column, centered and evenly spaced.

#### Priority Color Options

```css
.priority-color {
  height: 3rem;
  width: 5rem;
}
```

- Ensures each priority color option has a consistent size, making them easy to select.

#### Active Priority Color

```css
.active {
  border: 5px solid lightsalmon;
}
```

- Highlights the currently selected or default priority color by adding a distinct border. This visual cue helps users see their current selection at a glance.

Together, the HTML and CSS create a modal component that serves as a user interface for adding or editing tasks. It combines functional elements like a text input area and interactive priority color selections with aesthetic considerations to create a user-friendly experience. The modal's design ensures that it grabs the user's attention by overlaying other content and provides clear, straightforward options for task input and priority selection.


**Complete HTML Code for the whole design**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kanban Board Class</title>
    <link rel="stylesheet" href="./style.css" />
    <script
      src="https://kit.fontawesome.com/589957875e.js"
      crossorigin="anonymous"
    ></script>
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
      <div class="ticket-cont">
        <div class="ticket-color"></div>
        <div class="ticket-id">12345</div>
        <div class="task-area" contenteditable="false">Random Task</div>
        <div class="ticket-lock">
          <i class="fa-solid fa-lock"></i>
        </div>
      </div>
    </div>

    <!-- Modal Task Area -->

    <div class="modal-cont">
      <textarea class="textArea-cont" placeholder="Enter Your Task"> </textarea>

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

**Complete CSS Code for the whole design**

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

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/051/308/original/upload_6897796c561e5883f5e5d43bcf818ec0.png?1695963073)

So This is how we have designed all the sections that will be needed for the project!

In the next Class we will move to JavaScript , We will use DOM and will start working on making these elements interactive and will add all the Features

Start the Doubt Session!
