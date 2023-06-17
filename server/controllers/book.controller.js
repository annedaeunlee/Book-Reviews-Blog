const Book = require("../models/book.model.js");

// Retrieve all books from the database (with condition).
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
