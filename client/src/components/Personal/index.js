import React from "react";
import "./style.css";

// const handleSubmit = (event) => {
//   event.preventDefault();

//   console.log("This state ", this.state);
//   let emp = JSON.parse(localStorage.getItem("personal"))
//   if (!emp) {
//     emp = []
//   }
//   emp.push(this.state)
//   localStorage.setItem("personal", JSON.stringify(emp))
// }

// call backedn and send the info inside of this.state // update DB
// console.log("-save:", this.state.department)


const Personal = (props) => (
  <div className="personal-page">

    <form name="personal-form">

      <div className="employee-input">
      <legend>Basic Information</legend>

        <div className="genderInput">
          <h3>Gender</h3>
          <select
            type="select"
            name="genderInput"
            className="personal"
            value={props.state.personal.genderInput}
            onChange={props.handlers.personalChange}>
            <option name="female">Female</option>
            <option name="male">Male</option>
            <option name="other">Other</option>
          </select>
        </div>

      </div>

      <div className="name">
    
        <h3>Full Name</h3>
        <input
          type="text"
          name="firstName"
          className="personal"
          value={props.state.personal.firstName}
          onChange={props.handlers.personalChange}
          placeholder="First Name"
        />

        <input
          // id= {this.id}
          type="text"
          name="middleName"
          className="personal"
          value={props.state.personal.middleName}
          onChange={props.handlers.personalChange}
          placeholder="Middle Name"
        />

        <input
          // id= {this.id}
          type="text"
          name="lastName"
          className="personal"
          value={props.state.personal.lastName}
          onChange={props.handlers.personalChange}
          placeholder="Last Name"
        />

</div>

<div className="birthday">

        <h3>Birthdate</h3>
        <input
          // id={this.id}
          type="text"
          name="month"
          className="personal month"
          value={props.state.personal.month}
          onChange={props.handlers.personalChange}
          placeholder="Month"
        />

        <input
          // id={this.id}
          type="text"
          name="day"
          className="personal day"
          value={props.state.personal.day}
          onChange={props.handlers.personalChange}
          placeholder="Day"
        />

        <input
          // id={this.id}
          type="text"
          name="year"
          className="personal"
          value={props.state.personal.year}
          onChange={props.handlers.personalChange}
          placeholder="Year"
        />
        </div>

    <div className="address">
        <h3>Address</h3>
        <input
          // id={this.id}
          type="text"
          name="streetAddress"
          className="personal"
          value={props.state.personal.streetAddress}
          onChange={props.handlers.personalChange}
          placeholder="Street Address"
        />

        <input
          // id={this.id} 
          type="text"
          name="city"
          className="personal"
          value={props.state.personal.city}
          onChange={props.handlers.personalChange}
          placeholder="City"
        />


        <input
          // id={this.id} 
          type="text"
          name="state"
          className="personal state"
          placeholder="State"
          value={props.state.personal.state}
          onChange={props.handlers.personalChange}
        />

        <input
          // id={this.id} 
          type="text"
          name="zipcode"
          className="personal zip"
          placeholder="Zip Code"
          value={props.state.personal.zipcode}
          onChange={props.handlers.personalChange}
        />
        </div>

        <div className="phoneNumbers">

        <h3>Phone Number</h3>
        <input
          // id={this.id}
          type="text"
          name="countryCode"
          className="personal country"
          placeholder="+1"
          value={props.state.personal.countryCode}
          onChange={props.handlers.personalChange}
        />
      

        <input
          // id={this.id}
          type="text"
          name="phoneNumber"
          className="personal phone"
          placeholder="555-123-1234"
          value={props.state.personal.phoneNumber}
          onChange={props.handlers.personalChange}          
        /> 
          </div>

        <div className="emails">
        
          <h3>Email Address</h3>
          <input
            // id={this.id}
            type="text"
            name="personalEmail"
            className="personal pe"
            placeholder="Personal Email Address"
            value={props.state.personal.personalEmail}
            onChange={props.handlers.personalChange}
          />
    
          <input
            // id={this.id}
            type="text"
            name="workEmail"
            className="personal we"
            placeholder="Work Email Address"
            value={props.state.personal.workEmail}
            onChange={props.handlers.personalChange}
          />

        </div>


        <h3>Social Security Number</h3>
        <input
          // id={this.id} 
          type="text"
          name="ssOne"
          className="personal ssOne"
          placeholder="XXX"
          value={props.state.personal.ssOne}
          onChange={props.handlers.personalChange}
        />
        <input
          // id={this.id} 
          type="text"
          name="ssTwo"
          className="personal ssTwo"
          placeholder="XX"
          value={props.state.personal.ssTwo}
          onChange={props.handlers.personalChange}
        />
        <input
          // id={this.id} 
          type="text"
          name="ssThree"
          className="personal ssThree"
          placeholder="XXXX"
          value={props.state.personal.ssThree}
          onChange={props.handlers.personalChange}
        />

        <h3>Emergency Contact #1</h3>
        <input
          // id={this.id}
          type="text"
          name="emergencyContactFirstNameOne"
          className="personal"
          placeholder="First Name"
          value={props.state.personal.emergencyContactFirstNameOne}
          onChange={props.handlers.personalChange}
        />
        <input
          // id={this.id}
          type="text"
          name="emergencyContactLastNameOne"
          className="personal"
          placeholder="Last Name"
          value={props.state.personal.emergencyContactLastNameOne}
          onChange={props.handlers.personalChange}
        />

        <h3>Phone Number</h3>
        <input
          // id={this.id} 
          type="text"
          name="emergencyContactPhoneOneCountry"
          className="personal country"
          placeholder="+1"
          value={props.state.personal.emergencyContactPhoneOneCountry}
          onChange={props.handlers.personalChange}
        />
        <input
          // id={this.id} 
          type="text"
          name="emergencyContactPhoneOne"
          className="personal phone"
          placeholder="555-123-1234"
          value={props.state.personal.emergencyContactPhoneOne}
          onChange={props.handlers.personalChange}
        />


        <h3>Emergency Contact #2</h3>
        <input
          // id={this.id} 
          type="text"
          name="emergencyContactFirstNameTwo"
          className="personal"
          placeholder="First Name"
          value={props.state.personal.emergencyContactFirstNameTwo}
          onChange={props.handlers.personalChange}
        />


        <input
          // id={this.id} 
          type="text"
          name="emergencyContactLastNameTwo"
          className="personal"
          placeholder="Last Number"
          value={props.state.personal.emergencyContactLastNameTwo}
          onChange={props.handlers.personalChange}
        />

        <h3>Phone Number</h3>
        <input
          // id={this.id} 
          type="text"
          name="emergencyContactPhoneTwoCountry"
          className="personal country"
          placeholder="+1"
          value={props.state.personal.emergencyContactPhoneTwoCountry}
          onChange={props.handlers.personalChange}
        />
        <input
          // id={this.id} 
          type="text"
          name="emergencyContactPhoneTwo"
          className="personal phone"
          placeholder="555-123-1234"
          value={props.state.personal.emergencyContactPhoneTwo}
          onChange={props.handlers.personalChange}
        />



    </form>

  </div>
)


export default Personal;


