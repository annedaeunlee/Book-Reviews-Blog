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

Book.getAll = (result) => {
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

Book.findById = (id, result) => {
  sql.query(`SELECT * FROM Book WHERE book_id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found book: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found book with the id
    result({ kind: "not_found" }, null);
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

Book.remove = (id, result) => {
  sql.query("DELETE FROM Book WHERE book_id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Book with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted book with id: ", id);
    result(null, res);
  });
};

Book.updateById = (id, book, result) => {
  sql.query(
    "UPDATE Book SET title = ?, author = ?, publication_year = ?, description = ?, genre = ?, cover_image = ? WHERE book_id = ?",
    [
      book.title,
      book.author,
      book.publication_year,
      book.description,
      book.genre,
      book.cover_image,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found book with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("Updated book: ", { id: id, ...book });
      result(null, { id: id, ...book });
    }
  );
};

module.exports = Book;
