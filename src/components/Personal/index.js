import React from "react";
import "./style.css";

const Personal = () => {
  return (
    <div className="personal-page">

      <button idName="personal-form-button" form name="personal-form">SAVE</button>
     
      <form idName="personal-form">

        <div className="employee-input">

          <div className="employeeNum-input">
            <h4>Basic Information</h4>
            <h3>Employee #</h3>
            <input type="text" name="employee-number" placeholder="#"></input>
          </div>

          <div className="status-input">
            <h3>Status</h3>
            <select>
              <option value="active" name="status">Active</option>
              <option value="not-active" name="status">Not Active</option>
            </select>
          </div>

          <div className="gender-input">
            <h3>Gender</h3>
            <select>
              <option value="female" name="status">Female</option>
              <option value="male" name="status">Male</option>
              <option value="other" name="status">Other</option>
            </select>
          </div>

        </div>

        <h3>Name</h3>
        <input type="text" name="basic-information" placeholder="First Name"></input>
        <input type="text" name="basic-information" placeholder="Middle Name"></input>
        <input type="text" name="basic-information" placeholder="Last Name"></input>

        <h3>Birthdate</h3>
        <input type="text" name="birthdate" placeholder="Month"></input>
        <input type="text" name="birthdate" placeholder="Day"></input>
        <input type="text" name="birthdate" placeholder="Year"></input>

        <h3>Address</h3>
        <input type="text" name="address" placeholder="Street Address"></input>
        <input type="text" name="address" placeholder="City"></input>
        <input type="text" name="address" placeholder="State"></input>
        <input type="text" name="address" placeholder="Zip Code"></input>

        <h3>Social Security</h3>
        <input type="text" name="social-security" placeholder="xxx"></input>
        <input type="text" name="social-security" placeholder="xx"></input>
        <input type="text" name="social-security" placeholder="xxx"></input>

        <h3>Emergency Contact #1</h3>
        <input type="text" name="emergency-contact-one" placeholder="Contact Name"></input>
        <input type="text" name="emergency-contact-one" placeholder="Phone Number"></input>

        <h3>Emergency Contact #2</h3>
        <input type="text" name="emergency-contact-two" placeholder="Contact Name"></input>
        <input type="text" name="emergency-contact-two" placeholder="Phone Number"></input>

      </form>
    </div>
  )
}

export default Personal;


