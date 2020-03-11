import React, { Fragment } from "react";
import "./Quiz-Questions.css";

const quizQuestion1 = props => (
    <Fragment>
      <div className="question"><h3>What is your stance on abortion?</h3></div>
      <div className="quiz-choices">
        <ul>
          <div>
            <input type="radio" id="choice1" name="quiz-choices"></input>
            <label for="choice1">Pro-life</label>
          </div>
          <div>
            <input type="radio" id="choice2" name="quiz-choices"></input>
            <label for="choice2">Pro-life, but allow in cases of rape, incest, or danger to the mother or child</label>
          </div>
          <div>
            <input type="radio" id="choice3" name="quiz-choices"></input>
            <label for="choice3">Pro-life, and I also oppose abortion for victims of rape and incest</label>
          </div>
          <div>
            <input type="radio" id="choice4" name="quiz-choices"></input>
            <label for="choice4">Pro-choice"</label>
          </div>
          <div>
            <input type="radio" id="choice5" name="quiz-choices"></input>
            <label for="choice5">Pro-choice, and providing birth control, sex education, and more social services will help reduce the number of abortions</label>
          </div>
          <div>
            <input type="radio" id="choice6" name="quiz-choices"></input>
            <label for="choice5">Pro-choice.  I don't agree with it, but the government has no right to ban it.</label>
          </div>
          <div>
            <input type="radio" id="choice7" name="quiz-choices"></input>
            <label for="choice5">Pro-choice, but ban after the first three months.</label>
          </div>
        </ul>
        </div>
    </Fragment>
);

export default QuizQuestion1;