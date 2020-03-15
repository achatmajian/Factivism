import React, { Component } from "react";
import "./Login.css";
import Email from '../Form/Inputs/Email';
import Password from '../Form/Inputs/Password';
import LoginButton from "../Form/Buttons/LoginButton";
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title"

// Page for logging in with their username and password

export default class Login extends Component {
    render() {
        return(
        <Wrapper>
            <Title />
            <div className="Form-Container">
                <h3>Log In</h3>
                <Email />
                <Password />
                <LoginButton />
            </div>
        </Wrapper>
        )
    }
}