import React, { Component } from "react";
import "./Dashboard.css";

// This page will be the basic introductory screen when somebody visits the site for the first time.  Like, even before they sign up.

class Dashboard extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="Dashboard">
                <div className="registration-container">
                    {/* Users can get their voter registration status here. Either we connect this through the Rock the Vote API, or have a dropdown for each state which will link them to the specific state's registration webpage. */}
                    <h2>Are you registered to vote in your state? Found out now.</h2>
                    <button type="button" className="button">Check Registration Status</button> 
                </div>
                <div className="quiz-container">
                    {/* User will click the button in this container to take them to the quiz. */}
                    <h2>Unsure who to vote for? Take this quiz to see which candidate your political views align with the most.</h2>
                    <button type="button" className="button">Take Quiz</button> 
                </div>
                <div className="issues-container">
                    {/* User will click the button in this container to take them to the quiz. */}
                    <h2>Which issues are most important to you? Click here to get the facts on the most prominent issues in American politics today.</h2>
                    <button type="button" className="button">Explore Issues</button> 
                </div>
                <div className="candidate-container">
                    {/* User will click the button in this container to take them to the quiz. */}
                    <h2>With so many candidates in today's political landscape, it can be difficult to wade through and clearly find out a candidate's political stance. Click here to get a brief summary of each candidate.</h2>
                    <button type="button" className="button">Explore Candidates</button> 
                </div>
                
            </section>
        )
    }
}

export default Dashboard;