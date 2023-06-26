import React from "react";
import "./ListItem.css";
import Thumbnail from "./Thumbnail/Thumbnail";
import ItemName from "./ItemName/ItemName";
import "./ListItem.css";
import BookPage from "../pages/BookPage/BookPage";
import { Routes, Route, useNavigate } from "react-router-dom";

function ListItem(props) {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("Click!");
    console.log(props.id);
    navigate("/" + props.id);
  };

  return (
    <div className="ListItem" onClick={onClick}>
      <Thumbnail />
      <ItemName title={props.title} author={props.author} />
    </div>
  );
}

export default ListItem;
