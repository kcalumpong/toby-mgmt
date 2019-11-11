import React from "react";
import "./style.css";
import EmployeeSnippet from "../EmployeeSnippet";

const ProfileNav = (props) => {
    return (
        <div className="side-nav">
           
            <button
            id="personal"
            className= "btn btn-personal"
            onClick={(e) => props.handleTabClick(e)}>
            Personal</button>
           
            <button
            id="job"
            className= "btn btn-job"
            onClick={(e) => props.handleTabClick(e)}>
            Job</button>
           
            <button
            id="assets"
            className= "btn btn-assets"
            onClick={(e) => props.handleTabClick(e)}>
            Assets</button>
            
            <button
            id="documents"
            className= "btn btn-documents"
            onClick={(e) => props.handleTabClick(e)}>
            Documents</button>

            <EmployeeSnippet />

        </div>
    )
}

export default ProfileNav;