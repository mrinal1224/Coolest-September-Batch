// console.log('Start')

// function test(){
//     console.log('Hello')
// }
// test()

// console.log('End')

console.log('Start')

function sayHello(){
    console.log("Hello")
} // 2-3 seconds


function sayBye(){
    console.log('Bye')
}


setTimeout(sayHello , 3000)
setTimeout(sayBye , 2000)
console.log('End')

