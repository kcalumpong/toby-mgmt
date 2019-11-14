import React, { Component } from "react";
import "../../App.css";
import Profile from "../Profile";
// import Employees from "./Employees";

// componentWillMount() {

// }


class Home extends Component {

    state = {
        employees: [
            {id: "0", name: "kristina", image: "https://i.ytimg.com/vi/g_YScGe7WYo/hqdefault.jpg"},
            {id: "1", name: "daria", image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png"}
        ]
    }

    render() {
        return (
            <div className="home-cover">
                <h3 className="greeting">Welcome to TOBY</h3>
                <h4>Employee List</h4>
                <h5>Select any employee to begin</h5>
                <div className="individuals-container">
                    {this.state.employees.map(item => (
                        <Profile
                            id={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    ))}
                    {/* <Profile
                        // key={`individuals-${item}`}
                        // id={props.state.id}
                        
                        // middleName={props.middlename}
                        // lastName={props.lastname}
                        // title={props.title}
                    // img={item.img}
                    /> */}
                </div>
            </div>
        )

    }
}

export default Home;

