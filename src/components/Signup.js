import React, { Component } from "react";
import Email from './Form/Email';
import Password from './Form/Password';

class Signup extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <Email/>
        )
    }
}

export default Signup;