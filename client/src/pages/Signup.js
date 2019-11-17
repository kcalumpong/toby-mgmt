import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
// import Title from "../components/Title";
import Form from "../components/Form";
// import "./Login.css";

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
        {/* <Title>Login</Title> */}
        <Form inputHandler={this.handleInputChange} submitHandler={this.handleSubmit} />
        <Link to="/login" className="link-to-register">Already have an account ? Login here</Link>
      </Fragment>
    );
  }
}

export default Signup;

