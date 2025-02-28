const express = require('express')

const app = express()

app.get('/', (req , res)=>{
    res.send('Hello from Scaler Academy')
})


app.get('/about' , (req , res)=>{
    res.send('I am the About Page')
})


app.get('/contact' , (req , res)=>{
    res.send('I am the Contact page')
})


app.listen(8005 , ()=>{
    console.log(`Server Started on port 8005`)
})











