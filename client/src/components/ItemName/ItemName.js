import React from "react";
import "./ItemName.css";

function ItemName(props) {
  return (
    <div>
      <div className="ItemTitle">{props.title}</div>
      <div className="ItemAuthor">{props.author}</div>
    </div>
  );
}

export default ItemName;
