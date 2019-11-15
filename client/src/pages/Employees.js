import React, { Component, Fragment } from "react";
import ProfileNav from "../ProfileNav";
import ProfileHeader from "../ProfileHeader";
import ViewPane from '../ViewPane';
import Profile from "../Profile";
import EmployeeSnippet from "../EmployeeSnippet";

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
        job: [
            {
            // employeeNumber: "",
            // status: "Active",
            // hireDate: "",
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: "",
           
            // compensationDate: "",
            // hourlyPayRate: 0,
            // salaryPayRate: 0,
            // payType: "",
            // paySchedule: "",
            // changeReason: ""
            },
        ],
        assets: [
            {
                category: "",
                description: "",
                notes: "",
                dateAssigned: "",
                dateReturned: ""
            },
        ],
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
        if (this.state.currentSection === "assets") {
            const updatedAssets = [ ...this.state.assets ];
            const index = parseInt(event.target.className);
            const keyName = event.target.name;
            updatedAssets[index][keyName] = event.target.value;
            this.setState({ assets: updatedAssets });
        }
   
        else if (this.state.currentSection === "job") {
        const updatedJob = [ ...this.state.job ];
        const index = parseInt(event.target.className);
        const keyName = event.target.name;
        updatedJob[index][keyName] = event.target.value;
        this.setState({ job: updatedJob });
        
        } else {
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
    }

    addAsset = () => {
        const updatedAssets = [ ...this.state.assets ];
        updatedAssets.push({
            category: "",
            description: "",
            notes: "",
            dateAssigned: "",
            dateReturned: ""
        });
        this.setState({ assets: updatedAssets });
    }

    addJob = () => {
        const updatedJob = [ ...this.state.job];
        updatedJob.push({
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: ""
        })
        this.setState({ job: updatedJob })
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
                    handleAddNewButton={this.addAsset}
                    handleAddJob={this.addJob}
                />
                <EmployeeSnippet 
                    status={this.state.job.status}
                    department={this.state.job.department}
                    location={this.state.job.location}
                    phoneNumber={this.state.personal.phoneNumber}
                    emailAddress={this.state.personal.emailAddress}
                />
                <Profile 
                    firstName={this.state.personal.firstName}
                    middleName={this.state.personal.middleName}
                    lastName={this.state.personal.lastName}
                    title={this.state.job.title}
                /> 
            </Fragment>
        )
    }
}


export default Employees;