import React, { Component } from "react";
import "./ElectionHome.css";

// This page is for when users have entered all of their address and contact info.  They can check the date and location of the next election on this page

export default class ElectionHome extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="ElectionHome">
                <h2>Election Home Section</h2>
                <h3>{pageData.testing}</h3>
            </section>
        )
    }
}
