const fs = require('fs')

// Read a file through fs module

console.log('Start')

let data = fs.readFileSync('./f1.txt')

console.log("Data from F1 File -> " + data)

let data2 = fs.readFileSync('./f2.txt')

console.log("Data from F2 File -> " + data2)

let data3 = fs.readFileSync('./f3.txt')

console.log("Data from F3 File -> " + data3)

console.log("end")