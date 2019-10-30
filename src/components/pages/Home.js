import React from "react";
import Profile from "../Profile";

const Home = (props) => {
    return (
        <div className="individuals-container">
        <h3 className="greeting">Welcome to TOBY</h3>

            {props.individuals.map(item => (
                <Profile 
                    id={item.id}
                    name={item.name}
                    title={item.title}
                    img={item.img}
                /> 
            ))}
        </div>
    )
}


export default Home;

