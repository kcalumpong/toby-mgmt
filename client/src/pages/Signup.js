import React, { Component, Fragment } from "react";
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
      <Fragment>
        <img class="logo" src="../images/Toby-Logo.png" alt="tobyLogo"></img>
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/login" className="link-to-register">Already have an account ? Login here</Link>
        <img class="toby2" src="../images/Frame2.png" alt="toby2"></img>
        {/* <img class="toby3" src="../images/Vector.png" alt="background"></img> */}
      </Fragment>
    );
  }
}

export default Signup;

