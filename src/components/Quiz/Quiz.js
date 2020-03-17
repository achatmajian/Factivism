import React, { Component } from "react";
import "./Quiz.css";
import pageData from "../../pageData";

// Page that renders the quiz for determining political preferences and connecting with an appropriate electoral candidate

export default class Quiz extends Component {

    render() {
        let pageData = this.props.pageData;
        let issuesarray = pageData.issuesarray;
        for (var i = 0; i < issuesarray.length; i++) {
            console.log(issuesarray[i]);
            return (
                <div className="row">
                    <div className="twelve columns collapsed">
                        {issuesarray[i].name}
                        <img src={issuesarray[i].icon} className="img-icon" alt="icon" />
                        <div id="questions-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {issuesarray[i].question}
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

function runBernie(user) {
    let candidateData = pageData.candidates[0];
    let politicalData = candidateData.political_positions;
    let testData = pageData.testperson;
    let testPositions = testData.political_positions;
    let bernieStock = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (politicalData[i].position_stance === testPositions[j].position_stance) {
                bernieStock++;
                console.log("Bernie says: " + politicalData[i].position_stance);
                console.log("TestDude says: " + testPositions[j].position_stance);
                console.log(bernieStock);
            }
        }
    }
    console.log("You side with Bernie on " + (bernieStock * 10) + "% of the issues!");
}

function runBiden(user) {
    let candidateData = pageData.candidates[1];
    let politicalData = candidateData.political_positions;
    let testData = pageData.testperson;
    let testPositions = testData.political_positions;
    let bidenStock = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (politicalData[i].position_stance === testPositions[j].position_stance) {
                bidenStock++;
                console.log("Joe says: " + politicalData[i].position_stance);
                console.log("TestDude says: " + testPositions[j].position_stance);
                console.log(bidenStock);
            }
        }
    }
    console.log("You side with Joe Biden on " + (bidenStock * 10) + "% of the issues!");
}

function runTrump(user) {
    let candidateData = pageData.candidates[2];
    let politicalData = candidateData.political_positions;
    let testData = pageData.testperson;
    let testPositions = testData.political_positions;
    let trumpStock = 0;
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            if (politicalData[i].position_stance === testPositions[j].position_stance) {
                trumpStock++;
                console.log("Donald says: " + politicalData[i].position_stance);
                console.log("TestDude says: " + testPositions[j].position_stance);
                console.log(trumpStock);
            }
        }
    }
    console.log("You side with Donald Trump on " + (trumpStock * 10) + "% of the issues!");
}

function runAll() {
    runBernie();
    runBiden();
    runTrump();
};

runAll();
// counting variable for iterating through the quiz