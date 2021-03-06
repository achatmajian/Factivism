import React, { Component } from "react";
import SignUpButton from "../Form/Buttons/SignUpButton";
import Name from '../Form/Inputs/Name';
import Address from '../Form/Inputs/Address';
import City from '../Form/Inputs/City';
import State from '../Form/Inputs/State';
import Zip from '../Form/Inputs/Zip';
import Email from '../Form/Inputs/Email';
import Password from '../Form/Inputs/Password';
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title"
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";

// Page for fleshing out the rest of the user profile, with address and contact info for figuring out polling places and election dates
export default class Signup2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          name: "",
          address: "",
          city: "",
          state: "",
          zip: "",
        };
      }

      handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
        console.log("current values email", this.email);
        console.log("current values password", this.password);
        console.log("current values name", this.name);
        console.log("current values address", this.state.address);
        console.log("current values city", this.state.city);
        console.log("current values state", this.state.state);
        console.log("current values zip", this.state.zip);
      }
    
      handleSubmit = (props,event) =>  {
        const baseURL = 'mongodb+srv://jeremygill:password123@factivismcluster-2ye5e.gcp.mongodb.net/membersdb?retryWrites=true&w=majority'
        event.preventDefault();
        alert(`Data was submitted ${this.state.name}`);

        //add disableclass for button

        //push to database
        axios.post (baseURL + 'create-user', {
          email: this.state.email,
          password: this.state.password, 
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          zip: this.state.zip
        })
        .then(function(response){
          console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });  
        //go to next page
        
      }
    
    render() {
        return (
            <Wrapper>
                <Title />
                <div className="Form-Container">
                    <h3>Sign Up</h3>
                    <Email value={this.state.email} onChange={this.handleChange} />
                    <Password value={this.state.password} onChange={this.handleChange} />
                    <Name value={this.state.name} onChange={this.handleChange} />
                    <Address value={this.state.address} onChange={this.handleChange} />
                    <City value={this.state.city} onChange={this.handleChange} />
                    <State value={this.state.state} onChange={this.handleChange} />
                    <Zip value={this.state.zip} onChange={this.handleChange} />
                    <SignUpButton to={"/electionhome"} onSubmit={this.handleSubmit}/>
                </div>
            </Wrapper>
        )    
    }
}
