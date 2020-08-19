const express = require('express');
const router = express.Router();
const Vegetable = require('../models/vegetables.js');

// add routes
// Index
router.get('/', (req, res) => {
    // Use Fruits model to get all Fruits
    Vegetable.find({}, (error, allVegetables) => {
        res.render('vegetables/Index', {
            veggies: allVegetables
        })
    });

});

// // New
router.get('/new', (req, res) => {
    res.render('vegetables/New');
});


// // Delete
// router.delete('/:id', (req, res) => {
//     // Delete document from collection
//     Fruit.findByIdAndRemove(req.params.id, (err, fruit) => {
//         res.redirect('/fruits');
//     });
// });

// // UPDATE
router.put('/:id', (req, res) => {
    req.body.isGreen = req.body.isGreen === "on" ? true : false;

    // Update the fruit document using our model
    Vegetable.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/vegetables');
    });
});


// // Create
router.post('/', (req, res) => {
    if (req.body.isGreen === "on") {
        req.body.isGreen = true;
    } else {
        req.body.isGreen = false;
    }
    // Use Model to create Fruit Document
    Vegetable.create(req.body, (error, createdVegetable) => {
        // Once created - respond to client
        res.redirect('/vegetables');
    });
});

// // Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        // render the edit view and pass it the found fruit
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    });
});

// // Show
router.get('/:id', (req, res) => {
    // Find the specific document
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        // render the Show route and pass it the foundVegetable
        res.render('vegetables/Show', {
            vegetable: foundVegetable
        });
    });
});

// export router
module.exports = router;