import React from "react"
import { Link } from "react-router-dom";
import "./style.css"

const Navtabs = () => {
    return (
        <div>
        <ul className="nav">
        <img className="placeholder-logo" alt= "placeholder" src="./images/placeholder-logo.jpeg"></img>
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/employees" className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}>
                    Employees
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
                    Log Out
                </Link>
            </li>
        </ul>
        </div>
    );
}


export default Navtabs;