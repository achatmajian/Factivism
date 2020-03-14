import React, { Component } from "react";
import SignUpButton from "../Form/Buttons/SignUpButton";
import Name from '../Form/Inputs/Name';
import Address from '../Form/Inputs/Address';
import City from '../Form/Inputs/City';
import State from '../Form/Inputs/State';
import Zip from '../Form/Inputs/Zip';
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title"
import "./Signup.css";

// Page for fleshing out the rest of the user profile, with address and contact info for figuring out polling places and election dates
export default class Signup2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        console.log("current values name", this.name);
        console.log("current values address", this.state.address);
        console.log("current values city", this.state.city);
        console.log("current values state", this.state.state);
        console.log("current values zip", this.state.zip);
      }
    
      handleSubmit = event =>  {
        event.preventDefault();
        alert(`Data was submitted ${this.state.name}`);
        //console.log("Data was submitted");
        //push to database  
        //go to next page
      }
    
    render() {
        return (
            <Wrapper>
                <Title />
                <div className="Form-Container">
                    <h3>Sign Up</h3>
                    <Name value={this.state.name} onChange={this.handleChange} />
                    <Address value={this.state.address} onChange={this.handleChange} />
                    <City value={this.state.city} onChange={this.handleChange} />
                    <State value={this.state.state} onChange={this.handleChange} />
                    <Zip value={this.state.zip} onChange={this.handleChange} />
                    <SignUpButton onSubmit={this.handleSubmit} />
                </div>
            </Wrapper>
        )    
    }
}
