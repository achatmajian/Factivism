import React, { Component } from "react";
import "./Mainpage.css";
import {Link} from "react-router-dom";

// This page will be the basic introductory screen when somebody visits the site for the first time.  Like, even before they sign up.

class Mainpage extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <div className="content-container">
            <section id="Mainpage">
                <div className="logo-container">
                <div className="logo">
                <h2 className="title">Factivism</h2>
                </div>
                <p className="subtitle">Factivism is an application dedicating to helping people become more informed and civically active! Join today to get information on issues, candidates, and more. Get politically involved with Factivism.</p>
                </div>

                <br></br>
                <div className="button-container">
                <Link to={`/login`} type="button" className="button">Log In</Link> {/* This button takes the user to the login "page" */}
                <Link to={"/signup"} type="button" className="button">Sign Up</Link> {/* This button takes the user to the sign up 1 "page" */}
                </div>
            </section>
            </div>
        )
    }
}

export default Mainpage;