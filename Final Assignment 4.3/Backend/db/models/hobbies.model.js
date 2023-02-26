const mongoose = require('mongoose');

const HobbySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    indoorOutdoor: {
        type: String,
        required: false,
        minlength: 0,
        trim: true
    }
})

const Hobby = mongoose.model('Hobby', HobbySchema);

module.exports = { Hobby }