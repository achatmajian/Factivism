import React, { Component } from "react";
import Email from '../Form/Inputs/Email';
import Password from '../Form/Inputs/Password';
import SubmitButton from "../Form/Buttons/SubmitButton";
import Wrapper from "../Wrapper/Wrapper"
import Title from "../Title/Title"
import "./Signup.css";

// First page of signing up - basic username, email, password combo

export default class Signup1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }
    
      handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value 
        });
        console.log("current values state", this.state);
        console.log("current values email", this.state.email);
        console.log("current values pass", this.state.password);
      }
    
      handleSubmit = event =>  {
        event.preventDefault();
        alert(`Data was submitted ${this.state.email}`)
        //push to database  
        //go to next page
      }
    
    render() {
        //let pageData = this.props.pageData;
        return (
            <Wrapper>
                <Title />
                <div className="Form-Container">
                    <h3>Sign Up</h3>
                    <Email value={this.state.email} onChange={this.handleChange} />
                    <Password value={this.state.password} onChange={this.handleChange} />
                    <SubmitButton onSubmit={this.handleSubmit}/>
                </div>
            </Wrapper>
        )
    }
}
