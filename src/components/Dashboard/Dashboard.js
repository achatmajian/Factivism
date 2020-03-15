import React, { Component } from "react";
import "./Mainpage.css";

// This page will be the basic introductory screen when somebody visits the site for the first time.  Like, even before they sign up.

class Mainpage extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="Dashboard">
                <div className="registration-container">
                    {/* Users can get their voter registration status here. Either we connect this through the Rock the Vote API, or have a dropdown for each state which will link them to the specific state's registration webpage. */}
                    <h2>Are you registered to vote in your state? Found out now.</h2>
                    <button type="button" className="button">Check Registration Status</button> 
                </div>
                
            </section>
        )
    }
}

export default Mainpage;