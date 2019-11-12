import React from "react";
import "./style.css";

const EmployeeSnippet = (props) => (
        <div className="employee-snippet">
            <h4>Employee Status</h4>
            <p className="employeeStatus">{props.status}</p>
            <h4>Phone Number</h4>
            <p className="phoneNumber">{props.phoneNumber}</p>
            <h4>Email Address</h4>
            <p className="emailAddress">{props.emailAddress}</p>
            <h4>Department</h4>
            <p className="department">{props.department}</p>
            <h4>Location</h4>
            <p className="location">{props.location}</p>
        </div>
    )


export default EmployeeSnippet;