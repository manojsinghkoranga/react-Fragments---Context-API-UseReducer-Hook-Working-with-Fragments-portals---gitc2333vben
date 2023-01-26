import React from "react";

const ListItems = (props) => {
  return <li key={props.valuex} id={`list${props.valuex}`} className="items">Hello the value is {props.valuex}</li>;
};
export default ListItems;