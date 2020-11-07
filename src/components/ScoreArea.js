import React from "react";
import Correct from "./Correct.js";
import Incorrect from "./Incorrect.js";
import "./scorearea.css";
function ScoreArea(props) {
  return (
    <div className="score-area">
      <Correct correct={props.correct} />
      <Incorrect incorrect={props.incorrect} />
    </div>
  );
}

export default ScoreArea;
