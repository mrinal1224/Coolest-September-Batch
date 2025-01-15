# Full Stack LLD: React-1: Introduction to React: JSX, Props, lists

## Agenda
We will try to cover most of these topics in today's sessions and the remaining in the next.
* What is React & it's advantages
* Setting up react using CDN links
* components
* JSX -> Javascript and XML
* Props
* Component composition
* Rendering Lists

## Challenges in Modern Frontend

**Asking Question**
What are the Challenges faced in the modern frontend ?

**Ans:**
* Single Page Application : Now websites behaves more apps where it does not reload whole page but it reloads part of the UI 

* Lot of functionalities : Websites like fb , instagram , twitch , flipkart has move moving parts and lot of micro-intercation that happens in the ui and every thing the UI is interactable . It puts lot of stress on browser , DOM API and one need to write

* Code Maintainability : As the functionalites have increased many folds hence large code bases are created to accomplaish with that comes the problem of maintaing that while ensuring that a part  of the Tasks can be shared among multiple developers while maintaining coding standards

### solution of each of these
* Single Page Application : to create single page application we need fetch API or ajax request so you can get the data without reloading the page.History API  that is already present with which even with the change of route you can prevent the page reload while keeping left and right button functional 
![urlbar](back_forth.png)
* Code Maintainability : for this we already had solutions like webpack , gulp , grunt -> now (create-react-app) or vite solves these problems for us

* Lot of functionalities : We already had DOM API to manipulate our UI but as there are so much intercativity to maintain that a normal developer will not be able to do it 

**Take away** : all the solution expect DOM updates were not enough -> **React solves this problem** 



## What is React?
**React:** has the algorithm which efficiently manipulate the UI.
` why did i say UI not DOM`
**ans** : because react is generic it explain you how to update the UI and UI can be anything  and there should be an associating library that will actual do the changes.
**Different UIs and there library:**
|         |              |
|:-------:|:------------:|
| Mobile  | React Native |
|   Web   |  React DOM   |
|   VR    |   React VR   |

### summary
1. React : it is just the algorithm  and algorithm is `reconciler` -> we will study it in the upcoming classes
2. React DOM : this is the library that updates the DOM
3. react ecsosystem -> it is build like a lego block where differemt libraries are used to give you different functinality
like 
> 1. React DOM : doing actual changes on DOM
> 2. React Router DOM :   for routing
> 3. Redux : for state Management   
4. In this manner react is different from angular because there we have all the solution build into angular that make it a complete solution but limiting it's portability
---

### Why react is awesome ?

