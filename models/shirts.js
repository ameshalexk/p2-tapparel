const mongoose = require('mongoose');

const shirtSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    description:  { type: String },
    img:  { type: String },
    price:  { type: Number, min: 1},
    qty:  { type: Number, min: 1 },
    
}, {timestamps: true});

const Shirt = mongoose.model('Shirt', shirtSchema);

module.exports = Shirt;