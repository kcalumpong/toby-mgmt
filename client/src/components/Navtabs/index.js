import React from "react"
import { Link } from "react-router-dom";
// import cookie from "react-cookies";
import API from "../../utils/API";
import "./style.css";

const Navtabs = () => {
    const handleLogout = e => {
        e.preventDefault();
        API.logout()
            .then(r => {
                if (r.status === 200) {
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
                    <img className="toby-logo" alt= "logo" src="./images/tobyLogo.png"></img>
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
                        <a
                        id="logout" href="#logout" onClick={handleLogout} className="nav-link">Log out
                        </a>
                    </li>
                </div>
            </ul>
        </nav>
    );
}


export default Navtabs;