* React vs other frameworks : It is used way more than any other frontend framework out there . You can also refer this [link](https://insights.stackoverflow.com/trends?tags=reactjs%2Cangular%2Cvue.js%2Csvelte)  
![stackoverflow_trends](stack_overflow.png)
* There are always a lot of openings for react developers -> entry level , intermmediate and senior level [link](https://www.google.com/search?q=react+developer+jobs&sca_esv=598503895&rlz=1C5CHFA_enIN1022IN1022&sxsrf=ACQVn0_Ekoj7OEitiFFsdwLWATc3cWd98A%3A1705301395877&ei=k9WkZaudNYD04-EPvdek2Aw&ved=0ahUKEwjrsr7f5t6DAxUA-jgGHb0rCcsQ4dUDCBA&uact=5&oq=react+developer+jobs&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHJlYWN0IGRldmVsb3BlciBqb2JzMg0QABiABBiKBRhDGLEDMggQABiABBiSAzIFEAAYgAQyBRAAGIAEMgUQABiABDIKEAAYgAQYigUYQzIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARIngxQ_AFYoAtwAXgBkAEAmAG6AqABqweqAQcwLjIuMC4yuAEDyAEA-AEBwgIKEAAYRxjWBBiwA8ICDRAAGIAEGIoFGEMYsAPCAhAQABiABBiKBRhDGLEDGIMBwgIIEAAYgAQYsQPiAwQYACBBiAYBkAYK&sclient=gws-wiz-serp)
*  There is a awesome ecosystem around react ![link](https://github.com/enaqx/awesome-react?tab=readme-ov-file#react-renderers) 

## Hello World in React 

### Steps
* create `hello.html` file
```jsx
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge"> 
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
</head>
<body>
</body>
</html>
```

*  Add cdn link of react and reactDOM  : you can choose to open  the  link and show that react is nothing but js file 
```html
<head>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
</head>
```
* Write the Hello world component 
    * Root : it is the div in which the whole react application is rendered
    * `script`: in script all the  react code is written
    * `HELLO component` :  it is the component and component starts with Uppercase and in the return it will return HTML 
    * `ReactDOM.render`: this is the functions that will actually that the html code from HELLO component and add it in the 
root element
```jsx    
<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>
    <!-- single Page applcation : JS -->
    <script>
        function HELLO() {
            return <h1>Hello React </h1>;
        }
        ReactDOM.render(<HELLO></HELLO>, document.getElementById("root"));
    </script>
</body>
```
`Instructor cue: run the code in browser. It will give  error , now ask the students why are you getting the error`.

This just prints nothing on the browser as shown below:

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/497/original/upload_72f4116cfcee76aa78c5781b70fa258b.png?1699633345)

**Ask the learner** : is the above code a valid JS ??

Answer : no, if that is the case now we will need a translator that can convert this code to valid JS code 



**solution**: As in the above function Hello which is returning something which is neither html and not the javascript. Hence we use the Babble transpiler to convert the code of the one language to another. Babble is a javascript compiler to one language to another here it is JSX to JS 

`Instructor cue: here for further understanding you can take the learners to babel playground and paste the above component that will convert this code into js code `

*  Adding babel

```jsx
<!DOCTYPE html>
<html lang = "en">
<head>
    
     <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
    

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>
    <!-- we are telling that it is to be converted by babel from JSX to js -->
    <script type = "text/babel">
    -------
    react code 
    -------
    </script>
</body>

</html>
```
### complete code 
```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge"> 
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
     <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
    

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
       
        function HELLO(obj) {
            return <h1>Hello React </h1>;
        }

        ReactDOM.render(<HELLO></HELLO>, document.getElementById("root"));
    </script>
</body>

</html>
```


## Bare Bone React Example

If we take another example where without using JSX format to return the html unless we just use the simple JavaScript code with basic string manipulation that also print the same result on the browser as shown below:

```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <script src = "./lib/react.js"></script>
    <script src = "./lib/reactDOM.js"></script>
</head>

<body>
    <div id = "root"></div>
    <script>

        function HELLO() {
            let name = "React";
            let age = 30
            return `<h1>Hello  ${name} Thanks Babel and you are ${age<18 ?"underage":"eligble"}</h1>`;
        }

ReactDOM.render(HELLO, document.getElementById("root"));
    </script>

</body>

</html>
```


```jsx
<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE = edge">
    <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
    <title>Document</title>
    <!-- algorithm to efficiently manipulate your UI -->
    <script src = "https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    
    <!-- React DOM  -> uses react to update the DOM-->
    <script src = "https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    
    <!-- transpiler -> JSX -> into javascript -->
    <script src = "https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>

<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
        // -> component : a function that returns HTML
        function HELLO(obj) {
            let {age,occupation} = obj;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation} </h1>;
        }
        // a method in REACTDOM -> puts the retruned HTML from componente in root element
        ReactDOM.render(<HELLO age = {35} occupation = {"mentor and SDE "}></HELLO>, document.getElementById("root"));
    </script>
</body>

</html>
```

The reactDom.js file and the react.js file in the index.html is consist of the:

```javascript
let ReactDOM = {};
function render(component, root) {
    let OptimizedDOM = react(component);
    console.log("Rendering to DOM");
    // it puts into the root element
    root.innerHTML = OptimizedDOM;
}
ReactDOM.render = render;
```

```javascript
function react(component) {
    // calling that fn
    let dom = component();
    console.log("....optimizing changes");
    return dom;
}
```
1. component: Components are independent and reusable bits of code. 
2. They serve the same purpose as JavaScript functions, 
3. but work in isolation and return HTML
4. you create bigger components using smaller component


## JSX

JSON: Represent data in in JS fromat.
```javascript
{
name:Jasbir,
age:26
}
```

XML: Represent data in HTML

```javascript
<name>Jasbir</name>
<age>26</age>
```

In a typical web development workflow, JSX (a JavaScript extension used in libraries like React) is transformed into valid JavaScript, which is then utilized to render HTML elements. The resulting HTML can subsequently be converted into XML if needed for specific use cases or data interchange.



## Props

(Properties passed to a component) Passing the parameters that will be as objects.

```javascript
<script type = "text/babel">
        function HELLO(obj) {
            let {age,occupation} = obj;
            let name = "Jasbir";

            return <h1>Hello {name} Thanks Babel :) is {age} old and works as {occupation} </h1>;
        }
        ReactDOM.render(<HELLO age = {35} occupation = {"mentor and SDE "}></HELLO>, document.getElementById("root"));
</script>
```
![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/514/original/upload_3a5c83aa759fedde3fa4ddb2fa3ce43e.png?1699635530)



## Component Composition

If we are having the multiple components, then what will happen as shown below like in the HELLOPARENT component returning the HELLO component.

This code creates a single-page application using React and Babel. It defines two components, `HELLO` and `BYE`, which display messages. The `HELLOPARENT` component combines them. Finally, it renders the `HELLOPARENT` component into the HTML element with the ID "root."

```jsx
<body>
    <!-- the whole application lives inside-->
    <div id = "root"></div>

    <!-- single Page applcation : JS -->
    <script type = "text/babel">
        // -> component : a function that returns HTML
        function HELLO(prop) {
            let {name,age} = prop
            return <h1>Hello {name} Thanks Babel is {age} old </h1>;
        }
        function BYE(){
            return <p>BYE Component</p>
        }

        function HELLOPARENT() {
            return <div>
                <HELLO name = {"Rohan"} age = {10}></HELLO>
                <HELLO name = {"Rajneesh"} age = {30}></HELLO>
                <HELLO name = "Krishna" age = {40}></HELLO>
                <HELLO ></HELLO>
                <BYE></BYE>
                </div>

        }
        ReactDOM.render(<HELLOPARENT></HELLOPARENT>, document.getElementById("root"));
    </script>
</body>
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/515/original/upload_4c0071f1727e30cb02ea4e927d07de0c.png?1699635619)


- Create -> parent component from children component 
- Significance -> you can break a problem into multiple smaller parts
- A method in REACTDOM -> puts the returned HTML from component in root element

Like in the linkendin example shown below we can distribute the bigger block of info into smaller components like one for pic, for the three dots, for the information etc.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/516/original/upload_42b7a589753bea34470b27f115f6835a.png?1699635748)




## Rendering List from Data

Intially the list items are fetched using the simple for loop from the list and gets rendered on the browser.

```jsx
<div id = "root"></div>
    <script type = "text/babel">
        let statinoary = ["Pen", "Pencil", "Eraser", "Ruler"];
        
        // console.log(liItemsArr)
        
        function List() {
            return<div>
                <h2>List Items</h2>
                <ul>{statinoary.map((item) => {
                    return <li>{item}</li>
                })}</ul>
            </div>
        }

        ReactDOM.render(<List></List>, document.getElementById("root"));
    </script>
```

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/517/original/upload_0b90af9c88d82aaa1b7535a2cb1650cd.png?1699635846)

When you want to print a list it expects an array of string and that string code should be valid html, so when you map you get the valid html in the form of an array and then react internally spread that and then put it as li element.



## Key Prop

**[Ask the learners]**
Do you see any mistake here?

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/056/518/original/upload_93a7ee3cb2e710a3513898f5e5c65fb1.png?1699635897)

-> Every child in a list should have a key prop. A unique value for each list item.
-> A key ensures that none of the component is rendered multiple times. 
-> It also helps to identify each item uniquely.
-> Purpose of react is to optimize DOM.
-> Browser is very bad a doing DOM manipulation.
-> React makes it easier for the browser to manipulate DOM structure.

```jsx
<div id = "root"></div>
    <script type = "text/babel">
        let statinoary = ["Pen", "Pencil", "Eraser", "Ruler"];
        
        // console.log(liItemsArr)
        
        function List() {
            return<div>
                <h2>List Items</h2>
                <ul>{statinoary.map((item,idx) => {
                    return <li key = {idx}>{item}</li>
                })}</ul>
            </div>
        }

        ReactDOM.render(<List></List>, document.getElementById("root"));
    </script>
```
JSX (JavaScript XML) is a syntax extension for JavaScript commonly used with React to describe UI components. While it looks like HTML, it has its own set of rules and nuances. Here’s a comprehensive list of JSX rules:

---

### **1. JSX Elements Must Be Wrapped in a Parent Element**
JSX requires all elements to have a single enclosing parent element.

✅ **Correct:**
```jsx
return (
  <div>
    <h1>Hello</h1>
    <p>World</p>
  </div>
);
```

❌ **Incorrect:**
```jsx
return (
  <h1>Hello</h1>
  <p>World</p>
);
```

If you don’t want to add an extra `div`, you can use a **React Fragment**:
```jsx
return (
  <>
    <h1>Hello</h1>
    <p>World</p>
  </>
);
```

---

### **2. JSX Tags Must Be Properly Closed**
All tags must be self-closing if they don’t have children.

✅ **Correct:**
```jsx
<img src="image.jpg" alt="description" />
<br />
```

❌ **Incorrect:**
```jsx
<img src="image.jpg" alt="description">
<br>
```

---

### **3. JSX Attribute Names Use CamelCase**
Attributes follow camelCase naming conventions instead of HTML-style names.

✅ **Correct:**
```jsx
<div className="container"></div>
<input type="text" defaultValue="John" />
```

❌ **Incorrect:**
```jsx
<div class="container"></div>
<input type="text" defaultvalue="John" />
```

---

### **4. JSX Values Are Passed Using Curly Braces**
For dynamic values, use curly braces `{}` inside JSX.

✅ **Correct:**
```jsx
const title = "Welcome";
<h1>{title}</h1>
```

❌ **Incorrect:**
```jsx
const title = "Welcome";
<h1>title</h1>
```

---

### **5. JavaScript Expressions Are Allowed in JSX**
You can include JavaScript expressions inside `{}` but not statements.

✅ **Correct:**
```jsx
<h1>{1 + 1}</h1>
```

❌ **Incorrect:**
```jsx
<h1>{if (true) { return 'Hello'; }}</h1>
```

---

### **6. Use `className` Instead of `class`**
Since `class` is a reserved keyword in JavaScript, JSX uses `className`.

✅ **Correct:**
```jsx
<div className="button"></div>
```

❌ **Incorrect:**
```jsx
<div class="button"></div>
```

---

### **7. `style` Attribute Accepts an Object**
Inline styles in JSX are specified as an object, with keys in camelCase.

✅ **Correct:**
```jsx
<div style={{ color: 'red', fontSize: '20px' }}></div>
```

❌ **Incorrect:**
```jsx
<div style="color: red; font-size: 20px;"></div>
```

---

### **8. Reserved Words Must Be Escaped**
Some HTML attributes or values are reserved words in JavaScript and require escaping.

✅ **Correct:**
```jsx
<label htmlFor="name">Name</label>
```

❌ **Incorrect:**
```jsx
<label for="name">Name</label>
```

---

### **9. Comments in JSX Use Curly Braces**
To add comments in JSX, wrap them inside `{}`.

✅ **Correct:**
```jsx
return (
  <div>
    {/* This is a comment */}
    <h1>Hello</h1>
  </div>
);
```

❌ **Incorrect:**
```jsx
return (
  <div>
    // This is a comment
    <h1>Hello</h1>
  </div>
);
```

---

### **10. Conditional Rendering Uses Ternary or Logical Operators**
Use expressions like ternary operators or `&&` for conditional rendering.

✅ **Correct:**
```jsx
<h1>{isLoggedIn ? 'Welcome Back!' : 'Please Log In'}</h1>
{isAdmin && <button>Delete</button>}
```

❌ **Incorrect:**
```jsx
if (isLoggedIn) {
  <h1>Welcome Back!</h1>;
} else {
  <h1>Please Log In</h1>;
}
```

---

### **11. Avoid Using `this` Outside of Class Components**
In function components, avoid using `this`. Use state and hooks instead.

✅ **Correct (Function Component):**
```jsx
function App() {
  const name = "John";
  return <h1>Hello, {name}!</h1>;
}
```

❌ **Incorrect:**
```jsx
function App() {
  return <h1>Hello, {this.name}!</h1>;
}
```

---

### **12. Only Expressions or Components Can Be Returned**
JSX elements or fragments are required as the return value.

✅ **Correct:**
```jsx
return <div>Hello</div>;
```

❌ **Incorrect:**
```jsx
return "Hello";
```

---

### **13. Do Not Use `if` Directly in JSX**
Instead of `if`, use ternary operators or `&&` for conditional rendering.

✅ **Correct:**
```jsx
<div>{isActive && <p>Active</p>}</div>
```

❌ **Incorrect:**
```jsx
<div>{if (isActive) { <p>Active</p> }}</div>
```

---

### **14. Child Components Must Be Rendered**
A JSX tag without children should be self-closing unless it is wrapped around content.

✅ **Correct:**
```jsx
<MyComponent />
<MyComponent>Content</MyComponent>
```

❌ **Incorrect:**
```jsx
<MyComponent>
<MyComponent>Content</MyComponent
```

---

### **15. Escape Special Characters**
Use curly braces for special characters like `&`.

✅ **Correct:**
```jsx
<p>{'&'}</p>
```

❌ **Incorrect:**
```jsx
<p>&</p>
```

---

By following these rules, you can write syntactically correct and predictable JSX that works seamlessly with React.




## References
https://github.com/enaqx/awesome-react
Documentation of React : https://react.dev/
Why keys : https://react.dev/learn/rendering-lists