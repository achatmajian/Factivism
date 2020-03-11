import React, { Component } from "react";
import Email from './Form/Email';
import Password from './Form/Password';
import SubmitButton from './Form/SubmitButton';

class Signup extends Component {

    render() {
        let pageData = this.props.pageData;
        return (
            <div>
                <Email/>
                <Password />
                <SubmitButton onClick={/*html route to profile*/}/>
            </div>
        )
    }
}

export default Signup;