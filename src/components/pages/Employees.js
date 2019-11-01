import React, { Component, Fragment } from "react";
import ProfileNav from "../ProfileNav";
import ProfileHeader from "../ProfileHeader";
import ViewPane from '../ViewPane';

class Employees extends Component {
    state = {
        currentSection: "personal"
    };

    handleBtnClick = (event) => {
        const { id } = event.target;
        this.setState({ currentSection: id });
    }

    render() {
        return (
            <Fragment>
                <ProfileHeader />
                <ProfileNav handleBtnClick={this.handleBtnClick} />
                <ViewPane currentSection={this.state.currentSection} />
            </Fragment>
        )
    }
}


export default Employees;