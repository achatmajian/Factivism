import React, { Fragment } from "react";
import "./Quiz.css";

const Quiz = props => (
    <Fragment>
      <div className="question"><h3>Question Goes Here</h3></div>
      <div className="quiz-choices">
        <ul>
          <div>
            <input type="radio" id="choice1" name="quiz-choices"></input>
            <label for="choice1">Strongly Agree</label>
          </div>
          <div>
            <input type="radio" id="choice2" name="quiz-choices"></input>
            <label for="choice2">Agree</label>
          </div>
          <div>
            <input type="radio" id="choice3" name="quiz-choices"></input>
            <label for="choice3">Indifferent</label>
          </div>
          <div>
            <input type="radio" id="choice4" name="quiz-choices"></input>
            <label for="choice4">Disagree</label>
          </div>
          <div>
            <input type="radio" id="choice5" name="quiz-choices"></input>
            <label for="choice5">Strongly Disagree</label>
          </div>
        </ul>
        </div>
    </Fragment>
);

export default Quiz;