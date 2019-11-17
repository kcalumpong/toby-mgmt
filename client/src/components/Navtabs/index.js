import React from "react"
import { Link } from "react-router-dom";
import cookie from "react-cookies";
import API from "../../utils/API";
import "./style.css";

const Navtabs = () => {
    const handleLogout = () => {
        API.logout()
            .then(r => {
                if (r.status === 200) {
                    cookie.remove('connect.sid');
                    return r;
                } else {
                    throw new Error('Failed to logout');
                }
            })
            .then(() => window.location.reload())
            .catch(err => console.error(err));
    }
    return (
        <nav>
            <ul className="nav-list">
                <div className="nav-img-container">
                    <img className="placeholder-logo" alt= "placeholder" src="./images/placeholder-logo.jpeg"></img>
                </div>
                <div className="nav-link-container">
                    <li className="nav-item">
                        <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/employees" className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}>
                            Add Employee
                        </Link>
                    </li>

                    <li className="nav-item">
                        {/* <Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
                            Log Out
                        </Link> */}

                        <button id="logout" onClick={handleLogout} className="btn">LOG OUT</button>


                   
                        
                    </li>
                </div>
            </ul>
        </nav>
    );
}


export default Navtabs;