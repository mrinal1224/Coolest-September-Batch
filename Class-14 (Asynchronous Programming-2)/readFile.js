 const fs = require('fs')

// fs.readFile('f1.txt', cb)

// function cb(err, data) {
//     if(err) {
//         console.log(err)
//     }else {
//         console.log("This is File 1 data -> " + data)
//     }
// }

// read a File with Promise

let promisReadFile = fs.promises.readFile('f4.txt')
console.log(promisReadFile)

// then and catch

promisReadFile.then(function(data){
    console.log("this is File Data -> " + data)
})

promisReadFile.catch(function(err){
    console.log("this is error statement -> " + err)
})

