
# CSS Cascading, Specificity, Inheritance and Overflow


### Introduction

Before starting with the topic, let us understand the simple definition of *Priority and Specific*. These two words create a concept in CSS that is known as Specificity.

**Priority:** Suppose three tasks are to be done. All the tasks can be arranged based on the task that has to be done first. The task with the highest priority will be on the top.

**Specific:** Suppose you are diagnosed with fever then the doctor prescribes you with some medicines that are *particular* to the disease i.e., fever. 


### What is Cascading in CSS?

Cascade is defined as top-to-bottom flow.

*Example:* 
```css!
.h1{
    colour: red;
}
.h1{
    colour: blue;
}
```
The output will be blue because cascading always goes down therefore blue comes later therefore priority will be given to the later part.

**CSS Cascading involves Specificity and Inheritance which will be covered in this lecture.**



### Specificity

To understand specificity let's take an example.

**First**: Create an HTML file to understand specificity.
**Second**: Create an unordered list of let's say "fruits".

```htmlembedded!
<body>  
    <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Orange</li>
    </ul>
</body>
```

**Third**: Assign 'id' and 'class' to your unordered list.

```htmlembedded!
<body>
    <ul id = "fruits">
        <li>Apple</li>
        <li class ="favourite">Mango</li>
        <li>Orange</li>
    </ul>
</body>
```

**Fourth**: Using CSS, make the colour of the class "favourite" blue.

The Selector will be id i.e., "fruits" Inside this id select a list element and then a specific class i.e., "favourite".

```htmlembedded!
<style>
    ul#fruits li.favourite{
      color: blue;  
    }    
</style>
```

**Fifth**: Using CSS, change the colour of the unordered list to blue as well.

```htmlembedded!
<style>
    ul#fruits li.favourite{
      color: blue;  
    }    
    
    ul#fruits li{
        color: blue;
    }
</style>
```


What will happen if we change the colour of the unordered list to blue after changing the colour of class "favourite" to red?

```htmlembedded!
<style>
    ul#fruits li.favourite{
      color: red;  
    }    
    
    ul#fruits li{
        color: blue;
    }
</style>
```

--> The result will be that **"Mango" will be of red** colour and the rest list elements will be blue because it is using the **Specificity** property.
Hover over the selector `ul#fruits li` you will see "Selector Specificity: (1,0,2)".

Before understanding the Selector Specificity values: 



What if the style attribute is applied in the list tag with class = "favourite"?

```htmlembedded!
<body>
    <ul id = "fruits">
        <li>Apple</li>
        <li class ="favourite" style= "color: yellow;">Mango</li>
        <li>Orange</li>
    </ul>
</body>
```

--> The result will be that **the value of Mango will turn to "yellow"** and the rest of the list elements will remain blue because the style attribute does not get affected by the style tag.

### Understanding values in specificity

Specificity can have **four** values if the style attribute is also included.



| Style attribute | IDs | Classes | Elements |
| :--------: | :--------: | :--------: | :---------: |

#### How to count specificity?

The selector `ul#fruits li` has "Selector Specificity: (1,0,2)". But how?

There is 1 ID i.e., fruits. There is no class added in the selector. There are 2 elements in the selector: ul and li. Therefore the value will be (1,0,2).

Similarly, the value of the selector `ul#fruits li.favourite` is (1,1,2).

#### How does the Selector Specificity make sure what selector should be applied?

> Remove style attribute from the list element with class = "favourite".

By comparing both the Selector Specificity values box by box: we see the value of the selector `ul#fruits li.favourite` is (1,1,2) which means it has 1 class while the other selector has no class. Therefore, the `ul#fruits li.favourite` selector will be applied.



Arrange them from the least effective to the most effective selector.
1. `.test`
2. `h1.test`
3. `#try`
4. `h1`

--> **4<1<2<3** is the order.

Let's compare the values of each one of them.
1. `.test` - It has one class. Therefore, the value is (0,1,0).
2. `h1.test` - It has one class and one element. Therefore, the value is (0,1,1).
3. `#test` - It has one ID. Therefore, the value is (1,0,0).
4. `h1` - It has one element. Therefore, the value is (0,0,1).

**[Ask the learners]**

Calculate the value of the Selector Specificity of the following selector.
`#try ul div.test h2{}`

--> **(0,1,1,3)**

ID - #try
Class - .test
Element - ul, div, h2

| Style attribute | ID| Class|Element|
| :--------: | :--------: | :--------: | :-------: |
| 0| 1   | 1  |3|



Calculate the value of the Selector Specificity of the following selector.
`#try span img .test .main header`

--> **(0,1,2,3)**

ID - #try
Class - .test, .main
Element - span, img, header

| Style attribute | ID| Class|Element|
| :--------: | :--------: | :--------: | :-------: |
| 0| 1   | 2 |3|

