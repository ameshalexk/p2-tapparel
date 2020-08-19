const express = require('express')
const router = express.Router();
const Grain = require('../models/grains.js');

//Index
router.get('/', (req,res)=> {
    Grain.find({}, (error, allGrains)=> {
        res.render('grains/Index', {
            grains: allGrains
        })
    });
})

//New
router.get('/new', (req, res) => {
    res.render('grains/New');
});


// // Create
router.post('/', (req, res) => {
    // if (req.body.isGreen === "on") {
    //     req.body.isGreen = true;
    // } else {
    //     req.body.isGreen = false;
    // }
    // Use Model to create Fruit Document
    Grain.create(req.body, (error, createdGrain) => {
        // Once created - respond to client
        res.redirect('/grains');
    });
});


module.exports = router