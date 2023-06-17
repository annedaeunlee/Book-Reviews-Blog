const sql = require("../services/db.js");

// constructor
const Book = function (book) {
    this.title = book.title;
    this.author = book.author
};

Book.getAll = result => {
    let query = "SELECT * FROM Book";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("Books: ", res);
        result(null, res);
    });
};

module.exports = Book;