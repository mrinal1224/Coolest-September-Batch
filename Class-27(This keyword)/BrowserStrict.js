'use strict'

// 1. global case

console.log(this) // window

function getValue(){
    console.log(this)
}

getValue() // undefined


let obj1 = {
    name : 'Adam',
    age : 24,

    fn : function(){
        console.log(this)
    }
}

obj1.fn()

let obj2 = {
    name : 'Adam',
    age : 24,
    fn1 : function(){
         function fn2(){
            console.log(this)
         }
          fn2()
    }

} 

obj2.fn1()