> You can use [Keegan](https://https://specificity.keegan.st/) to calculate Specificity value.


### Keyword - `!important`

If the keyword !important is used then it follows the cascading rule regardless of the Specificity Value. Use this keyword only once in a selector. If it is used twice for the same selector then the Specificity rule will be followed.

#### Example

```css!
ul#fruits li.favourite{
      color: red;  
    }    
    
ul#fruits li{
      color: blue !important;
    }
```

All the list elements will turn into a blue colour regardless of the Specificity Value.

> Priority of Inline CSS will be more than Internal CSS and External CSS.

> The priorities of the External CSS file and Internal CSS file can be changed by following the cascading rule. That means, whatever comes later will be followed.


### CSS Inheritance

#### Definition
As the last names are inherited in a family same way inheritance works in CSS which inherits some property from the parent.

We will be looking at the four properties - **Default, Inherit, Initial and Unset**.

Let's take an example where we create an unordered list and add href to all the list elements:

```htmlembedded!
<ul>
    <li>Default <a href="">Link</a> Color </li>
    <li>Inherit <a href="">Link</a> Color </li>
    <li>Initial <a href="">Link</a> Color </li>
    <li>Unset <a href="">Link</a> Color </li>
</ul>
```

First, Let's assign classes to the three properties: Inherit, Initial and Unset.

```htmlembedded!
<ul>
    <li>Default <a href="">Link</a> Color </li>
    <li class = "class-1">Inherit <a href="">Link</a> Color </li>
    <li class = "class-2">Initial <a href="">Link</a> Color </li>
    <li class = "class-3">Unset <a href="">Link</a> Color </li>
</ul>
```

### Inherit Property

Inherit is defined as the properties inherited from the parent. The properties applied to the parent are inherited by the child. 

For example

```htmlembedded!
<style>
    div{
        color: blue;
    }
</style>
<body>
    <div>
        <h2>
            Heading
        </h2>
    </div>
</body>
```

The result will be that the heading tag will inherit the colour that is applied to the div element as it is the parent of the h2 tag.

If the parent is not specified then the parent will always be the body tag by default.

To understand it better, let's take "class-1" from our unordered list of inheritance properties and apply `color: inherit` to the anchor tag.

```css!
body{
    color: red;
}
.class-1 a{
    color: inherit;
}
```

The term inherit means that whatever the colour of the parent tag is **(the default colour of CSS is black in most browsers)**, will be applied to the anchor tag of class: class-1 as well.

### Initial Property

The initial property will always take the default properties.

```css!
body{
    color: red;
}
.class-1 a{
    color: inherit;
}
.class-2 a{
    color: initial;
}
```

The color of the class-2 anchor tag will take the default color i.e., black.

> There exists properties that cannot be inherited like display, and columns etc., You can check [w3schools](https://https://www.w3schools.com/cssref/css3_pr_columns.php) for more details on the properties.

### Unset property

Unset depends on the inherited value.
Unset checks if any properties in the body can be inherited will be inherited.

For example:

```css
body{
    color: red;
    display: inline;
}
.class-1 a{
    color: inherit;
}
.class-2 a{
    color: initial;
}
.class-3 a{
    color: unset;
}
```

### CSS Positioning:

#### What is CSS Positioning?

CSS Positioning refers to the techniques used to control the placement of HTML elements on a webpage. It allows precise positioning relative to their normal flow within the document.

The concept of positioning in CSS can be understood by  arrangement of players on a sports field. Imagine football or cricket field. 

**Think of a scenario in football:** you have a center forward positioned at one spot, and you'll find the center midfielder occupying another specific spot. This arrangement of players in different positions is scattered over the field.

Similarly, in CSS, positioning involves placing elements within a web page layout. Just as players are situated precisely on the field, web elements can be located using various CSS positioning techniques. 

Now that we know what is positioning in CSS. We will be now discussing types of position in CSS.



So, let's understand two types of position in CSS:
* **Absolute Position**
* **Relative Position**

Think about a table you have in front of you. Imagine you're looking straight down at the table. It's just a flat square surface, like the top of the table. This is the place where you might put things, like your phone or a cup of coffee.

What we're going to talk about is how you can move this "cell phone" around on the table in two different ways.


When we talk about moving the box around, we're talking about changing its position in these two main directions – X-Axis and Y-Axis. These two coordinates, X and Y, help us understand exactly where the box (or any object) is located on the table.

Let's say you start with the cell phone placed at a specific spot on the table. Now, you want to move it a bit. In CSS terms, this is done by specifying how many centimeters (like pixels) you want to move the box from its current position. 

For example, if you move the box 10 centimeters to the right. So the relative position of the cell phone from its starting point to ending point has changed by 10 cm.

If you are measuring the distance from the starting of the Table. The distance between starting of the table and the cell phone will be the absolute position.

![](https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/050/071/original/upload_189ab829bb663b192a1033cb2dbf5b52.png?1695317443)

So we can define in terms of CSS as:

* **Relative Position:** The element is positioned relative to its previous position.
* **Absolute Position:** The element is positioned absolutely to its parent container.


Now, that we know what is Relative and Absolute Positioning. Let's move forward by coding and understanding positions.


Now let's move to VS Code and write some code to understand it better.


**HTML Code:**

```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now lets target this 3rd box and apply position property on it. 

### Exercise 1

#### Problem Statement
Give **static** position value to box 3.

#### Solution
* we can give a separate id to the box3, say box_3.
* Now, in style tag, we can use position property and set the value as **static.**

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: static;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Static is the default position in which all the elements are positioned, so it will do nothing to the position of box3

There are 5 positions in CSS that we will talk about:

* static
* relative
* absolute
* fixed
* sticky

Now lets give it relative position.

### Exercise 2

#### Problem Statement
Give **relative** position value to box 3 and move it 20px.

#### Solution
* In style of box_3, we can use position property and set the value as **relative** along with top property as 20px.

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: relative;
            top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now, it will move 20 pixels from the top. We're instructing the box to move '20 pixels down from your original position at the top'.


> **Tip to instructor:** Use different-different values to explain relative value to learners and ask learners if they have any doubt or not.


Now lets give it absolute position.

### Exercise 3

#### Problem Statement
Give **absolute** position value to box 3 and move it 20px.

#### Solution
* In style of box_3, we can use position property and set the value as **absolute**.

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: absolute;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```


Now, we can see that box 4 has vanished but "box 4" could be positioned directly underneath "box 3", and because of the overlap, "box 4" might be hidden by "box 3".

If we want "box 4" to be visible and not hidden by "box 3", you might need to adjust the positioning of box 3 and give some top value as 100px.

```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: absolute;
            top: 100px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now, we can see it is moving down, so that means box3 is now trying to adjust with the window itself.

In this case, the element box3 is removed from the normal document flow. The other elements will behave as if that box3 is not in the document. No space is created for the element in the page layout. The values of left, top, bottom and right determine the final position of the box3.

Now box3 is not trying to move relative to its original position, it will try to move relative to the window, means from the entire top of the window it is taking 100px. 

Now lets understand what fixed position is.

**Fixed position:** 
* Fixed Position is basically when your Element will take a place with the Respect to the window and it will not move from there.
* Fixed-positioned element is "fixed" in a specific location on the screen, and it won't move when the user scrolls up or down the page. This can be useful for creating elements that should always be visible, like navigation bars or call-to-action buttons, regardless of where the user is on the page. 
* The element will maintain its position relative to the viewport's coordinates, providing a consistent visual reference point as the user interacts with the content.

### Exercise 4

#### Problem Statement
Give **fixed** position value to box 3 and fix it at the bottom of the scrollable page.

#### Solution
* In style of box_3, we can use position property and set the value as **fixed**.
* For fixing it to the bottom of the page, we can give right property as 4px and bottom as 1px.

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
            height: 4000px;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: fixed;
            right: 4px;
            bottom: 1px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now if we scroll the page, the box3 will be fixed at the bottom right of the page.


Now, lets understand sticky value:

**Sticky:**
* When an element is given a "position" value of "sticky," it acts like a relative-positioned element within its containing element until a certain scroll threshold is reached. Once the user scrolls beyond that threshold, the element becomes "stuck" in place and behaves like a fixed-positioned element, remaining visible on the screen. 
* In other words, a sticky element starts as part of the normal document flow, just like a relatively positioned element. As the user scrolls, the element follows its normal position until it reaches a designated point (usually when its top or bottom edge reaches a specific distance from the viewport's edge). At that point, it becomes "sticky" and remains fixed at that position while the rest of the content scrolls.

Lets go to the zomato website and see its navbar, here you can see when we scroll the page, this navbar is getting fixed at the top of the page.

So on reaching a particular value, sticky gets fixed.

### Exercise 5

#### Problem Statement
Give **sticky** position value to box 3 and fix it at the top of the scrollable page.

#### Solution
* In style of box_3, we can use position property and set the value as **sticky**.
* For fixing it to the top of the page, we can give top property as 0.

#### Pseudocode
```htmlembedded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Positioning</title>
    <style>
        .container {
            background-color: dodgerblue;
            height: 4000px;
        }

        .box {
            display: inline-block;
            height: 150px;
            width: 150px;
            background-color: tomato;
            margin: 10px;
        }
        
        #box_3 {
            position: sticky;
            top: 0;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box" id="box_3">3</div>
        <div class="box">4</div>
    </div>
</body>

</html>
```

Now if we scroll the page, the box3 will behave normally will it touches the top and them it becomes fixed to the top of the page.


## Cascading and Specificity Resources

- **Resources:**
     - [MDN Web Docs - Cascade and Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)
     - [CSS Tricks - Understanding CSS Cascade](https://css-tricks.com/what-you-should-know-about-css-cascade/)

- **Resources:**
     - [MDN Web Docs - Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
     - [CSS Tricks - Specifics on CSS Specificity](https://css-tricks.com/specifics-on-css-specificity/)


## Inheritance Resources

- **Resources:**
     - [CSS Inheritance, The Cascade And Global Scope: Your New Old Worst Best Friends](https://www.smashingmagazine.com/2016/11/css-inheritance-cascade-global-scope-new-old-worst-best-friends/)

## CSS Positioning Resources

1. [MDN Web Docs: CSS Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
