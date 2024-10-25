## Agenda

Todays Agenda:

- Lexical Scope
- Scope chaining
- Closures

But before moving forward, there are some prerequisites that I expect you all to know. So the first thing that you must know is the execution context.

Prerequisite:

- Execution Context


---

title: Revision of Execution Context
description:
duration: 720
card_type: cue_card

---

Let me just create a new file. I'll just call this test.js. Inside this test.js. Let me just explain the execution context once.

```javascript=
console.log(a)
var a = 10

function test(){
    console.log('This is a test function')
}
test();
```

**[Ask the learners]**
If I try to console log A before initializing the value A? What do you think the output should be?

This will run, The output will be undefined

Now if I move the function call before initialiing the function

```javascript=
console.log(a)
var a = 10

test();

function test(){
    console.log('This is a test function')
}
```

If I try to invoke this function before declaring this, before declaring this, then what should be the output?

So if I now run this code, so you see the function still runs. There is no undefined or there is no error or something like that, it still runs. Although I have defined this function later and I'm calling this earlier. But still this function runs.

But this behavior is not acceptable when you do this with a variable. And to understand this behavior, to understand this behavior, we need to have the knowledge of execution context.

![](https://hackmd.io/_uploads/B1hu9WsR2.png)

If we are clear with how this execution context is working, so then we can move to this topic. That is lexical scope


Before moving to lexical scope, let's just write some code and let's just see some behavior. That how JavaScript behaves in all of these cases. So I'll go into the script JS file. I've created this and now we can try something.

```javascript=
var a = 20

function parent(){
    console.log(a);
}

parent()
```


Now what will be the output of the following code?

You clearly see 20. Okay, but why this is happening? we have defined this variable outside of this parent function, right? Any reasons for this?

So if you see this variable is actually a global variable. So this is a global variable and this particular global variable can be accessed anywhere. Can be accessed anywhere inside this particular script.

I'll create another function inside this parent I'll call this child.

```javascript=
function parent(){
   var a = 20
   function child(){
       console.log(a);
   }
   child()
}

parent()
```

Now if I call parent() function, what will be the output:

Again I see 20. But now this variable A is not residing in the global scope. It is in its parent function scope.

```javascript=
function parent(){
    var a = 20
    function child(){
        console.log(a);

        function child2(){
            console.log(a)
        }
        child2()
    }
    child()

}

parent()
```

Now what will be the output of the following code?

20, 20, So you see, whatever functions you are writing inside this parent function, they have the access to this A variable.

Now if I define the variable in child2()

```javascript=
function parent(){
    function child(){
        console.log(a);

        function child2(){
            var a = 20;
            console.log(a)
        }
         child2()
    }
    child()
}


parent()
```

Now what will be the output of the following code?

we have an error. A is not defined for line seven. A is inside this function scope, and this cannot be accessed outside.

This is the simple example of lexical scope that Every Nested function will have access to its parent's properties or variables and they will be able to work with them and the scope that is formed is lexical scope.


![](https://hackmd.io/_uploads/Bk_ZiGoR2.png)

All the children function will have access to its parent. So a particular child will have access to all of its parents that are up in the hierarchical order. So that is actually known as your lexical scope.

And the chain that forms from one child to another child to its parent like that, that chain is known as your scope chain.



Lets say we are trying to access a non existent variable named b.

```javascript=
function parent(){
    function child(){
        console.log(a);

        function child2(){
            var a = 20;
            console.log(b)
        }

        child2()
    }
    child()
}

parent()
```

This parent function doesn't have anything as B. So basically when this kind of scenario happens that if we are not able to find the value in any of the lexical scope, then what happens is the first global execution context actually points to null container.

This starts pointing to null container because B is not here. And as soon as this starts pointing to a null container, this will throw you an error that B is not defined.


**Lexical Scope:**

Lexical scope is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function

Every Nested function will have access to its parent's properties or variables and they will be able to work with them and the scope that is formed is lexical scope.
the functions may access all variables from their parent scopes up to the global scope, but no scope may access any variables from the functions defined inside it.


Now we can move to closures. So what if I tell you that you already know 90% of closures, Because lexical scope and scope chaining is basically the 90% of closures only. There is just one slight difference that is there and that we have to see.

Let's just write a very simple code:

```javascript=
function parent(){
    var a = 10;
    function child(){
        console.log(a)
      }
    return child
   
}

let functionReceived = parent()
console.log(functionReceived)
```

So if you just console log this function received variable, you'll be able to see this. In console, we can see the function being logged.

Why that is happening? Because what you have done over here is when you are calling this parent function you are actually returning this child function and when you have called this parent function you have received the child function inside this variable because you have returned this, right? And now when you console log this you are seeing the definition of this function because this is just simply getting returned .

So now if I want to call the function, what will be the output?

```javascript=
function parent(){
    var a = 10;
    function child(){
        console.log(a)
        return child
    }
}
let functionReceived = parent()
console.log(functionReceived)

functionReceived()

```

If I run this code, you will see 10 as your output. So you are still able to access the value ten. although you have already called the parent function, So this behavior is actually a closure.

A closure is a function that has been binded with its lexical scope. A small definition of closure is:

A closure is a function which is Binded with it's lexical Environments no matter if you Return and call it outside it will still have access to the properties of its parents.

I'll change this code a little bit. Let me just change this code. I'll again have another nested function, child two over here. And let me just create one variable over here. Let's say, let b is 20 and I want to return this child to from here.

```javascript=
function parent(){
    var a = 10;
    function child(){
        var b = 20;
        console.log(a)

        function child2(){
            console.log(a+b)
        }
        return child2
    }
    return child
}
let functionReceived = parent()
console.log(functionReceived)

let child2Recieved = functionReceived()
child2Recieved()
```

Now you see 10, 30 is the output. So now you know that this child two also has access to its parent. It has access to the child as well. It has access to its parent as well.


Now lets write 1 more code:

```javascript=
function parent(){
    var a = 10;
    function child1(){
        console.log(a)
    }
    return child1
}

let child1Recieved = parent()

child1Recieved()
```

We are getting 10 as the output, But why we are getting ten?

Although when you call a function, the execution context is destroyed. So we should not have values inside a function right now. But this is where the concept of closure comes into picture that every function, every function that is inside a parent function will always have access to its lexical scope, will be always bound in with its lexical scope.

So no matter what if you are calling this inside or no matter what, if you are calling this outside, it will always have access to the values that are defined inside its parent function.



Similarly If I create another function again.

```javascript=
function parent(){
    var a = 10;
    function child1(){
        var b = 20;

        function child2(){
            console.log(a+b)
        }
        return child2
    }
    return child1
}

let child1Recieved = parent()

let child2Recieved = child1Recieved()

child2Recieved()
```

Then it should be 30. Because both the values are inside a closure. One closure will be found for child one, one closure will be found for parent.

Whatever is outside, whatever is up the order, that is its lexical environment.

Now lets make a small change to the code and reassign the var b after executing the code:

```javascript=
function parent(){
    var a = 10;
    function child1(){
        var b = 20;

        function child2(){
            console.log(a+b)
        }
        b = 120;
        return child2
    }

    return child1
}

let child1Recieved = parent()

let child2Recieved = child1Recieved()

child2Recieved()
```

Now if I run this code so now again we see 130, because in closure b will be 120.
