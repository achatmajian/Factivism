import React, { Component } from "react";
import "./Login.css";
import Email from '../Form/Inputs/Email';
import Password from '../Form/Inputs/Password';
// import LoginButton from "../Form/Buttons/LoginButton";
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title";
import { Link } from "react-router-dom";

// Page for logging in with their username and password

export default class Login extends Component {
    render() {
        return(
        <Wrapper>
            <div className="content-container">
            <div className="logo-container">
                <div className="logo">
                    <h2 className="title">Factivism</h2>
                </div>
                <p className="subtitle">Factivism is an application dedicating to helping people become more informed and civically active! Join today to get information on issues, candidates, and more. Get politically involved with Factivism.</p>
            </div>
            <br></br>
            <div className="Form-Container">
                <h3>Log In</h3>
                <Email />
                <Password />

                <Link to="/electionhome" type="button" className="button">Submit</Link>
            </div>
            </div>
        </Wrapper>
        )
    }
}