import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
function QuizArea(props) {
  return (
    <div>
      <Question question={props.dataSet.question} />
      <AnswerList
        options={props.dataSet.options}
        handleAnswer={props.handleAnswer}
      />
    </div>
  );
}

export default QuizArea;
