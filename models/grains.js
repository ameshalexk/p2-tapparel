const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const grainSchema = new Schema({
    name: {type: String, required: true},

}, {timestamps: true});

//Create Model
const Grain = mongoose.model('Grain', grainSchema);

module.exports = Grain;