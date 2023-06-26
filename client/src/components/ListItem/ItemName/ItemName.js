import React from "react";
import "./ItemName.css";

function ItemName(props) {
  return (
    <div>
      <div className="ItemTitle">
        {props.title.substring(0, 20)} {props.title.length >= 20 && "..."}
      </div>
      <div className="ItemAuthor">
        {props.author.substring(0, 20)} {props.author.length >= 20 && "..."}
      </div>
    </div>
  );
}

export default ItemName;
