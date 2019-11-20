import React, { Component} from "react";
import { Redirect } from 'react-router-dom';
import Navtabs from "../components/Navtabs";
import API from "../utils/API";
// import Profile from "../components/Profile";
import "../App.css";


class Home extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            loading: true
        };
    }

    componentDidMount() {
        this.checkAuth();
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

    // handleLogout() {
    //     API.logout()
    //         .then(() => this.props.history.push('/login'))
    //         .catch(err => console.error(err));
    // }

    // state = {
    //     employee:[]
    // }

    // componentDidMount(){
    // let employeeLocal = JSON.parse( localStorage.getItem("personal"))
    //     this.setState({
    //         employee: employeeLocal
    //     })
    // }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
          }
          if (!this.state.loggedIn) {
            return <Redirect to='/login' />
          }
        return(
        <div className="home-cover">
               <Navtabs />
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