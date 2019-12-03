import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Profile = (props) => (
    <div className = "individuals-subcontainer">

        {/* <img 
            alt={props.name}
            src={props.img}
            className="images"
        /> */}
        <img className="avatar" src="../../../images/avatar.png" alt="avatar"></img>
        {/* <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjF0tC85v_lAhUgGTQIHYBqDwkQjRx6BAgBEAQ&url=https%3A%2F%2Ficon-library.net%2Ficon%2Fdefault-profile-icon-24.html&psig=AOvVaw1Pw71V6ELcJmYsX7Sr6r9z&ust=1574580194252166" alt="avatar"></img> */}
        

        <h3 className="prop-name">{props.firstName}{props.middleName}{props.lastName}</h3>
        <Link to={`/employees/` + props.id} onClick={props.handleLinkClick} id={props.id}><h3 className="prop-name" id={props.id}>{props.name}</h3></Link> 
        <h3 className="prop-title">{props.title}</h3>
    </div>
)

export default Profile;