const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cshirtSchema = Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }
})

const cshirt = mongoose.model('cshirt', cshirtSchema)

module.exports = cshirt