const express = require('express');
const router = express.Router();
const Shirt = require('../models/shirts.js');
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }
// add routes
// Index
router.get('/',isAuthenticated, (req, res) => {
    console.log(req.session.currentUser);
    Shirt.find({}, (error, allShirts) => {
        res.render('shirts/Index', {
            shirts: allShirts,
            currentUser: req.session.currentUser
        })
    });

});

// New
router.get('/new',isAuthenticated, (req, res) => {
    res.render('shirts/New');
});

//CUSTOM
router.get('/custom', (req, res) => {
    res.send('Custom Page - Work in progress');
})

// Delete
router.delete('/:id', isAuthenticated,(req, res) => {
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
router.get('/:id/edit', isAuthenticated, (req, res) => {
    Shirt.findById(req.params.id, (err, foundShirt) => {
        res.render('shirts/Edit', {
            shirt: foundShirt
        })
    });
});

// Patch
router.patch('/:id',isAuthenticated, (req, res)=>{
    req.body.qty -= req.body.qtys
    Shirt.findByIdAndUpdate(req.params.id, req.body, (error, updatedItem) => {
        res.redirect("/shirts/")
    }   
    )
    
});

// Show
router.get('/:id', isAuthenticated,(req, res) => {
    Shirt.findById(req.params.id, (error, foundShirt) => {
        res.render('shirts/Show', {
            shirt: foundShirt
        });
    });
});

// export router
module.exports = router;