import React, { Component } from "react";
import SignUpButton from "./Form/Buttons/SignUpButton";
import Name from './Form/Inputs/Name';
import Address from './Form/Inputs/Address';
import SignUpButton from "./Form/Buttons/SignUpButton";
import Wrapper from "./Wrapper/Wrapper"
import Title from "./Title/Title"

class Signup2 extends Component {
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