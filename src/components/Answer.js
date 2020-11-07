import React from "react";
import "./answer.css";
function Answer(props) {
  return (
    <div>
      <button
        className="buttons"
        onClick={() => props.handleAnswer(props.choice)}
      >
        {props.choice + 1}. {props.option}
      </button>
    </div>
  );
}

export default Answer;
