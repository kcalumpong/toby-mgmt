import React from "react";
import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <form className="formLogin" onSubmit={submitHandler} noValidate>
    <div className="userInput">
      <div className="input-container">
        <input id="username" type="text" name="username" placeholder="Username" onChange={inputHandler} required />
        <span className="input-underline"></span>
      </div>

      <div className="input-container">
        <input id="password" type="password" name="password" placeholder="Password" onChange={inputHandler} required />
        <span className="input-underline"></span>
      </div>
    </div>

    <button className="btn1">Submit</button>

  </form>
);

export default Form;