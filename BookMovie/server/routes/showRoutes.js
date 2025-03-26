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

    }catch(err){
        res.send({
            status: false,
            message: err.message
        })
    }
});

// Update Show
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

// Delete Show

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

// next class

// get shows by Theatres

// get shows by Movies


// Get all Theatres by Movie

// get show by id