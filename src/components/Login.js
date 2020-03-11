import React, { Component } from "react";
import LoginButton from "./Form/Buttons/LoginButton";

class Login extends Component {
    render() {
        let pageData = this.props.pageData;
        <Wrapper>
        <Title></Title>
        <div className="Form-Container">
            <h3>Log In</h3>
            <Name></Name>
            <Address></Address>
            <LoginButton></LoginButton>
        </div>
        </Wrapper>
    }
}

export default Login;