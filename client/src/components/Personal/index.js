import React from "react";
import "./style.css";
// import ProfileHeader from "../ProfileHeader";

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
  // }

  const Personal = (props) => (
    <div className="personal-page">
      {/* <ProfileHeader 
      title={props.state.job.title}
      name={props.state.personal.firstName + " " + props.state.personal.lastName} /> */}

      <form name="personal-form">

        <div className="employee-input">

          <div className="employeeNumInput">
            <h4>Basic Information</h4>
            <h3>Employee #</h3>
            <input
              type="text"
              name="employeeNumber"
              className="personal"
              value={props.state.personal.employeeNumber}
              onChange={props.handleInputChange}
              placeholder="#"
            />

          </div>

          <div className="statusInput">
            <h3>Status</h3>
            <select
              type="select"
              name="status"
              value={props.state.personal.status}
              onChange={props.handleInputChange}
            >
              <option name="active">Active</option>
              <option name="notActive">Not Active</option>
            </select>
          </div>

          <div className="genderInput">
            <h3>Gender</h3>
            <select
              type="select"
              name="genderInput"
              className="personal"
              value={props.state.personal.genderInput}
              onChange={props.handleInputChange}>
              <option name="female">Female</option>
              <option name="male">Male</option>
              <option name="other">Other</option>
            </select>
          </div>

        </div>

        <div>
          <h3>Name</h3>
          <input
            // id= {this.id}
            type="text"
            name="firstName"
            className="personal"
            value={props.state.personal.firstName}
            onChange={props.handleInputChange}
            placeholder="First Name"
          />

          <input
            // id= {this.id}
            type="text"
            name="middleName"
            className="personal"
            value={props.state.personal.middleName}
            onChange={props.handleInputChange}
            placeholder="Middle Name"
          />

          <input
            // id= {this.id}
            type="text"
            name="lastName"
            className="personal"
            value={props.state.personal.lastName}
            onChange={props.handleInputChange}
            placeholder="Last Name"
          />

          <h3>Birthdate</h3>
          <input
            // id={this.id}
            type="text"
            name="month"
            className="personal"
            value={props.state.personal.month}
            onChange={props.handleInputChange}
            placeholder="Month"
          />

          <input
            // id={this.id}
            type="text"
            name="day"
            className="personal"
            value={props.state.personal.day}
            onChange={props.handleInputChange}
            placeholder="Day"
          />

          <input
            // id={this.id}
            type="text"
            name="year"
            className="personal"
            value={props.state.personal.year}
            onChange={props.handleInputChange}
            placeholder="Year"
          />

          <h3>Address</h3>
          <input
            // id={this.id}
            type="text"
            name="streetAddress"
            className="personal"
            value={props.state.personal.streetAddress}
            onChange={props.handleInputChange}
            placeholder="Street Address"
          />


          <input
            // id={this.id} 
            type="text"
            name="city"
            className="personal"
            value={props.state.personal.city}
            onChange={props.handleInputChange}
            placeholder="City"
          />


          <input
            // id={this.id} 
            type="text"
            name="state"
            className="personal"
            placeholder="State"
            value={props.state.personal.state}
            onChange={props.handleInputChange}
          />

          <input
            // id={this.id} 
            type="text"
            name="zipcode"
            className="personal"
            placeholder="Zip Code"
            value={props.state.personal.zipcode}
            onChange={props.handleInputChange}
          />


          <h3>Social Security</h3>
          <input
            // id={this.id} 
            type="text"
            name="socialSecurity"
            className="personal"
            placeholder="xxx-xx-xxx"
            value={props.state.personal.socialSecurity}
            onChange={props.handleInputChange}
          />

          <h3>Emergency Contact #1</h3>
          <input
            // id={this.id}
            type="text"
            name="emergencyContactNameOne"
            className="personal"
            placeholder="Contact Name"
            value={props.state.personal.emergencyContactNameOne}
            onChange={props.handleInputChange}
          />

          <input
            // id={this.id} 
            type="text"
            name="emergencyContactPhoneOne"
            className="personal"
            placeholder="Phone Number"
            value={props.state.personal.emergencyContactPhoneOne}
            onChange={props.handleInputChange}
          />

          <h3>Emergency Contact #2</h3>
          <input
            // id={this.id} 
            type="text"
            name="emergencyContactNameTwo"
            className="personal"
            placeholder="Contact Name"
            value={props.state.personal.emergencyContactTwo}
            onChange={props.handleInputChange}
          />


          <input
            // id={this.id} 
            type="text"
            name="emergencyContactPhoneTwo"
            className="personal"
            placeholder="Phone Number"
            value={props.state.personal.emergencyContactTwo}
            onChange={props.handleInputChange}
          />

        </div>

      </form>
      <button className="personal-form-button" form="personal-form" name="personal-form-submit">SAVE</button>
    </div>
  )


export default Personal;


