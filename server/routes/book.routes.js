module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    // Retrieve all books
    router.get("/", books.findAll);

    router.post("/", books.create);

    app.use('/books', router);
};