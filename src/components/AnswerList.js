import React from "react";
import Answer from "./Answer";
function AnswerList(props) {
  const optionArray = [];
  for (let i = 0; i < props.options.length; i++) {
    optionArray.push(
      <Answer
        choice={i}
        option={props.options[i]}
        handleAnswer={props.handleAnswer}
      />
    );
  }

  return <div>{optionArray}</div>;
}

export default AnswerList;
