// models/images.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema for our database
const imageSchema = new Schema({
    name: String,
    path: String,
    size: Number,
    date: { type: Date, default: Date.now }
});

// convert the schema into a Model
const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
