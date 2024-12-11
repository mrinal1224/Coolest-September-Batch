// non-strict mode - Browser

console.log(this) // 1.globally

// 2. functions 

function getValue(){
    console.log(this)
}

getValue() // 2. functions


let obj1 = {
    name : 'Adam',
    age : 24,
    fn1 : function(){
        console.log(this)
    }

} // 3.using it inside obj with a method

obj1.fn1()


let obj2 = {
    name : 'Adam',
    age : 24,
    fn1 : function(){
         function fn2(){
            console.log(this)
         }
         return fn2
    }

} // 4. function inside a

const fn2Varibale = obj2.fn1()
console.log(fn2Varibale)
fn2Varibale()




