import React, { Component} from "react";
import "../../App.css";
import Profile from "../Profile";


class Home extends Component {
    state = {
        employee:[]
    }

    componentDidMount(){
    let employeeLocal = JSON.parse( localStorage.getItem("personal"))
        this.setState({
            employee: employeeLocal
        })
    }

    render() {

        return(
        <div className="home-cover">
            <h3 className="greeting">Welcome to TOBY</h3>
            <h4>Employee List</h4>
            <h5>Select any employee to begin</h5>
            <div className="individuals-container">
                {/* {this.state.employee.map(item => (
                    <Profile
                        key={`individuals-${item}`}
                        id={item.id}
                        name={item.name}
                        title={item.title}
                        img={item.img}
                    />
                ))} */}
            </div>
        </div>
)
    }
}



export default Home;

