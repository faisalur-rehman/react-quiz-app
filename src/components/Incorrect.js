import React from "react";
import "./incorrect.css";
function Incorrect(props) {
  return (
    <div className="incorrect-answer">Incorrect Answers: {props.incorrect}</div>
  );
}

export default Incorrect;
