import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Profile = (props) => (
    <div className = "individuals-subcontainer">
        <img 
            alt={props.name}
            src={props.img}
            className="images"
        />
        {/* <h3 className="prop-name">{props.firstName}{props.middleName}{props.lastName}</h3> */}
        <Link to={`/employees/${props.id}`}><h3 className="prop-name">{props.name}</h3></Link> 
        {/* <h3 className="prop-title">{props.title}</h3> */}
        {/* <img src={props.image} alt="An employee" /> */}
    </div>
)

export default Profile;