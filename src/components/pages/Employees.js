import React, { Component } from "react";
import ProfileNav from "../ProfileNav";
import Personal from "../Personal";
import Job from "../Job";
import Assets from "../Assets"
import Documents from "../Documents"

const enumObj = {
    personal: Personal,
    job: Job,
    assets: Assets,
    documents: Documents
};

class Employees extends Component {
    state = {
        currentSection: "personal"
    };


    renderView = () => {
        const ComponentName = enumObj[this.state.currentSection];
        return <ComponentName />
    }

    handleBtnClick = (event) => {
        const { id } = event.target;
        this.setState({ currentSection: id });
    }

    render() {
        return (
            <div>
                <ProfileNav handleBtnClick={this.handleBtnClick} />
                {this.renderView()}
            </div>
        )
    }
}


export default Employees;