import React from "react";
import "./move.css";

function Move(props) {
  let disabledPrevious = true;
  let disabledNext = false;
  console.log(props.current);
  if (props.current > 0) {
    disabledPrevious = false;
  }
  if (props.current === props.totalMcq) {
    disabledNext = true;
  }

  return (
    <div className="move">
      <button
        value="previous"
        disabled={disabledPrevious}
        onClick={props.handleMove}
      >
        Previous
      </button>
      <button disabled={disabledNext} value="next" onClick={props.handleMove}>
        Next
      </button>
    </div>
  );
}

export default Move;
