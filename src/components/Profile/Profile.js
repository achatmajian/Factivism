import Name from './Form/Name';
import Address from './Form/Address';
import City from './Form/City';
import State from './Form/State';
import Zip from './Form/Zip';
import React, { Component } from "react";
import "./Profile.css";

// Profile page that displays user information and links to the other material

export default class Profile extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="profile">
                <h2>PROFILE SECTION</h2>
                <h3>{pageData.testing}</h3>
                 <div id="profile-form">
                <form>
                    <Name />
                    <Address />
                    <City />
                    <State />
                    <Zip />
                </form>    
            </div>
            </section>
           
        )
    }
}