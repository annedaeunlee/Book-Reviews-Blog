import React from "react";
import "./ItemsContainer.css";
import ListItem from "../ListItem/ListItem";

function ItemsContainer() {
  return (
    <div className="ItemsContainer">
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default ItemsContainer;
