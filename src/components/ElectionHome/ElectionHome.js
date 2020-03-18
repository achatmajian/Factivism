import React, { Component, } from "react";
import "./ElectionHome.css";

// This page is for when users have entered all of their address and contact info.  They can check the date and location of the next election on this page
var apiKey = "AIzaSyATAX-1XBtmDLte7pWPQ_nUjhTKq-WkwR8";


export default class ElectionHome extends Component {
    state = {
        data: ["dogs", "turtles","coronavirus"],
        testing: "test some stuff",
        anotherArray: []
    };

    componentDidMount() {
        fetch("https://www.googleapis.com/civicinfo/v2/voterinfo?key=" + apiKey + "&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000")
            .then(response => response.json())
            .then(console.log(this.state.data))
    };


    render() {
        let Data = this.state.data;
        return (
            <section id="electionhome">
                <div className="row">
                    <div className="twelve columns collapsed">
                        {
                            Data.map((item, i) => {
                                return (
                                    <div className="columns election-item" key={i}>
                                        <h5>{item}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}

