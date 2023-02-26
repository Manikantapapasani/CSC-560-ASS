const express = require('express');
const app = express();
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');

const { Movie, Book, Hobby } = require('./db/models');

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.get('/movies', (req,res) => {
    Movie.find({}).then((movies) => {
        res.send(movies);
    })
})

app.get('/movies/:id', (req,res) => {
    Movie.findOne({
        _id: req.params.id
    }).then((movie) => {
        res.send(movie);
    })
})

app.post('/movies', (req,res) => {
    let title = req.body.title;
    let director = req.body.director;
    let length = req.body.length;
    let myRating = req.body.myRating;
    let description = req.body.description;

    let newMovie = new Movie({
        title,
        director,
        length,
        myRating,
        description
    })

    newMovie.save().then((movieDoc) => {
        res.send(movieDoc);
    })
})

app.patch('/movies/:id', (req,res) => {
    Movie.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({message: "Updated successfully!",});
    })
})

app.delete('/movies/:id', (req,res) => {
    Movie.findOneAndRemove({
        _id: req.params.id
    }).then((removedMovieDoc) => {
        res.send(removedMovieDoc);
    })
})

app.get('/books', (req,res) => {
    Book.find({}).then((books) => {
        res.send(books);
    })
})

app.get('/books/:id', (req,res) => {
    Book.findOne({
        _id: req.params.id
    }).then((book) => {
        res.send(book);
    })
})

app.post('/books', (req,res) => {
    let title = req.body.title;
    let author = req.body.author;
    let myRating = req.body.myRating;
    let description = req.body.description;

    let newBook = new Book({
        title,
        author,
        myRating,
        description
    })

    newBook.save().then((bookDoc) => {
        res.send(bookDoc);
    })
})

app.patch('/books/:id', (req,res) => {
    Book.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({message: "Updated successfully!",});
    })
})

app.delete('/books/:id', (req,res) => {
    Book.findOneAndRemove({
        _id: req.params.id
    }).then((removedBookDoc) => {
        res.send(removedBookDoc);
    })
})

app.get('/hobbies', (req,res) => {
    Hobby.find({}).then((hobbies) => {
        res.send(hobbies);
    })
})

app.get('/hobbies/:id', (req,res) => {
    Hobby.findOne({
        _id: req.params.id
    }).then((hobby) => {
        res.send(hobby);
    })
})

app.post('/hobbies', (req,res) => {
    let title = req.body.title;
    let indoorOutdoor = req.body.indoorOutdoor;

    let newHobby = new Hobby({
        title,
        indoorOutdoor
    })

    newHobby.save().then((hobbyDoc) => {
        res.send(hobbyDoc);
    })
})

app.patch('/hobbies/:id', (req,res) => {
    Hobby.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.send({message: "Updated successfully!",});
    })
})

app.delete('/hobbies/:id', (req,res) => {
    Hobby.findOneAndRemove({
        _id: req.params.id
    }).then((removedHobbyDoc) => {
        res.send(removedHobbyDoc);
    })
})

app.listen(3000, () => {
    console.log( "server is listening on port 3000")
})