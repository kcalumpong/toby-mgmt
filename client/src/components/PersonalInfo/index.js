import React from "react";
import "./style.css";

const PersonalInfo = (props) => (
  <div className="personal-page">

    <form name="personal-form">

      <div className="employee-input">
        <legend>Basic Information</legend>

        <div className="genderInput">
          <h3>Gender</h3>
          <select
            type="select"
            name="genderInput"
            className="personal gender"
            value={props.state.genderInput}
            onChange={props.handlers.personalChange}>
            <option name="select">Please Select</option>
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
          value={props.state.firstName}
          onChange={props.handlers.personalChange}
          placeholder="First Name"
        />

        <input
          type="text"
          name="middleName"
          className="personal"
          value={props.state.middleName}
          onChange={props.handlers.personalChange}
          placeholder="Middle Name"
        />

        <input
          type="text"
          name="lastName"
          className="personal"
          value={props.state.lastName}
          onChange={props.handlers.personalChange}
          placeholder="Last Name"
        />

      </div>

      <div className="birthday">

        <h3>Birthdate</h3>
        <input
          type="text"
          name="month"
          className="personal month"
          value={props.state.month}
          onChange={props.handlers.personalChange}
          placeholder="Month"
        />

        <input
          type="text"
          name="day"
          className="personal day"
          value={props.state.day}
          onChange={props.handlers.personalChange}
          placeholder="Day"
        />

        <input
          type="text"
          name="year"
          className="personal"
          value={props.state.year}
          onChange={props.handlers.personalChange}
          placeholder="Year"
        />
      </div>

      <h3>Address</h3>
      <input
        type="text"
        name="streetAddress"
        className="personal address"
        value={props.state.streetAddress}
        onChange={props.handlers.personalChange}
        placeholder="Street Address"
      />

      <div className="city-and-state">

        <input
          type="text"
          name="city"
          className="personal"
          value={props.state.city}
          onChange={props.handlers.personalChange}
          placeholder="City"
        />


        <input
          type="text"
          name="state"
          className="personal state"
          placeholder="State"
          value={props.state.state}
          onChange={props.handlers.personalChange}
        />

        <input
          type="text"
          name="zipcode"
          className="personal zip"
          placeholder="Zip Code"
          value={props.state.zipcode}
          onChange={props.handlers.personalChange}
        />
      </div>

      <div className="phoneNumbers">

        <h3>Phone Number</h3>
        <input
          type="text"
          name="countryCode"
          className="personal country"
          placeholder="+1"
          value={props.state.countryCode}
          onChange={props.handlers.personalChange}
        />


        <input
          type="text"
          name="phoneNumber"
          className="personal phone"
          placeholder="555-123-1234"
          value={props.state.phoneNumber}
          onChange={props.handlers.personalChange}
        />
      </div>

      <div className="emails">

        <h3>Email Address</h3>
        <input
          type="text"
          name="personalEmail"
          className="personal pe"
          placeholder="Personal Email Address"
          value={props.state.personalEmail}
          onChange={props.handlers.personalChange}
        />

        <input
          type="text"
          name="workEmail"
          className="personal we"
          placeholder="Work Email Address"
          value={props.state.workEmail}
          onChange={props.handlers.personalChange}
        />

      </div>

      <h3>Social Security Number</h3>
      <input
        type="text"
        name="ssOne"
        className="personal ssOne"
        placeholder="XXX"
        value={props.state.ssOne}
        onChange={props.handlers.personalChange}
      />
      <input
        type="text"
        name="ssTwo"
        className="personal ssTwo"
        placeholder="XX"
        value={props.state.ssTwo}
        onChange={props.handlers.personalChange}
      />
      <input
        type="text"
        name="ssThree"
        className="personal ssThree"
        placeholder="XXXX"
        value={props.state.ssThree}
        onChange={props.handlers.personalChange}
      />

      <h3>Emergency Contact #1</h3>
      <input
        type="text"
        name="emergencyContactFirstNameOne"
        className="personal"
        placeholder="First Name"
        value={props.state.emergencyContactFirstNameOne}
        onChange={props.handlers.personalChange}
      />
      <input
        type="text"
        name="emergencyContactLastNameOne"
        className="personal"
        placeholder="Last Name"
        value={props.state.emergencyContactLastNameOne}
        onChange={props.handlers.personalChange}
      />

      <h3>Phone Number</h3>
      <input
        type="text"
        name="emergencyContactPhoneOneCountry"
        className="personal country"
        placeholder="+1"
        value={props.state.emergencyContactPhoneOneCountry}
        onChange={props.handlers.personalChange}
      />

      <input
        type="text"
        name="emergencyContactPhoneOne"
        className="personal phone"
        placeholder="555-123-1234"
        value={props.state.emergencyContactPhoneOne}
        onChange={props.handlers.personalChange}
      />

      <h3>Emergency Contact #2</h3>
      <input
        type="text"
        name="emergencyContactFirstNameTwo"
        className="personal"
        placeholder="First Name"
        value={props.state.emergencyContactFirstNameTwo}
        onChange={props.handlers.personalChange}
      />

      <input
        type="text"
        name="emergencyContactLastNameTwo"
        className="personal"
        placeholder="Last Number"
        value={props.state.emergencyContactLastNameTwo}
        onChange={props.handlers.personalChange}
      />

      <h3>Phone Number</h3>
      <input
        type="text"
        name="emergencyContactPhoneTwoCountry"
        className="personal country"
        placeholder="+1"
        value={props.state.emergencyContactPhoneTwoCountry}
        onChange={props.handlers.personalChange}
      />
      
      <input
        type="text"
        name="emergencyContactPhoneTwo"
        className="personal phone"
        placeholder="555-123-1234"
        value={props.state.emergencyContactPhoneTwo}
        onChange={props.handlers.personalChange}
      />

    </form>
  </div>
)

export default PersonalInfo;