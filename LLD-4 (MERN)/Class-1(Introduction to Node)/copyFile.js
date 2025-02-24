const fs = require('fs')
const path = require('path')

// 

const srcFilePath = '/Users/admin/Desktop/Coolest September Batch/LLD-4 (MERN)/Class-1(Introduction to Node)/myDirectory/f8.txt'

const destFolderPath = '/Users/admin/Desktop/Coolest September Batch/LLD-4 (MERN)/Class-1(Introduction to Node)/myDirectory2'


const fileBasename = path.basename(srcFilePath)
console.log(fileBasename)

const newPath = path.join(destFolderPath, fileBasename )
console.log(newPath)

fs.copyFileSync(srcFilePath , newPath)

fs.unlinkSync(srcFilePath)

console.log('File Copied')








