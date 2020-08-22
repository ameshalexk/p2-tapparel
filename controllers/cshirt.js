const express = require('express')
const cshirt = express.Router()
const Cshirt = require('../models/cshirt.js')
const Custom = require('../models/logo.js')

const isAuthenticated = (req, res, next) => {
    if (req.session.currentUser) {
      return next()
    } else {
      res.redirect('/sessions/new')
    }
  }

//Index
cshirt.get('/',isAuthenticated, (req, res) => {
    // console.log(req.session.currentUser);
    Cshirt.find({}, (error, allcshirt) => {
        res.render('cshirt/Index', {
            cshirt: allcshirt,
            currentUser: req.session.currentUser
        })
    });

});


// New
cshirt.get('/new',isAuthenticated, (req, res) => {
    // console.log('sdsd');
    res.render('cshirt/New');
});

// Delete
cshirt.delete('/:id', isAuthenticated,(req, res) => {
    Cshirt.findByIdAndRemove(req.params.id, (error, cshirt) => {
        res.redirect('/cshirt');
    });
});

// UPDATE
cshirt.put('/:id', (req, res) => {
    Cshirt.findByIdAndUpdate(req.params.id, req.body, { new: true }, (error, updatedModel) => {
        res.redirect('/cshirt');
    });
});

// Create
cshirt.post('/', (req, res) => {
    Cshirt.create(req.body, (error, createdcshirt) => {
        // Once created - respond to client
        res.redirect('/cshirt');
    });
});

// Edit 
cshirt.get('/:id/edit', isAuthenticated, (req, res) => {
    Cshirt.findById(req.params.id, (err, foundcshirt) => {
        res.render('cshirt/Edit', {
            cshirt: foundcshirt
        })
    });
});

// Patch
cshirt.patch('/:id',isAuthenticated, (req, res)=>{
    Cshirt.findByIdAndUpdate(req.params.id, req.body, (error, updatedItem) => {
        res.redirect("/cshirt/")
    }   
    )
    
});

// Show
cshirt.get('/:id', isAuthenticated,(req, res) => {
    Cshirt.findById(req.params.id, (error, foundcshirt) => {
        let logos
        Custom.find({}, (error, allLogos)    => {
           logos = allLogos
           res.render('cshirt/Show', {
            cshirt: foundcshirt,
            logos: logos
        });
        }); 
    });
}); 



module.exports = cshirt