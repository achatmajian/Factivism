import React, { Component } from "react";
import LoginButton from "../Form/Buttons/LoginButton";
import "./Login.css";

// Page for logging in with their username and password

export default class Login extends Component {
    render() {
        let pageData = this.props.pageData;
        <Wrapper>
        <Title></Title>
        <div className="Form-Container">
            <h3>Log In</h3>
            <Name></Name>
            <Password></Password>
            <LogInButton></LogInButton>
        </div>
        </Wrapper>
    }
}