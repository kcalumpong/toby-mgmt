import React, { Component } from "react";
import "../../App.css";
import Profile from "../Profile";
// import Employees from "./Employees";

class Home extends Component {

    state = {
        employees: [
            // {
            //     id: 1,
            //     name: "",
            //     title: "",
            //     img: ""
            // }
        ]
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random/5")
            .then(res => res.json())
            .then(data => data.message.map(item => (
                {
                    id: 1,
                    name: "dog",
                    title: "good boy",
                    img: item
                }
            )))
            .then(data => this.setState({ employees: data }))
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
                            title={item.title}
                            img={item.img}
                        />
                    ))}
                    {console.log(this.state)}
                    {/* <Profile
                        key={`individuals-${item}`}
                        id={props.state.id}
                        
                        middleName={props.middlename}
                        lastName={props.lastname}
                        title={props.title}
                        img={item.img}
                    /> */}
                </div>
            </div>
        )

    }
}

export default Home;

