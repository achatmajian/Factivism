import Name from './Form/Name';
import Address from './Form/Address';
import City from './Form/City';
import State from './Form/State';
import Zip from './Form/Zip';
import React, { Component } from "react";

class Profile extends Component {

    render() {
        componentDidMount() {
            fetch("https://www.googleapis.com/civicinfo/v2/voterinfo")
            .then(results => {
                return results.json();
            }).then(data => {
                let question = data.response.question;
                console.log(data);
                console.log(question);
            });
        }
        let pageData = this.props.pageData;
        return (
            <div id="profile-form">
                <form>
                    <Name />
                    <Address />
                    <City />
                    <State />
                    <Zip />
                    <SubmitButton onClick={/*call API with Zip*/}/>
                </form>    
            </div>
        )
    }
}

export default Profile;