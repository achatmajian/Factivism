import React, { Component } from "react";
import Email from './Form/Inputs/Email';
import Password from './Form/Inputs/Password';
import SubmitButton from "./Form/Buttons/SubmitButton";
import Wrapper from "./Wrapper/Wrapper"
import Title from "./Title/Title"

class Signup1 extends Component {
    render() {
        let pageData = this.props.pageData;
        <Wrapper>
        <Title></Title>
        <div className="Form-Container">
            <h3>Sign Up</h3>
            <Email></Email>
            <Password></Password>
            <SubmitButton></SubmitButton>
        </div>
        </Wrapper>
        return (
            <Email/>
        )
    }
}

export default Signup1;