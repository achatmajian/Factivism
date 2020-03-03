import React, { Component } from "react";

class Issues extends Component {

    componentDidMount() {
        fetch("https://thewisevote.com/api/issues2/welfare")
        .then(results => {
            return results.json();
        }).then(data => {
            let question = data.response.question;
            console.log(data);
            console.log(question);
        });
    }
    render() {
        return ("hello")
    }
}

export default Issues;