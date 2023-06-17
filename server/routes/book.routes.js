module.exports = app => {
    const books = require("../controllers/book.controller.js");

    var router = require("express").Router();

    router.get("/", books.findAll);

    router.post("/", books.create);

    router.delete("/:id", books.delete);

    router.put("/:id", books.update);

    app.use('/books', router);
};