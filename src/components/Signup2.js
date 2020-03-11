import React, { Component } from "react";
import Email from './Form/Email';
import Password from './Form/Password';
import SignUpButton from "./Form/Buttons/SignUpButton";

class Signup extends Component {
    render() {
        let pageData = this.props.pageData;
        <Wrapper>
        <Title></Title>
        <div className="Form-Container">
            <h3>Sign Up</h3>
            <Name></Name>
            <Email></Email>
            <Password></Password>
            <SignUpButton></SignUpButton>
        </div>
        </Wrapper>
        return (
            <Email/>
        )
    }
}

export default Signup1;