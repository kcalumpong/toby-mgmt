import React, { Component, Fragment } from "react";
import ProfileNav from "../ProfileNav";
import ViewPane from '../ViewPane';

class Employees extends Component {
    state = {
        currentSection: "personal",
        personal: {
            employeeNumber: "",
            status: "",
            genderInput: "",
            firstName: "",
            middleName: "",
            lastName: "",
            month: "",
            day: "",
            year: "",
            streetAddress: "",
            city: "",
            state: "",
            zipcode: "",
            socialSecurity: "",
            emergencyContactNameOne: "",
            emergencyContactPhoneOne: "",
            emergencyContactNameTwo: "",
            emergencyContactPhoneTwo: ""
        },
        job: {
            hireDate: "",
            status: "",
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: "",
            compensationDate: "",
            payRate: 0,
            payType: "",
            paySchedule: "",
            changeReason: ""
        },
        assets: {

        },
        documents: {

        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = event.target;
        this.setState({ currentSection: id });
        console.log("This state", this.state)
    }

    // handleBtnClick = (event) => {
    // event.preventDefault();
    // console.log("This state ", this.state);
    // let emp = JSON.parse(localStorage.getItem("personal"))
    // if (!emp) {
    //   emp = []
    // }
    // emp.push(this.state)
    // localStorage.setItem("personal", JSON.stringify(emp))

    // call backedn and send the info inside of this.state // update DB
    // console.log("-save:", this.state.department)
  // }

    handleInputChange = (event) => {
        // console.log(this.state);
        // const { class, name, value } = event.target;
        const section = event.target.className;
        const key = event.target.name;
        const value = event.target.value;
        console.log(section, key, value);
        this.setState({ [section]: { [key]: value } });
        // this.setState({ [name]: value });
    }

    render() {
        return (
            <Fragment>
                <ProfileNav handleBtnClick={this.handleBtnClick} />
                <ViewPane
                    state={this.state}
                    currentSection={this.state.currentSection}
                    handleInputChange={this.handleInputChange}
                />
            </Fragment>
        )
    }
}


export default Employees;