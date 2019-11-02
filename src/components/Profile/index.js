import React from "react";
import "./style.css";

const Profile = (props) => {
    return (
        <div className = "individuals-subcontainer">
            <img 
                alt={props.name}
                src={props.img}
                className="images"
            />
            <h3 className="prop-name">{props.name}</h3>
            <h3 className="prop-title">{props.title}</h3>
        </div>
    )
}
export default Profile;