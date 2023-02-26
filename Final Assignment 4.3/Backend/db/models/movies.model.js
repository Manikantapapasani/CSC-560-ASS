const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    director: {
        type: String,
        required: false,
        minlength: 0,
        trim: true
    },
    length: {
        type: String,
        required: false,
        minlength: 0,
        trim: true
    },
    myRating: {
        type: String,
        required: false,
        minlength: 0,
        trim: true
    },
    description: {
        type: String,
        required: false,
        minlength: 0,
        trim: true
    }
})

const Movie = mongoose.model('Movie', MovieSchema);

module.exports = { Movie }