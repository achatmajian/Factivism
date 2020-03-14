import React, { Component } from "react";
import "./Mainpage.css";

// This page will be the basic introductory screen when somebody visits the site for the first time.  Like, even before they sign up.

class Mainpage extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="Mainpage">
                <h2>Mainpage Information Goes Here</h2>
                <h3>{pageData.testing}</h3>
            </section>
        )
    }
}

export default Mainpage;