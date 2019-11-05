import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navtabs from "./components/Navtabs"
import Home from "./components/pages/Home";
import Employees from "./components/pages/Employees";
import Logout from "./components/pages/Logout";
import individuals from "./individuals.json";
// import Profile from "./components/Profile";
import './App.css';

class App extends Component {

  state = {
    individuals
  }

  componentDidMount() {
    this.setState({ individuals: (this.state.individuals) })
  }

  render() {
    return (
        <Router>
            <Navtabs />
            <Route
              exact path="/"
              render={(props) =>
                <Home {...props} individuals={this.state.individuals} />}
            />
            <div className="grid">
              <Route exact path="/employees" component={Employees} />
            </div>
            <Route exact path="/logout" component={Logout} />
        </Router>
    )
  }
}

export default App;
