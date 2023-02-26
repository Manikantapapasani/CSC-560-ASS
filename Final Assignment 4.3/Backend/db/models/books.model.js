const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
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

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book }