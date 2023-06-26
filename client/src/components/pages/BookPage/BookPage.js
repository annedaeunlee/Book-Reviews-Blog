import Navigation from "../../containers/Navigation/Navigation";
import Header from "../../containers/Header/Header";
import { useLoaderData } from "react-router-dom";
import React from "react";

function BookPage() {
  console.log("Reached here");
  const book = useLoaderData();
  return (
    <div className="Book">
      <Navigation />
      <Header />
      <div className="Title">
        {book.title.substring(0, 20)} {book.title.length >= 20 && "..."}
      </div>
      <div className="Author">
        {book.author.substring(0, 20)} {book.author.length >= 20 && "..."}
      </div>
      <div>TEXT HEH</div>
    </div>
  );
}

export default BookPage;
