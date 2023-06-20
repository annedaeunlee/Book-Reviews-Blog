import React from "react";
import "./ListItem.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import ItemName from "../ItemName/ItemName";
import "./ListItem.css";

function ListItem() {
  return (
    <div className="ListItem">
      <Thumbnail />
      <ItemName />
    </div>
  );
}

export default ListItem;
