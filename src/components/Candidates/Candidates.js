import React, { Component } from "react";
import "./Candidates.css";
import pageData from "../../pageData";

// Page to render information about each candidate

export default class Candidates extends Component {
    render() {
        let candidateArrayIndex = 0;
        let pageData = this.props.pageData.candidates[candidateArrayIndex];
        console.log(pageData);
        return (
            <section id="candidates">
                <div className="content-container">
                <div className="row">
                    <div className="twelve columns collapsed" id="bernie-sanders">
                        <h1>{pageData.name}</h1>
                        <img src={pageData.img_url} className="candidate-img" alt="candidate"/>                        
                    </div>
                    <div className="twelve columns-collapsed" id="positions-banner">
                        <h2>What does {pageData.name} think about...</h2>
                    </div>
                    <div className="twelve columns-collapsed">
                        {pageData.political_positions.map((item, i) => {
                            return(
                                <div className="row political-positions-row">
                                    <ul style={{ listStyleType: "none" }} key={i}>
                                        <li className="position-name">{item.position_name}?</li>
                                        <li>{item.position_stance}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
                </div>
            </section>
        )
    }
}