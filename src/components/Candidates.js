import React, { Component } from "react";

export default class Candidates extends Component {
    render() {
        let pageData = this.props.pageData.candidates[0];
        console.log(pageData);
        return (
            <section id="candidates">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>{pageData.name}</h1>
                        <h3>Under the heading name</h3>
                        <img src="pageData.img_url" className="candidate-img" alt="candidate"/>
                    </div>
                </div>
            </section>
        )
    }
}