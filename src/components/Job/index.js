import React, { Component } from "react";
import "./style.css";

class Job extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            changeReason: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        const target = event.target;
        let name = target.name;
        // const date = target.date,
        let value = target.value;

        this.setState({

            [name]: value

        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.value);
    }

    render() {
        return (
            <form name="job-form" onSubmit={this.handleSubmit}>
                <button className="job-form-button" form name="job-form">SAVE</button>

                <div className="hire-and-status">
                    <div className="hire-input">
                        <h4>Employment</h4>
                        <h3>Hire Date</h3>
                        <input type="date" name="hire-date" value={this.state.hireDate} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="active-input">
                        <h3>Active</h3>
                        <select value={this.state.value} onChange={this.handleInputChange}>
                            <option value="active" name="status">Active</option>
                            <option value="not-active" name="status" >Not Active</option>
                        </select>
                    </div>
                </div>

                <div className="job-info-input">

                    <div className="effective-date-input">
                        <h4>Job Information</h4>
                        <h3>Effective Date</h3>
                        <input type="date" name="hireDate" value={this.state.employmentDate} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="dept-input">
                        <h3>Dept</h3>
                        <input type="text" name="department" value={this.state.department} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="title-input">
                        <h3>Title</h3>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="location-input">
                        <h3>Location</h3>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="reports-to-input">
                        <h3>Reports to</h3>
                        <input type="text" name="reportsTo" value={this.state.reportsTo} onChange={this.handleInputChange}></input>
                    </div>

                </div>

                <div className="compensation-input">

                    <div className="effective-date-input-two">
                        <h4>Compensation</h4>
                        <h3>Effective Date</h3>
                        <input type="date" name="compensationDate" value={this.state.compensationDate} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="pay-rate">
                        <h3>Pay Rate</h3>
                        <input type="text" name="payRate" value={this.state.payRate} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="pay-type">
                        <h3>Pay Type</h3>
                        <input type="text" name="payType" value={this.state.payType} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="pay-schedule">
                        <h3>Pay Schedule</h3>
                        <input type="text" name="paySchedule" value={this.state.paySchedule} onChange={this.handleInputChange}></input>
                    </div>

                    <div className="change-reason">
                        <h3>Change Reason</h3>
                        <input type="text" name="changeReason" value={this.state.changeReason} onChange={this.handleInputChange}></input>
                    </div>

                </div>

            </form>
        )
    }
}

export default Job;