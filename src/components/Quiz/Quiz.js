import React, { Component } from "react";
import "./Quiz.css";

// Page that renders the quiz for determining political preferences and connecting with an appropriate electoral candidate

export default class Quiz extends Component {
    state = {
        i : 0
    };
    
    pageData = this.props.pageData;
    issuesarray = this.props.pageData.issuesarray;

    goForward = () => {
            console.log("Forward");
            console.log( this.state.i );
            this.setState({ i: this.state.i + 1})
        };
        goBack = () => {
            console.log("Back");
            this.setState({ i:  this.state.i  - 1 })
        };
    render() {
        
        let i = this.state.i;
        let issuesarray = this.props.pageData.issuesarray;
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
            
            <div className="row">
                <div className="quiz-buttons-row">
                    <button type="button" className="btn btn-primary" onClick={this.goForward} >Next</button>
                    <button type="button" className="btn btn-primary" onClick={this.goBack}>Previous</button>
                </div>
            </div>
            </div>
            )
        }
}

// counting variable for iterating through the quiz