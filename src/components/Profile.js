import Name from './Form/Name';
import Address from './Form/Address';
import City from './Form/City';
import State from './Form/State';
import Zip from './Form/Zip';
import React, { Component } from "react";

class Profile extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <div id="profile-form">
                <form>
                    <Name />
                    <Address />
                    <City />
                    <State />
                    <Zip />
                </form>    
            </div>
        )
    }
}

export default Profile;