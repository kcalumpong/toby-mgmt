import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Form from "../components/Form";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    API.login(this.state.username, this.state.password)
      .then(res => this.props.history.push('/home'))
      .catch(err => console.error(err));
    // console.log("test" + this.state.username)
  }

  render() {
    return (
      <div className="container2">
        <div className="container3">
          <img className="logo1" src="../images/Toby-Logo.png" alt="tobyLogo"></img>

          <div className="loginTitle">Login to your account</div>
          <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />

          <Link to="/signup" className="link-to-register">First time? Register here</Link>
          <img className="toby1" src="../images/Frame.png" alt="toby1"></img>

        </div>
      </div>
    );
  }
}

export default Login;