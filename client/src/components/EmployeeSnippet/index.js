import React from "react";
import "./style.css";
import { FaEnvelope } from 'react-icons/fa';


const EmployeeSnippet = (props) => (
    <div className="employee-snippet">
        <h4>Employee Status</h4>
        <p className="employeeStatus">{props.status}</p>
        <h4>Department</h4>
        <p className="department">{props.department}</p>
        <h4>Title</h4>
        <p className="department">{props.title}</p>
        <h4>Phone Number</h4>
        <p className="phoneNumber">{props.phoneNumber}</p>
        <h4>Email Address</h4>
        <p className="emailAddress">{props.workEmail}</p>
        <a href={`mailto:${props.workEmail}`}>
            <FaEnvelope style={{ color: '#5C75C3' }} />
        </a>
    </div>
)


export default EmployeeSnippet;