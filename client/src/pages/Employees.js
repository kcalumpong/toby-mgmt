import React, { Component, Fragment } from "react";
import ProfileNav from "../components/ProfileNav";
import ProfileHeader from "../components/ProfileHeader";
import ViewPane from '../components/ViewPane';
import EmployeeSnippet from "../components/EmployeeSnippet";

class Employees extends Component {
    state = {
        currentSection: "personal",
        personal: {
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
            phoneNumber: "",
            emailAddress: "",
            socialSecurity: "",
            emergencyContactNameOne: "",
            emergencyContactPhoneOne: "",
            emergencyContactNameTwo: "",
            emergencyContactPhoneTwo: ""
        },
        job: {
            employeeNumber: "",
            status: "Active",
            hireDate: "",
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: "",
            compensationDate: "",
            hourlyPayRate: 0,
            salaryPayRate: 0,
            payType: "",
            paySchedule: "",
            changeReason: ""
        },
        assets: {
            category: "",
            description: "",
            assets: "",
            dateAssigned: "",
            dateReturned: ""
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

    handleTabClick = (event) => {
        this.setState({ currentSection: event.target.id });
    }

    handleInputChange = (event) => {
        const section = event.target.className;
        const key = event.target.name;
        const value = event.target.value;
        console.log(section, key, value);
        // this.setState({ [section]: { [key]: value } });
        this.setState(prevState => ({ 
			...prevState,
			[section]: {
				...prevState[[section]],
				[key]: value
			}
		}));
        console.log(this.state);
    }

    render() {
        return (
            <Fragment>
                <ProfileHeader 
                name={this.state.personal.firstName + " " + this.state.personal.middleName + " " + this.state.personal.lastName} 
                title={this.state.job.title} />
                <ProfileNav 
                    handleTabClick={this.handleTabClick} />
                <ViewPane
                    state={this.state}
                    currentSection={this.state.currentSection}
                    handleInputChange={this.handleInputChange}
                />
                <EmployeeSnippet 
                    status={this.state.job.status}
                    department={this.state.job.department}
                    location={this.state.job.location}
                    phoneNumber={this.state.personal.phoneNumber}
                    emailAddress={this.state.personal.emailAddress}
                />
            </Fragment>
        )
    }
}


export default Employees;