const fs = require('fs')
console.log('Start')

let promiseReadFile1 = fs.promises.readFile('f1.txt')
let promiseReadFile2 = fs.promises.readFile('f2.txt')
let promiseReadFile3 = fs.promises.readFile('f3.txt')

// For File 1
promiseReadFile1.then(function(data) {
    console.log('This is file 1 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

// For File 2
promiseReadFile2.then(function(data) {
    console.log('This is file 2 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

// For File 3
promiseReadFile3.then(function(data) {
    console.log('This is file 3 data -> ' + data)
}).catch(function(err) {
    console.log('This is Your Error -> ' + err)
})

console.log("End")