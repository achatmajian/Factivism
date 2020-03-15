import React, { Component } from "react";
import "./Mainpage.css";

// This page will be the basic introductory screen when somebody visits the site for the first time.  Like, even before they sign up.

class Mainpage extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="Mainpage">
                <h2>Welcome to Factivism</h2>
                <p>Factivism is an application dedicating to helping people become more informed and civically active! Join today to get information on issues, candidates, and more. Get politically involved with Factivism.</p>
                <button type="button" className="button">Log In</button> {/* This button takes the user to the login "page" */}
                <button type="button" className="button">Sign Up</button> {/* This button takes the user to the sign up 1 "page" */}
                <h3>{pageData.testing}</h3>
            </section>
        )
    }
}

export default Mainpage;