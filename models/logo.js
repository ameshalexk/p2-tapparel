const mongoose = require('mongoose')
const Schema = mongoose.Schema

const logoSchema = Schema({
  name: { type: String, required: true },
  img: { type: String, required: true }
})

const Logo = mongoose.model('Logo', logoSchema)

module.exports = Logo