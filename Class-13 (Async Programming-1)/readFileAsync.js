const fs = require('fs')

console.log("start")

fs.readFile('f1.txt' , function(err , data){
   if(err){
    console.log(err)
   }

   console.log('Data from File F1-> ' + data)
})

fs.readFile('f2.txt' , function(err , data){
    if(err){
     console.log(err)
    }
 
    console.log('Data from File F2-> ' + data)
 })


 fs.readFile('f3.txt' , function(err , data){
    if(err){
     console.log(err)
    }
 
    console.log('Data from File F3-> ' + data)
 })

console.log("end")