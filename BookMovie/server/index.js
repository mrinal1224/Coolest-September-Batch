const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')





app.listen(8082 , ()=>{
    console.log('Server Running on port 8082')
})