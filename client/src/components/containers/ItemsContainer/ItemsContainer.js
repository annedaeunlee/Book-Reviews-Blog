import "./ItemsContainer.css";
import ListItem from "../../ListItem/ListItem";
import axios from "axios";
import React, { useState, useEffect } from "react";

function ItemsContainer(props) {
  return (
    <div className="ItemsContainer">
      {props.books.map((book) => (
        <ListItem
          key={book.book_id}
          id={book.book_id}
          title={book.title}
          author={book.author}
        />
      ))}
    </div>
  );
}

export default ItemsContainer;
