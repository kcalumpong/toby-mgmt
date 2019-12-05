import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Profile = (props) => (
    <div className = "individuals-subcontainer">
       
        <img className="profilePic" src={props.img}></img>

        <h3 className="prop-name">{props.firstName}{props.middleName}{props.lastName}</h3>
        <Link to={`/employees/` + props.id} onClick={props.handleLinkClick} id={props.id}><h3 className="prop-name-link" id={props.id}>{props.name}</h3></Link> 
        <p className="prop-title">{props.title}</p>
    </div>
)

export default Profile;