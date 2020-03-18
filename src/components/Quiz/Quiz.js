import React, { Component } from "react";
import "./Quiz.css";

// Page that renders the quiz for determining political preferences and connecting with an appropriate electoral candidate

export default class Quiz extends Component {
    
    render() {
        let pageData = this.props.pageData;
        let issuesarray = pageData.issuesarray;
        for (var i = 0; i < issuesarray.length; i++) {
            console.log(issuesarray[i]);
            return (
            <div className="row">
                <div className="twelve columns collapsed content-container">
                    <div id="issue-name">
                    {issuesarray[i].name}
                    </div>
                    <img src={issuesarray[i].icon} className="img-icon" alt="icon"/>
                    <div id="questions-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div id="quiz-question">
                        {issuesarray[i].question}
                        </div>
                        <br></br>
                    </div>
                    <div id="answers-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        <div>
                            <input type="radio" name="yes-choices"></input>
                            <label for="yes-choices">{issuesarray[i].side_yes[0]}</label>
                        </div>
                        <div>
                            <input type="radio" name="yes-choices"></input>
                            <label for="yes-choices">{issuesarray[i].side_yes[1]}</label>
                        </div>
                        <div>
                            <input type="radio" name="yes-choices"></input>
                            <label for="yes-choices">{issuesarray[i].side_yes[2]}</label>
                        </div>
                        <div>
                            <input type="radio" name="no-choices"></input>
                            <label for="no-choices">{issuesarray[i].side_no[0]}</label>
                        </div>
                        <div>
                            <input type="radio" name="no-choices"></input>
                            <label for="no-choices">{issuesarray[i].side_no[1]}</label>
                        </div>
                        <div>
                            <input type="radio" name="no-choices"></input>
                            <label for="no-choices">{issuesarray[i].side_no[2]}</label>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }
}

// counting variable for iterating through the quiz