//  import { readFileSync } from 'fs'
const fs = require("fs");

// console.log('Hello')

// How to Read a file
const data = fs.readFileSync("f1.txt");

console.log("This is f1-> " + data);

// read , write , update or append , delete ,rename ,
// Copy and paste a file

// fs.writeFileSync("f2.txt", "This is updated data for F2");
// console.log('File written')

// append

fs.appendFileSync('f2.txt' , ' Hello')

console.log('File Appended')

// delete a file

// fs.unlinkSync('f3.txt')

console.log('File deleted')

// rename

// fs.renameSync('f4.txt' , 'newFile.txt')


// FS module for Directories

// Create , Delete a directory

//  fs.mkdirSync('myDirectory')

// fs.mkdirSync('myDirectory2')



// check if some directory of file exists

const doesExist = fs.existsSync('f1.txt')

console.log(doesExist)












