import React from "react";
import "./correct.css";
function Correct(props) {
  return <div className="correct-answer">Correct Answers: {props.correct}</div>;
}

export default Correct;
