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
            <Address></Address>
            <City></City>
            <State></State>
            <Zip></Zip>
            <SignUpButton></SignUpButton>
        </div>
        </Wrapper>
    }
}

export default Signup2;