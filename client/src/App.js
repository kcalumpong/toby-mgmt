import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import Navtabs from "./components/Navtabs"
import Home from "./pages/Home";
import Employees from "./pages/Employees";
// import Logout from "./pages/Logout";
import individuals from "./individuals.json";
// import Profile from "./components/Profile";
import './App.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

class App extends Component {

  state = {
    individuals
  }

  componentDidMount() {
    this.setState({ individuals: (this.state.individuals) })
  }

  render() {
    return (
        // <Router>
        //     <Navtabs />
            // <Route
            //   exact path="/"
            //   render={(props) =>
            //     <Home {...props} individuals={this.state.individuals} />}
            // />
        //     <div className="grid">
        //       <Route exact path="/employees" component={Employees} />
        //     </div>
        //     <Route exact path="/logout" component={Logout} />
        // </Router>
        <Router>
        <div>
          <Switch>
          {/* <Navtabs /> */}
            <Route exact path="/" component={Signup} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            {/* <Route
              exact path="/home"
              render={(props) =>
                <Home {...props} individuals={this.state.individuals} />}
            /> */}
            
            <div className="grid">
            <Route exact path="/employees" component={Employees} />
            </div>
            {/* <Route exact path="/logout" component={Login} /> */}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;