import React, { Component } from "react";

var yesData = [];
var pullYesData = (v) => {
    yesData.push(v);
}

var noData = [];
var pullNoData = (x) => {
    noData.push(x);
}

export default class Issues extends Component {
    
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="issuesarray">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Testing</h1>
                        <div id="questions-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                pageData.issuesarray.map((item, i) => {
                                    item.side_yes.map(yesItem => 
                                        pullYesData(yesItem));
                                        console.log(yesData);
                                    item.side_no.map(noItem => 
                                        pullNoData(noItem));
                                        console.log(noData);
                                    
                                    return (
                                        <ul key={i}>
                                            <img src={item.icon} className="issues-icon" alt="icon"/>
                                            <h1>{item.name}</h1>
                                            <h3>{item.question}</h3>
                                            <h5>{yesData}</h5>
                                            <h5>{noData}</h5>
                                        </ul>

                                    )
                                })
                            }
                        </div>
                    </div>
                        
                </div>
            </section>
        )
    }
}