import React from "react";
import { Components } from "react";
import "./FunctionClick.css";

function FunctionClick() {

  function handleClick() {
    console.log("Button clicked");
  }
  return (
    <div>
      <button onClick={handleClick} className="glow-on-hover">Click</button>
    </div>
  );
}

export default FunctionClick;