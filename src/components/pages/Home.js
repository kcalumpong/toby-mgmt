import React from "react";
import "../../App.css";
import Profile from "../Profile";

const Home = (props) => (
    <div className="home-cover">
        <h3 className="greeting">Welcome to TOBY</h3>
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

