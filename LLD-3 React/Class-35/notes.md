
# Full Stack LLD: React-2: Introduction to React Build Tools, lists , forms, props and state


---
title:Build Tools
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---


As we discussed in our previous class that we cannot just rely on CDN for React Development , We need some tools which can get a complete ecosystem for us to build Production Ready React Apps

Some of the majorly used Build tools are - 

1. CRA
2. VITE
3. Parcel

Let's break down the differences between CRA, Vite, and Parcel for building React applications in a way that's easy to understand We wont go into all the techical jargons as of now

### CRA (Create React App):
- **Purpose**: CRA is a tool that helps you quickly create a new React project.
- **How it works**: When you run a simple command (`npx create-react-app my-app`), it sets up a new project with all the necessary files and configurations. This includes setting up Webpack, Babel, and other tools behind the scenes.
- **Pros**: It's beginner-friendly because everything is set up for you. You don't have to worry about configurations or installations.
- **Cons**: Since it uses Webpack for bundling, it can be slower when dealing with large projects. Customizing it beyond the default settings can also be a bit challenging.

### Vite:
- **Purpose**: Vite is another tool for setting up and building React applications, designed to be fast and efficient.
- **How it works**: Vite sets up your project with minimal configuration. It uses ES modules natively, meaning it can serve your files directly to the browser in a way that speeds up development.
- **Pros**: It's incredibly fast, especially for large projects. It also supports hot module replacement, which means you can see changes live without reloading the page.
- **Cons**: Vite is a newer tool compared to CRA, and while it's gaining popularity quickly, some resources or libraries might still be catching up.

### Parcel:
- **Purpose**: Parcel is a bundler for JavaScript applications, including React.
- **How it works**: Parcel automatically bundles your React app's assets (JavaScript, CSS, HTML) together into a smaller, optimized package. It also does this with minimal configuration.
- **Pros**: It’s known for its simplicity and zero-config philosophy. It's also very fast, thanks to parallel processing and caching.
- **Cons**: It may not be as feature-rich as Webpack, especially when handling more complex projects or customizations.

### Conclusion:
- **CRA** is great for beginners due to its simplicity, but can be slower for larger projects.
- **Vite** offers speed and a streamlined setup process, making it great for both beginners and experienced developers.
- **Parcel** strikes a balance between simplicity and speed, making it ideal for those who want minimal configuration.

Ultimately, choosing between CRA, Vite, and Parcel depends on your project needs and comfort level. If you're starting, CRA or Vite might be the best choice, but as you grow more comfortable, exploring Parcel can be very beneficial.


We will be using Vite for our development purpose

**Note- Setting up React App with CRA will be added in the notes and post reads**

### React Development with Vite

React is a powerful tool designed to manage the complex front-end needs of modern web applications. While traditional HTML, CSS, and JavaScript offer some capabilities, they fall short when it comes to building and managing larger applications, such as LinkedIn or Facebook. 

For this reason, frameworks like React have been developed, along with build tools like Vite that streamline development and optimize production-ready code.

#### Why Vite?

Vite stands out as a versatile tool that accelerates development and provides essential features for managing React applications:

1. **Faster Install Speed:** Vite's optimized package manager swiftly installs dependencies, accelerating initial setup and reducing waiting times.


2. **Code Splitting:** Vite offers automatic code splitting, reducing bundle sizes and improving load times by splitting your JavaScript into smaller, manageable chunks. (We will see this in our future classes)

#### Setting Up Vite

To set up Vite, you can follow these steps:

1. **Create a Vite Project:**  
   Run the following commands in your terminal:

   ```bash
   npm create vite@latest my-vite-app --template react
   cd my-vite-app
   npm install
   ```

   This will create a new React project using Vite, named "my-vite-app," and install the necessary dependencies.

2. **Project Structure:**

   The project structure will look like this:

   - **`package.json:`** Specifies project dependencies and metadata. It lists essential libraries like React, ReactDOM, Vite, and others, including various build and linting tools.
   
   - **`node_modules:`** A directory housing all installed packages and their dependencies, including development tools like Babel and ESLint etc.
   
   - **`index.html:`** The entry point for the web application. It contains a root `<div>` where ReactDOM will render the app's components. remember we created a root in our previous class as well
   
   - **`src:`** The source code directory containing the app's logic and components:
      - **`main.jsx:`** Initializes the ReactDOM rendering process by rendering the app component into the root `<div>` defined in `index.html`.
      - **`app.jsx:`** Houses the main application logic and structure, serving as the foundation for additional components and functionalities.

