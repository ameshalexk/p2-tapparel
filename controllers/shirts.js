const express = require('express');
const router = express.Router();
const Shirt = require('../models/shirts.js');

// add routes
// Index
router.get('/', (req, res) => {
    Shirt.find({}, (error, allShirts) => {
        res.render('shirts/Index', {
            shirts: allShirts
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('shirts/New');
});

// Delete
router.delete('/:id', (req, res) => {
    Shirt.findByIdAndRemove(req.params.id, (error, shirt) => {
        res.redirect('/shirts');
    });
});

// UPDATE
router.put('/:id', (req, res) => {
    Shirt.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/shirts');
    });
});

// Create
router.post('/', (req, res) => {
    Shirt.create(req.body, (error, createdShirt) => {
        // Once created - respond to client
        res.redirect('/shirts');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    Shirt.findById(req.params.id, (err, foundShirt) => {
        res.render('shirts/Edit', {
            shirt: foundShirt
        })
    });
});

// Patch
router.patch('/:id', (req, res)=>{
    req.body.qty -= req.body.qtys
    Shirt.findByIdAndUpdate(req.params.id, req.body, (error, updatedItem) => {
        res.redirect("/shirts/")
    }   
    )
    
});

// Show
router.get('/:id', (req, res) => {
    Shirt.findById(req.params.id, (error, foundShirt) => {
        res.render('shirts/Show', {
            shirt: foundShirt
        });
    });
});

// export router
module.exports = router;