import React, { Component } from "react";
import QuizArea from "./QuizArea";
import ScoreArea from "./ScoreArea";
import dataSet from "../Api/dataSet";
import Move from "./Move";

export class Questionaire extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      isFinished: false,
      correct: 0,
      incorrect: 0,
      dataSet: dataSet,
      clicked: false,
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }
  handleAnswer(choice) {
    if (!this.state.clicked) {
      if (choice === this.state.dataSet[this.state.current].correct) {
        this.setState({
          correct: this.state.correct + 1,
        });
      } else {
        this.setState({
          incorrect: this.state.incorrect + 1,
        });
      }
      this.setState({
        clicked: !this.state.clicked,
      });
    }
  }
  handleMove(e) {
    if (e.target.value === "previous") {
      this.setState({
        current: this.state.current - 1,
      });
    } else if (e.target.value === "next") {
      this.setState({
        current: this.state.current + 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h2 style={{ color: "white" }}>Welcome to Our JavaScript Quiz</h2>
        <QuizArea
          dataSet={this.state.dataSet[this.state.current]}
          handleAnswer={this.handleAnswer}
        />
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
        <Move
          handleMove={this.handleMove}
          current={this.state.current}
          totalMcq={this.state.dataSet.length - 1}
        />
      </div>
    );
  }
}

export default Questionaire;
