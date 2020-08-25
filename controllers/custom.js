const express = require('express')
const custom = express.Router()
const Custom = require('../models/logo.js')
const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

//Index
custom.get('/',isAuthenticated, (req, res) => {

    Custom.find({}, (error, allLogos) => {
        res.render('custom/Index', {
            logos: allLogos,
            currentUser: req.session.currentUser
        })
    });

});


// New
custom.get('/new',isAuthenticated, (req, res) => {
    res.render('custom/New');
});

// Delete
custom.delete('/:id', isAuthenticated,(req, res) => {
    Custom.findByIdAndRemove(req.params.id, (error, Custom) => {
        res.redirect('/custom');
    });
});

// UPDATE
custom.put('/:id', (req, res) => {
    Custom.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/custom');
    });
});

// Create
custom.post('/', (req, res) => {
    Custom.create(req.body, (error, createdCustom) => {
        res.redirect('/custom');
    });
});

// Edit 
custom.get('/:id/edit', isAuthenticated, (req, res) => {
    Custom.findById(req.params.id, (err, foundCustom) => {
        res.render('custom/Edit', {
            logos: foundCustom
        })
    });
});

// Patch
custom.patch('/:id',isAuthenticated, (req, res)=>{
    Custom.findByIdAndUpdate(req.params.id, req.body, (error, updatedItem) => {
        res.redirect("/custom/")
    }   
    )
    
});

custom.get('/:id', isAuthenticated,(req, res) => {
    Custom.findById(req.params.id, (error, foundCustom) => {
        res.render('custom/Show', {
            logos: foundCustom,
            ciurl: req.query,
            bob: req
            
        });
    });
});

module.exports = custom