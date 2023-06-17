const Book = require("../models/book.model.js");

// Retrieve all books from the database
exports.findAll = (req, res) => {
    Book.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving books."
            });
        else res.send(data);
    });
};

// Create and save a new book
exports.create = (req, res) => {

    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Book
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        publication_year: req.body.publication_year,
        description: req.body.description,
        genre: req.body.genre,
        cover_image: req.body.cover_image
    });

    // Save book in the database
    Book.create(book, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the book."
            });
        else res.send(data);
    });
};

// Delete a book with specific id
exports.delete = (req, res) => {
    Book.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found book with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete book with id " + req.params.id
          });
        }
      } else res.send({ message: `Book was deleted successfully!` });
    });
  };