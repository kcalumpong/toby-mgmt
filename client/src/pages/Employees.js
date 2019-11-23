import React, { Component, Fragment } from "react";
import { Redirect } from 'react-router-dom';
import ProfileNav from "../components/ProfileNav";
import ProfileHeader from "../components/ProfileHeader";
import ViewPane from '../components/ViewPane';
import EmployeeSnippet from "../components/EmployeeSnippet";
import Navtabs from "../components/Navtabs";
// import Profile from "../components/Profile";
import Save from "../components/Save";
import API from "../utils/API";

class Employees extends Component {
    state = {
        loggedIn: false,
        loading: true,
        currentSection: "personal",
        personal: {
            genderInput: "",
            firstName: "",
            middleName: "",
            lastName: "",
            month: "",
            day: "",
            year: "",
            workEmail: "",
            personalEmail: "",
            phoneNumber: "",
            streetAddress: "",
            city: "",
            state: "",
            zipcode: "",
            countryCode: "",
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
        job: {
            employeeNumber: "",
            status: "Active",
            hireDate: "",
        },

        jobInformation: [{
            employmentDate: "",
            department: "",
            location: "",
            title: "",
            reportsTo: "",
        }],
        compensation: [{
            compensationDate: "",
            hourlyPayRate: "",
            salaryPayRate: "",
            paySchedule: "",
            changeReason: ""
        }],
        assets: [{
            category: "",
            description: "",
            notes: "",
            dateAssigned: "",
            dateReturned: ""
        },],
        documents: [],
        images: []
    }
  
    componentDidMount() {
        this.checkAuth();
        // fetch(`/api/`)
    }


    handleSaveButton = (event) => {
        event.preventDefault();
        console.log("Save", this.state)
        API.savePersonal({
            personal: this.state.personal,
            job: this.state.job,
            jobInformation: this.state.jobInformation,
            compensation: this.state.compensation,
            assets: this.state.assets
        })
            .then(res => this.props.history.push("/home"))
            .catch(err => console.error(err));
    }
    

    handleTabClick = (event) => {
        this.setState({ currentSection: event.target.id });
    }

    handlePersonalChange = (event) => {
        const updatedPersonal = { ...this.state.personal };
        updatedPersonal[event.target.name] = event.target.value;
        this.setState({ personal: updatedPersonal });
    }

    handleJobChange = (event) => {
        if (event.target.name === "employeeNumber" || event.target.name === "hireDate" || event.target.name === "status") {
            const updatedJob = this.state.job;
            updatedJob[event.target.name] = event.target.value;
            this.setState({ job: updatedJob });
        }

        if (event.target.name === "employmentDate" || event.target.name === "department" || event.target.name === "title" || event.target.name === "location" || event.target.name === "reportsTo") {
            const updatedJobInfo = [...this.state.jobInformation];
            const index = parseInt(event.target.className);
            const keyName = event.target.name;
            updatedJobInfo[index][keyName] = event.target.value;
            this.setState({ jobInformation: updatedJobInfo });
        }

        if (event.target.name === "compensationDate" || event.target.name === "hourlyPayRate" || event.target.name === "salaryPayRate" || event.target.name === "paySchedule" || event.target.name === "changeReason") {
            const updatedComp = [...this.state.compensation];
            const index = parseInt(event.target.className);
            const keyName = event.target.name;
            updatedComp[index][keyName] = event.target.value;
            this.setState({ compensation: updatedComp });
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
        const updatedJob = [...this.state.jobInformation];

        updatedJob.push({
            employmentDate: "",
            department: "",
            title: "",
            location: "",
            reportsTo: "",
        })
        this.setState({ jobInformation: updatedJob });
    }

    addComp = (event) => {
        event.preventDefault();

        const updatedComp = [...this.state.compensation];

        updatedComp.push({
            compensationDate: "",
            hourlyPayRate: 0,
            salaryPayRate: 0,
            payType: "",
            paySchedule: "",
            changeReason: ""
        })
        this.setState({ compensation: updatedComp });
    }

    updateDocuments = (document) => {
        this.setState(prevState => ({
            ...prevState,
            documents: [...prevState.documents, document]
        }));
    }

    updateImages = (image) => {
        this.setState(prevState => ({
            ...prevState,
            images: [...prevState.images, image]
        }));
    }

    deleteAsset = (event, index) => {
        event.preventDefault();
        if (index !== 0) {
            const currentAssets = [...this.state.assets];
            const updatedAssets = currentAssets.filter((item, currentAssetsIndex) => index !== currentAssetsIndex);
            console.log(updatedAssets);
            this.setState({ assets: updatedAssets });
        }
    }

    deleteJob = (event, index) => {
        event.preventDefault();
        if (index !== 0) {
            const currentJob = [...this.state.jobInformation]
            const updatedJob = currentJob.filter((item, currentJobIndex) => index !== currentJobIndex);
            this.setState({ jobInformation: updatedJob });
        }
    }

    deleteComp = (event, index) => {
        event.preventDefault();
        if (index !== 0) {
            const currentComp = [...this.state.compensation]
            const updatedComp = currentComp.filter((item, currentJobIndex) => index !== currentJobIndex);
            this.setState({ compensation: updatedComp });
        }
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
            .catch(() => this.setState({ loading: false }));
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        if (!this.state.loggedIn) {
            return <Redirect to='/login' />
        }
        return (
            <Fragment>
                <Navtabs />
                <ProfileHeader
                    images={this.state.images}
                    updateImages={this.updateImages}
                />
                <ProfileNav
                    handleTabClick={this.handleTabClick}
                />
                <ViewPane
                    state={this.state}
                    currentSection={this.state.currentSection}
                    deleteAsset={this.deleteAsset}
                    deleteJob={this.deleteJob}
                    deleteComp={this.deleteComp}

                    handlers={{
                        personalChange: this.handlePersonalChange,
                        jobChange: this.handleJobChange,
                        assetChange: this.handleAssetsChange,
                    }}
                    handleAddJob={this.addJob}
                    handleAddComp={this.addComp}
                    handleAddAsset={this.addAsset}
                    documents={this.state.documents}
                    updateDocuments={this.updateDocuments}
                />
                <EmployeeSnippet
                    status={this.state.job.status}
                    department={this.state.jobInformation[0].department}
                    location={this.state.jobInformation[0].location}
                    title={this.state.jobInformation[0].title}
                    phoneNumber={this.state.personal.phoneNumber}
                    workEmail={this.state.personal.workEmail}
                />

                <Save
                    handleSaveButton={this.handleSaveButton}
                />
            </Fragment>
        )
    }
}

export default Employees;