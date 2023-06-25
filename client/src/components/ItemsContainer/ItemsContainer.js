import "./ItemsContainer.css";
import ListItem from "../ListItem/ListItem";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ItemsContainer() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const { data } = await axios.get("http://localhost:5000/books/");
    const books = data;
    setBooks(books);
    console.log(books);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="ItemsContainer">
      {books.map((book) => (
        <ListItem key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
}

export default ItemsContainer;