3. **Installing Additional Tools:**

   - **ES7 Extension:** This extension, available for Visual Studio Code, provides quick access to React snippets, streamlining component creation and other React-specific tasks.


   Now Clean up the whole app.jsx file and write `Hello React` and see the output by running the app with the command `npm run dev`

   ![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/552/original/upload_f7556fa3322939b6c03fbd467dafb472.png?1699639150)

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/555/original/upload_ffa124d02dff6e40ba67e96c28746912.png?1699639270)


SO this is your first React application with the Build tool `Vite`!

---
title:Components and Reusablity of Components
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---


Let's see How now to create a Component and use it!


First you have to create a folder inside `src` directory let's name it components and create a file inside it by the name `MyComponent.jsx` , Now one thing to make sure of is always start a component's name with a `Captial letter`

Here's how you can create a React component named `MyComponent` and use it in your main application file `app.jsx`:

1. **Create the `MyComponent`:**

   - The component `MyComponent` is a simple functional component that returns an `<h1>` element with a greeting text.

2. **Reuse `MyComponent` in `app.jsx`:**

   - In the main application file, `app.jsx`, you can import `MyComponent` and render the output.

### Step-by-step Implementation:

1. **Create `MyComponent.jsx`:**

   ```jsx
   // MyComponent.jsx
   import React from 'react';

   const MyComponent = () => {
       return <h1>Hello, I am a Component</h1>;
   };

   export default MyComponent;
   ```

   - This defines a simple functional component named `MyComponent`. It uses JSX to render an `<h1>` element with the text "Hello, I am a Component".

2. **Modify `app.jsx`:**

   ```jsx
   // app.jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import MyComponent from './MyComponent'; // Importing MyComponent

   const App = () => {
       return (
           <div>
               <MyComponent /> {/* First use */}
           </div>
       );
   };

   export default App

   ```

   - Here, we import `MyComponent` into our main application file.
   - We create a root component `App` that returns a `<div>` containing one instance of `MyComponent`.
   - The application is rendered to the DOM using `ReactDOM.render()`.

 Here as soon as you import it and use the component like this in app.jsx , This gets rendered and you see the output of this component

 <img src='https://i.ibb.co/rcJjGLM/Screenshot-2024-04-30-at-1-35-11-PM.png'/>


 You can even Reuse this component again and again if you want 

 You can do something like this

 

2. **Modify `app.jsx`:**

   ```jsx
   // app.jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import MyComponent from './MyComponent'; // Importing MyComponent

   const App = () => {
       return (
           <div>
               <MyComponent /> {/* First use */}
               <MyComponent /> {/* Second use */}
               <MyComponent /> {/* Third use */}
           </div>
       );
   };


   export default App;
   ```

   - Here, we import `MyComponent` into our main application file.
   - We create a root component `App` that returns a `<div>` containing three instances of `MyComponent`.
   - The application is rendered to the DOM using `ReactDOM.render()`.

3. **Explanation:**

   - **Reusability:** By defining `MyComponent` separately and using it three times in the main app, you illustrate the reusability and modularity of React components
   


Now you will see the ouptput like this

<img src='https://i.ibb.co/GQHf5jZ/Screenshot-2024-04-30-at-1-40-59-PM.png'>

You are now able to use a Single Component for multiple times , This is known as `Reusablity of a Component`


But what use is Reusablity of if we cannot have a little dynamic nature in it? , Let's Spice it up with using `props` and then you will get a better idea of why this is useful




Extending the same example with `props`


---
title:Props in React
description: What will be covered in the topic?
duration: 120
card_type: cue_card
---

Props (short for properties) are a fundamental concept in React. They allow components to accept and use data that is passed to them from their parent component. This makes props a powerful tool for creating reusable, customizable components that can render different outputs depending on the data they receive.

### Understanding Props:

1. **Passing Data to Components:**

    In functional components, props are accessed directly through the component's function signature.

