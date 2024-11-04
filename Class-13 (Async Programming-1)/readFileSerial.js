const fs = require('fs')

console.log("start")


function cb1(err , data){
    if(err){
     
        console.log(err)
    }

    console.log('data from File 1 -> '+ data)
    fs.readFile("f2.txt" , cb2)
}

function cb2(err , data){
    if(err){
     
        console.log(err)
    }

    console.log('data from File 2 -> '+ data)
    fs.readFile("f3.txt" , cb3)
}

function cb3(err , data){
    if(err){
     
        console.log(err)
    }

    console.log('data from File 3 -> '+ data)
    
}

fs.readFile("f1.txt" , cb1)






console.log("end")