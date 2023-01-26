import React, { useState, useEffect, Fragment } from "react";
import '../styles/App.css';

import List from "./List";

const App = () => {
 
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);


  const onButtonClick = () => {
    const newArray = [];
    for(let i=1; i<=value; i++){
      newArray.push(i);
    }
   setList(newArray);
  };
 

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div id="main">

      <input id="input" onChange={onInputChange} />
      <button id="button" onClick={onButtonClick}>Click</button>
       <ul id="list">
      <List listx={list} />
      </ul>
    </div>
  );
};

export default App;
