import React from "react";
import "./ListItem.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import ItemName from "../ItemName/ItemName";
import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="ListItem">
      <Thumbnail />
      <ItemName title={props.title} author={props.author} />
    </div>
  );
}

export default ListItem;
