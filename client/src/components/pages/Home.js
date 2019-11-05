import React from "react";
import "../../App.css";
import Profile from "../Profile";

const Home = (props) => (
    <div className="home-cover">
        <h3 className="greeting">Welcome to TOBY</h3>
        <h4>Employee List</h4>
        <h5>Select any employee to begin</h5>
        <div className="individuals-container">
            {props.individuals.map(item => (
                <Profile 
                    id={item.id}
                    name={item.name}
                    title={item.title}
                    img={item.img}
                /> 
            ))}
        </div>
    </div>
)


export default Home;