2. **Customizing Components:**
   - By accepting props, a component can behave differently depending on the data it receives. This allows you to create components that are highly reusable yet customizable.
   - For example, a `Button` component could receive a `label` prop, which determines the text displayed on the button.


3. **Reusability:**
   - Using props enables components to be reused with different configurations. This makes them a key part of React's component-based architecture, allowing for modular, maintainable code.

### Step-by-Step Implementation:

1. **Modify `MyComponent` to Accept a Prop:**

   We'll introduce a `message` prop to `MyComponent` and use it to render different messages.

   ```jsx
   // MyComponent.jsx
   import React from 'react';

   const MyComponent = ({ message }) => { // Accept the message prop
       return <h1>{message}</h1>; // Use the message prop in the JSX
   };

   export default MyComponent;
   ```

   - `MyComponent` is modified to accept a `message` prop. This prop is interpolated into an `<h1>` element to display different messages.

2. **Reuse `MyComponent` with Different Prop Values in `app.jsx`:**

   We use `MyComponent` three times, passing different values to the `message` prop.

   ```jsx
   // app.jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import MyComponent from './MyComponent'; // Import MyComponent

   const App = () => {
       return (
           <div>
               <MyComponent message="Hello, I am Component 1" /> {/* First use with a different message */}
               <MyComponent message="Hi, I'm another Component" /> {/* Second use with a different message */}
               <MyComponent message="Hey there, Component here!" /> {/* Third use with a different message */}
           </div>
       );
   };

   ReactDOM.render(<App />, document.getElementById('root'));
   ```

   - We pass different values to the `message` prop for each instance of `MyComponent`.
   - This makes each instance render a unique message.

