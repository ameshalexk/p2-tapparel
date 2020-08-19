const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const vegetableSchema = new Schema({
    name: { type: String, required: true },
    isGreen: Boolean
}, { timestamps: true });

//  Create Model from our Schema
const Vegetable = mongoose.model('Vegetable', vegetableSchema);

// Export Vegetable Model
module.exports = Vegetable;
