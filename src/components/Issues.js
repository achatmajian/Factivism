import React, { Component } from "react";

export default class Issues extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="issuesarray">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Testing</h1>
                        <div id="issues-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                pageData.issuesarray && pageData.issuesarray.map((item, i) => {
                                    return (
                                        <ul>
                                            <h4>{item.name}</h4>
                                            <h3>{item.question}</h3>
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