3. **Benefits of Using Props:**

   - **Customization:** The `message` prop allows each instance of `MyComponent` to behave differently, making it customizable and flexible.
   - **Reusability:** By utilizing props, the same component can be reused multiple times while allowing for different configurations.
   - **Separation of Concerns:** `MyComponent` remains encapsulated and focused on its own functionality. This makes it easier to manage and extend both the component and the main application.
   - **Efficiency:** This approach adheres to the DRY (Don't Repeat Yourself) principle, avoiding code duplication by using props to manage differences in behavior or content.


This example demonstrates how to effectively use props to make React components more dynamic and reusable, allowing for easier customization and maintenance in a scalable way.


<img src='https://i.ibb.co/yPkqGqW/Screenshot-2024-04-30-at-2-10-09-PM.png'>



---
title:Pass Arrays and Objects as Prop and rendering a List
description: 
duration: 120
card_type: cue_card
---

To create a React component that accepts an array and an object as props, and to use them effectively, let's consider a straightforward setup. We'll create a simple React application where the main component (`App`) renders a child component (`DisplayData`), passing an array and an object as props.

Here's how you can implement and structure these components:

### Step 1: Setting Up `App.jsx`

This is the main component that will render the child component with the props.

```jsx
// Import necessary libraries and components
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayData from './DisplayData';

const App = () => {
  // Define an array and an object to be passed as props
  const fruits = ['Apple', 'Banana', 'Cherry'];
  const person = {
    name: 'Alice',
    age: 25,
  };

  return (
    <div>
      <h1>React Props Example</h1>
      {/* Render the DisplayData component with props */}
      <DisplayData fruits={fruits} person={person} />
    </div>
  );
};

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById('root'));
```

### Step 2: Creating the `DisplayData.jsx` Component

This component receives the props from the parent `App` component and displays them.

```jsx
import React from 'react';

const DisplayData = ({ fruits, person }) => {
  return (
    <div>
      <h2>Fruits List:</h2>
      <ul>
        {/* Render each fruit from the fruits array */}
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Person Info:</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
};

export default DisplayData;
```

### How It Works:

1. **`App.jsx`:** This file serves as the main entry point for the application. It sets up an array (`fruits`) and an object (`person`), which are then passed as props to the `DisplayData` component. The rendering is initiated by calling `ReactDOM.render`.

2. **`DisplayData.jsx`:** This component takes `fruits` and `person` as props (using object destructuring in the function signature). Inside its render function:
   - It iterates over the `fruits` array using the `map` method, rendering each fruit as a list item.
   - It also displays the properties of the `person` object directly by accessing them as `person.name` and `person.age`.

3. **Rendering:** The `DisplayData` component takes the props and displays them in a straightforward manner, making use of React's built-in tools to handle arrays and objects effectively.

4. **Structure:** The `App` component acts as the root of the application, ensuring that necessary props are passed down to the child components, which handle the data presentation.

This setup demonstrates how you can handle arrays and objects seamlessly in React, using straightforward rendering techniques.





---
title:Conditional Rendering in React
description: 
duration: 120
card_type: cue_card
---

Conditional rendering in React is a way to render components or content conditionally based on a specific condition, such as a Boolean value or a function result. Let's walk through this process step by step, assuming you have a React setup already in place:

### Step 1: Creating a Functional Component

We'll start by creating a simple functional component that accepts props, including destructuring them. We'll also add logic to conditionally render content based on a prop:

```jsx
// ConditionalRendering.js
import React from 'react';

const ConditionalRendering = ({ isLoggedIn, username }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <h1>Please log in to continue.</h1>
      )}
    </div>
  );
}

export default ConditionalRendering;
```

### Explanation:

1. **Props and Destructuring:** Our component receives props: `isLoggedIn` and `username`. These props are then destructured directly in the function parameter list.

2. **Conditional Logic:** We use a ternary operator to decide what content to render:
   - If `isLoggedIn` is `true`, it renders a message welcoming the user.
   - If `isLoggedIn` is `false`, it renders a prompt asking the user to log in.

### Step 2: Using the Component in the Main App

Next, let's see how to use this component in `App.js`:

```jsx
// App.js
import React from 'react';
import ConditionalRendering from './ConditionalRendering';

const App = () => {
  // Example props
  const isLoggedIn = true; // Change this to false to see the conditional behavior
  const username = 'JohnDoe';

  return (
    <div>
      <ConditionalRendering isLoggedIn={isLoggedIn} username={username} />
    </div>
  );
}

export default App;
```

### Explanation:

1. **Passing Props:** In the `App` component, we create two variables `isLoggedIn` and `username`. These values are then passed as props to the `ConditionalRendering` component when it is rendered.

2. **Conditional Rendering in Action:** Depending on the value of `isLoggedIn`, the `ConditionalRendering` component will render different content:
   - If `isLoggedIn` is `true`, the username is displayed in a welcoming message.
   - If `isLoggedIn` is `false`, a prompt to log in is displayed.

### How It Works:

- **Ternary Operator:** This is a shorthand way of writing an if-else statement. It's particularly useful for rendering different elements or components based on a simple condition.
  
- **Flexibility:** This approach can be extended to more complex conditions and logic. For example, you might check for multiple states or use functions to determine which content to display.

- **Reusability:** The component is reusable with different props, making it easy to customize its behavior based on different app states.

### Conclusion:

Conditional rendering in React is a powerful way to dynamically display content or components based on specific conditions. By utilizing props and the ternary operator, we can efficiently control what is rendered, making our React applications more dynamic and responsive to different states. This allows us to create a smooth and intuitive user experience, regardless of the specific requirements.

---
title:Simple Event handling in React
description: 
duration: 120
card_type: cue_card
---

 In React, event handling involves creating functions that respond to user actions, such as clicking a button. We'll create a simple React component that renders a button, and when that button is clicked, it will print "Button clicked" to the console.


Now, let's create our button component. Inside the `src` folder, create a new file called `Button.js`:

```jsx
// Button.js
import React from 'react';

const Button = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
};

export default Button;
```

In this code:
- We define a functional component `Button`.
- Inside the component, we define a function `handleClick` that will be called when the button is clicked. This function simply logs "Button clicked" to the console.
- We render a `<button>` element and attach an `onClick` event handler to it. This event handler is set to call the `handleClick` function when the button is clicked.

Now, let's use this `Button` component in our main `App` component. Open `App.js` file in the `src` folder and replace its content with the following code:

```jsx
// App.js
import React from 'react';
import Button from './Button';

const App = () => {
  return (
    <div className="App">
      <Button />
    </div>
  );
};

export default App;
```

This code imports the `Button` component we created and renders it inside the `App` component.

Finally, let's start our React app. Go back to your terminal and run:

```bash
npm run dev
```

This will start a development server for your React app and open it in your default web browser. You should see a button that says "Click me". When you click the button, "Button clicked" will be printed to the console in your browser's developer tools console.

That's it! You've implemented a simple event handling in React.


---
title:State and useState hook in React
description: 
duration: 120
card_type: cue_card
---

In React, a "state" is a built-in object that represents the current condition of a component. It's essentially a JavaScript object that holds data relevant to a component and can influence what is rendered on the user interface. State allows components to manage dynamic data and update the UI accordingly based on user interactions, network responses, or any other event.

Unlike props, which are passed down from parent to child components and are immutable, state is managed internally by each component and can be changed. When the state of a component changes, React automatically re-renders the component, updating the UI to reflect the new state.

Stateful components (also known as "class components") use the `this.state` syntax to define and access state, while functional components (also known as stateless components) can utilize the `useState()` hook to introduce state management in a functional paradigm introduced in React 16.8 and above.


Let's see an Example to that how state can be used with functional components and for that we will be using a react hook `useState`



### Step 1: Understanding useState

`useState` is a hook in React that allows functional components to manage state. State in React is data that can change over time, and when state changes, React re-renders the component to reflect the updated state.

### Step 2: Code Example

Let's create a simple React component that utilizes the `useState` hook.

Open the `src/App.js` file in your project directory, and replace its contents with the following code:

```javascript
import React, { useState } from 'react';

function App() {
  // Define a state variable named "count" and a function to update it, "setCount"
  const [count, setCount] = useState(0);

  // Define a function that increments the count
  const incrementCount = () => {
    setCount(count + 1); // Update the count state with the new value
  };

  // Define a function that decrements the count
  const decrementCount = () => {
    setCount(count - 1); // Update the count state with the new value
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      {/* Button to increment count */}
      <button onClick={incrementCount}>Increment</button>
      {/* Button to decrement count */}
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default App;
```

### Step 3: Explanation

1. We import `React` and `useState` from the 'react' package. `useState` is the hook we'll use to manage state in our component.

2. Inside the `App` function component, we call the `useState` hook with an initial value of `0` (`useState(0)`). This initializes a state variable named `count` with an initial value of `0`, and returns an array with two elements: the current state value (`count`) and a function to update the state (`setCount`).

3. We define two functions, `incrementCount` and `decrementCount`, which update the `count` state by calling `setCount` with the new value.

4. In the JSX returned by the component, we display the current value of `count` using curly braces `{count}`, and provide buttons to increment and decrement the count. These buttons call the `incrementCount` and `decrementCount` functions respectively when clicked.

### Step 4: Running Your React App

To see your React app in action, navigate to your project directory in the terminal and run:

```bash
npm run dev
```

This will start a development server and open your React app in a web browser. You should see a simple counter app with buttons to increment and decrement the count.

That's it! You've just learned how to use the `useState` hook in React to manage state in functional components. 


---
title:State and Props Difference
description: 
duration: 120
card_type: cue_card
---


Using state is important in React because it allows components to manage their own data and re-render themselves when that data changes. 

State is local to a component, meaning that changes to state within a component don't affect other components. This encapsulation of state helps to keep the logic of your application organized and maintainable.

Now, regarding why props can't be used to manage the state is

1. **Immutability**: Props are immutable, meaning that they cannot be changed from within the component that receives them. In the counter example, we need to be able to modify the count value when the user clicks the increment or decrement buttons. Since props cannot be modified, they are not suitable for managing the state in this scenario.

2. **Single Source of Truth**: In React, it's a best practice to have a single source of truth for your data. By using state, you ensure that the component itself is the authority on its state, rather than relying on external data (props) that could change unpredictably.

3. **Re-rendering**: When the state of a component changes, React automatically re-renders the component to reflect the updated state. This is essential for maintaining a responsive user interface. Props, on the other hand, are static and do not trigger re-renders when they change. If we were to use props to manage the count in our example, we would have to manually trigger re-renders, which goes against React's declarative programming model.

In summary, while props are great for passing data from parent to child components, they are not suitable for managing dynamic data that needs to change over time within a component. For that, we use state, which provides a way for components to manage and update their own data.


and This is the basic differnce between State and Props
