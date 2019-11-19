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
            countryCode: "",
            phoneNumber: "",
            personalEmail: "",
            workEmail: "",
            ssOne: "",
            ssTwo: "",
            ssThree: "",
            emergencyContactFirstNameOne: "",
            emergencyContactLastNameOne: "",
            emergencyContactPhoneOneCountry: "",
            emergencyContactPhoneOne: "",
            emergencyContactFirstNameTwo: "",
            emergencyContactLastNameTwo: "",
            emergencyContactPhoneTwoCountry: "",
            emergencyContactPhoneTwo: ""
        },
        job: 
            {
            employeeNumber: "",
            hireDate: "",
            status: "Active",
           
            jobInformation: [
                {
                employmentDate: "",
                department: "KRISTINA",
                title: "",
                location: "",
                reportsTo: "",
                },
                {
                employmentDate: "",
                department: "DARIA",
                title: "",
                location: "",
                reportsTo: "",
                }
        ],
            compensation: [{
                compensationDate: "",
                hourlyPayRate: 0,
                salaryPayRate: 0,
                payType: "",
                paySchedule: "",
                changeReason: ""
            }]
        },
    
        assets: [
            {
                category: "",
                description: "",
                notes: "",
                dateAssigned: "",
                dateReturned: ""
            },
        ],
        documents: [

        ]
    }

    handleTabClick = (event) => {
        this.setState({ currentSection: event.target.id });
    }

    handlePersonalChange = (event) => {
        const updatedPersonal = {...this.state.personal};
        updatedPersonal[event.target.name] = event.target.value;
        this.setState({ personal: updatedPersonal });
    }

    handleJobChange = (event, index) => {
        if (event.target.name ==="employeeNumber" || event.target.name === "hireDate" || event.target.name === "status") {
            const updatedJob = {...this.state.job};
            updatedJob[event.target.name] = event.target.value;
            this.setState({ job: updatedJob });
        } else {
            const updatedJob = {...this.state.job};
            updatedJob[event.target.className][index][event.target.name] = event.target.value;
            this.setState({ job: updatedJob });
        }
    }

    handleAssetsChange = (event) => {
        const updatedAssets = [...this.state.assets];
        const index = parseInt(event.target.className);
        const keyName = event.target.name;
        updatedAssets[index][keyName] = event.target.value;
        this.setState({ assets: updatedAssets });
    }

    handleInputChange = (event) => {
        const section = event.target.className;
        const key = event.target.name;
        const value = event.target.value;
        console.log(section, key, value);

        this.setState(prevState => ({
            ...prevState,
            [section]: {
                ...prevState[[section]],
                [key]: value
            }
        }));
        console.log(this.state);
    }

    addAsset = (event) => {
        event.preventDefault();
        const updatedAssets = [...this.state.assets];
        console.log("XXXX", this.state.assets)
        updatedAssets.push({
            category: "",
            description: "",
            notes: "",
            dateAssigned: "",
            dateReturned: ""
        });
        this.setState({ assets: updatedAssets });
    }

    addJob = (event) => {
        event.preventDefault();
          console.log("---hi kristinas>>", this.state.job)
        console.log(event.target);

        if(event.target.className === "addNewJob" ) {
        console.log("add job")

        const updatedJob = this.state.job;

        updatedJob.jobInformation.push({
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: "",
        })

        this.setState({ jobInformation: updatedJob });

        } else if(event.target.className === "addComp" ) {
            // console.log("addcomp")

            const updatedComp = this.state.job;

            updatedComp.compensation.push({
                compensationDate: "",
                hourlyPayRate: 0,
                salaryPayRate: 0,
                payType: "",
                paySchedule: "",
                changeReason: ""
            })
            this.setState({ compensation: updatedComp });
        }
    }

    deleteAsset = (event, index) => {
        event.preventDefault();
        const currentAssets = [...this.state.assets];
        const updatedAssets = currentAssets.filter((item, currentAssetsIndex) => index !== currentAssetsIndex);
        // console.log(updatedAssets);
        this.setState({ assets: updatedAssets})
    }
 
    deleteJob = (event, index) => {
        event.preventDefault();
        console.log(event.target.className)
        console.log(index)


        const theJob = this.state.job;
        const currentJob = [...this.state.job.jobInformation]
        theJob.jobInformation = updatedJob;
        const updatedJob = currentJob.filter((item, currentJobIndex) => index !== currentJobIndex);
        console.log(updatedJob)
       
        this.setState({ job: currentJob })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = event.target;
        this.setState({ currentSection: id });
        console.log("This state", this.state)
    }

    render() {
        return (
            <Fragment>
                <ProfileHeader
                    name={this.state.personal.firstName + " " + this.state.personal.middleName + " " + this.state.personal.lastName}
                    title={this.state.job.jobInformation[0].title}
                     />
                <ProfileNav
                    handleTabClick={this.handleTabClick} />
                <ViewPane
                    state={this.state}
                    currentSection={this.state.currentSection}
                    deleteAsset={this.deleteAsset}
                    deleteJob={this.deleteJob}

                    handlers={{
                        personalChange: this.handlePersonalChange,
                        jobChange: this.handleJobChange,
                        assetChange: this.handleAssetsChange,
                    }}
                    handleAddJob={this.addJob}
                    handleAddComp={this.addComp}
                    handleAddAsset={this.addAsset}
                />
                <EmployeeSnippet
                    status={this.state.job.status}
                    department={this.state.job.jobInformation[0].department}
                    location={this.state.job.jobInformation[0].location}
                    phoneNumber={this.state.personal.phoneNumber}
                    emailAddress={this.state.personal.emailAddress}
                />
                <Profile
                    firstName={this.state.personal.firstName}
                    middleName={this.state.personal.middleName}
                    lastName={this.state.personal.lastName}
                    title={this.state.job.jobInformation[0].title}
                />
            </Fragment>
        )
    }
}


export default Employees;