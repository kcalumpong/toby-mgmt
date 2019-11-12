import React from "react"
import { Link } from "react-router-dom";
import "./style.css";

const Navtabs = () => {
    return (
        <nav>
            <ul className="nav-list">
                <div className="nav-img-container">
                    <img className="placeholder-logo" alt= "placeholder" src="./images/placeholder-logo.jpeg"></img>
                </div>
                <div className="nav-link-container">
                    <li className="nav-item">
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                            Home
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/employees" className={window.location.pathname === "/employees" ? "nav-link active" : "nav-link"}>
                            Add Employee
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/logout" className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
                            Log Out
                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}


export default Navtabs;