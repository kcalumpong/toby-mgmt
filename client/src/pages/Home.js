import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Navtabs from "../components/Navtabs";
import API from "../utils/API";
import Profile from "../components/Profile";
import "../App.css";

class Home extends Component {
    state = {
        loggedIn: false,
        loading: true,
        employees: []
    }

    componentDidMount() {
        this.checkAuth();
        API.findAllProfiles()
            .then(res => res.json())
            .then(data => 
                data.map(item => (
                {
                    id: item.id,
                    name: item.firstName + " " + item.lastName,
                    title: item.title,
                    img: item.profilePic
                }
            )))
            .then(data => this.setState({ employees: data }))
            .catch(err => console.log(err))
    }

    checkAuth() {
        API.checkAuth()
            .then(res => {
                if (res.status === 200) {
                    this.setState({ loggedIn: true, loading: false });
                } else {
                    this.setState({ loading: false });
                }
            })
            .catch(() => this.setState({ loading: false }))
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        if (!this.state.loggedIn) {
            return <Redirect to='/login' />
        }
        return (
            <div className="home-cover">
                <Navtabs />
                <div className="greeting">
                <h4>TOBY Management</h4>
                <p>Select any employee to view their information.</p>
                </div>
                
                
                <div className="individuals-container">
                {console.log(this.state)}
                    {this.state.employees.map(item => (
                        <Profile
                            id={item.id}
                            name={item.name}
                            title={item.title}
                            img={item.img}
                            handleLinkClick={this.props.handleLinkClick}
                            handleSaveButton={this.props.handleSaveButton}
                        />
                    ))}

                </div>
            </div>
            
            
        )
    }
}

export default Home;