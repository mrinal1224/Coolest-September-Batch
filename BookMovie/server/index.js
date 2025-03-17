const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const cors = require('cors')
app.use(cors({ origin: '*' })); // Allow all origins (for development)



app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)




app.listen(8082 , ()=>{
    console.log('Server Running on port 8082')
})