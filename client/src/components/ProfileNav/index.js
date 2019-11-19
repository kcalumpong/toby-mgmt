import React from "react";
import "./style.css";

const ProfileNav = (props) => {
    return (
        <div className="side-nav">
           
            <button
            id="personal"
            className= "btn btn-personal"
            onClick={(e) => props.handleTabClick(e)}>
            PERSONAL</button>
           
            <button
            id="job"
            className= "btn btn-job"
            onClick={(e) => props.handleTabClick(e)}>
            JOB</button>
           
            <button
            id="assets"
            className= "btn btn-assets"
            onClick={(e) => props.handleTabClick(e)}>
            ASSETS</button>
            
            <button
            id="documents"
            className= "btn btn-documents"
            onClick={(e) => props.handleTabClick(e)}>
            DOCUMENTS</button>

        </div>
    )
}

export default ProfileNav;