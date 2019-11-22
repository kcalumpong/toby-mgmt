import React from "react";
import "./Form.css";

const Form = ({ inputHandler, submitHandler }) => (
  <form className="formLogin" onSubmit={submitHandler}>
    <div className="userInput">
    <div className="input-container">
      <input id="username" type="text" name="username" placeholder="Username" onChange={inputHandler} required />
      <span className="input-underline"></span>
      {/* <label htmlFor="username" className="input-label">Username</label> */}
    </div>
    <div className="input-container">
      <input id="password" type="password" name="password" placeholder="Password" onChange={inputHandler} required />
      <span className="input-underline"></span>
      {/* <label htmlFor="password" className="input-label"></label> */}
      </div>
    </div>

    <button className="btn1">Submit</button>

  </form>
);

export default Form;
