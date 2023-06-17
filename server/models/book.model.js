const sql = require("../services/db.js");

// constructor
const Book = function (book) {
    this.title = book.title;
    this.author = book.author;
    this.publication_year = book.publication_year;
    this.description = book.description;
    this.genre = book.genre;
    this.cover_image = book.cover_image;
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

Book.create = (newBook, result) => {
    sql.query("INSERT INTO Book SET ?", newBook, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newBook });
    });
  };

module.exports = Book;