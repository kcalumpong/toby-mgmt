import React from "react";
import "./style.css";

const ProfileHeader = (props) => (
        <div className="profile-header">
            <img className="profile-pic" alt= "profile-pic" src="../images/kristina.jpeg"></img>
            <div className="name-and-title">
                <h3 className="profile-name">{props.name}</h3>
                <h3 className="profile-title">{props.title}</h3>
            </div>
         </div>
    )


export default ProfileHeader;
