const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')
const userRoutes = require('./routes/userRoutes')
const movieRoutes = require('./routes/movieRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const showRoute = require('./routes/showRoutes')
const bookingRoute = require('./routes/bookingRoute')
const cors = require('cors')
app.use(cors({ origin: '*' })); // Allow all origins (for development)



app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/theatre', theatreRoutes)
app.use('/api/shows' , showRoute )
app.use('/api/bookings' , bookingRoute )





app.listen(8082 , ()=>{
    console.log('Server Running on port 8082')
})