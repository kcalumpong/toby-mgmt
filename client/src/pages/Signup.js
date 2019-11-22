import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import Title from "../components/Title";
import Form from "../components/Form";
import "./Signup.css";

class Signup extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }

  handleInputChange (event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit (event) {
    event.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)

    API.signup(this.state.username, this.state.password)
      .then(res => this.props.history.push('/home'))
      .catch(err => console.error(err));
  }


  render () {
    return (
      <div className="container2">
      <div className="container3">
        <img class="logo1" src="../images/Toby-Logo.png" alt="tobyLogo"></img>
        <div className="signupTitle">Create a new account</div>
        <Form className="signup-input" inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/login" className="link-to-login">Already have an account ? Login here</Link>
        <img class="toby2" src="../images/Frame2.png" alt="toby2"></img>
        <img class="vector" src="../images/vector.png" alt="background"></img>
        </div>
</div>
    );
  }
}

export default Signup;

