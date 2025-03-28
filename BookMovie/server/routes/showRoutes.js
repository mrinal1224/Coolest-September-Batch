const router = require('express').Router();
const Show = require('../models/showModel');

// Add Show
router.post('/add-show',  async (req, res) => {
    try{
        const newShow = new Show(req.body);
        await newShow.save();
        res.send({
            success: true,
            message: 'New show has been added!'
        });
        // console.log(req.body, res.success, res.message);
    }catch(err){
        res.send({
            status: false,
            message: err.message
        })
    }
});

router.post('/get-all-shows-by-theatre',  async (req, res) => {
    try{
        const shows = await Show.find({theatre: req.body.theatreId}).populate('movie')
        res.send({
            success: true,
            message: "All shows fetched",
            data: shows
        });
        // console.log(req.body, res.data, shows)
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});


router.post('/delete-show', async (req, res) => {
    try{
        await Show.findByIdAndDelete(req.body.showId);
        res.send({
            success: true,
            message: 'The show has been deleted!'
        })
    }catch(err){
        res.send({
            status: false,
            message: err.message
        })
    }
})

// Update mshow
router.put("/update-show",  async (req, res) => {
    try{
        await Show.findByIdAndUpdate(req.body.showId, req.body);
        res.send({
            success: true,
            message: 'The show has been updated!'
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
})

// Get all theatres by movie which has some shows
router.post("/get-all-theatres-by-movie", async (req, res) => {
    try{
        const {movie, date} = req.body;
        // First get all the shows of the selected date
        const shows = await Show.find({movie, date}).populate('theatre');

        // Filter out the unique theatres now
        let uniqueTheatres = [];
        shows.forEach(show => {
            let isTheatre = uniqueTheatres.find(theatre => theatre._id === show.theatre._id);
            if(!isTheatre){
                let showsOfThisTheatre = shows.filter(showObj => showObj.theatre._id == show.theatre._id);
                uniqueTheatres.push({...show.theatre._doc, shows: showsOfThisTheatre});
            }
        });
        res.send({
            success: true,
            message: 'All theatres fetched!',
            data: uniqueTheatres
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

router.post('/get-show-by-id',  async (req, res) => {
    try{
        const show = await Show.findById(req.body.showId).populate('movie').populate('theatre');
        res.send({
            success: true,
            message: 'Show fetched!',
            data: show
        });
    }catch(err){
        res.send({
            success: false,
            message: err.message
        })
    }
});

module.exports = router;
