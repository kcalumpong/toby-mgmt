import React from "react";
// import ProfileHeader from "../ProfileHeader";
import "./style.css";

/* <ProfileHeader
    // name={this.state.department}
    title={this.state.title}
/> */

const Job = (props) => (

    <div className="job-page">

        <form name="job-form" onSubmit={props.handleSubmit}>

            <div className="hire-and-status">
                <h4>Employment</h4>

                <div className="hire-input">
                    <h3>Hire Date</h3>
                    <input
                        type="date"
                        name="hireDate"
                        value={props.state.job.hireDate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="active-input">
                    <h3>Active</h3>
                    <select
                        type="select"
                        value={props.state.job.status}
                        onChange={props.handleInputChange}
                    >
                    <option name="active">Active</option>
                    <option name="notActive">Not Active</option>
                    </select>
                </div>
            </div>

            <div className="job-info-input">

                <div className="effective-date-input">
                    <h4>Job Information</h4>
                    <h3>Effective Date</h3>
                    <input 
                        type="date"
                        name="employmentDate"
                        value={props.state.job.employmentDate} 
                        onChange={props.handleInputChange}
                    />    
                </div>

                <div className="dept-input">
                    <h3>Dept</h3>
                    <input 
                        type="text"
                        name="department"
                        value={props.state.job.department} 
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="title-input">
                    <h3>Title</h3>
                    <input 
                        type="text"
                        name="title"
                        value={props.state.job.title} 
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="location-input">
                    <h3>Location</h3>
                    <input 
                        type="text"
                        name="location"
                        value={props.state.job.location} 
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="reports-to-input">
                    <h3>Reports to</h3>
                    <input 
                        type="text"
                        name="reportsTo"
                        value={props.state.job.reportsTo} 
                        onChange={props.handleInputChange}
                    />
                </div>

            </div>

            <div className="compensation-input">

                <div className="effective-date-input-two">
                    <h4>Compensation</h4>
                    <h3>Effective Date</h3>
                    <input 
                        type="text"
                        name="compensationDate"
                        value={props.state.job.compensationDate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="pay-rate">
                    <h3>Pay Rate</h3>
                    <input 
                        type="text"
                        name="payRate"
                        value={props.state.job.payRate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="pay-type">
                    <h3>Pay Type</h3>
                    <input
                        type="text"
                        name="payType"
                        value={props.state.job.payType}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="pay-schedule">
                    <h3>Pay Schedule</h3>
                    <input 
                        type="text"
                        name="paySchedule"
                        value={props.state.job.paySchedule}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="change-reason">
                    <h3>Change Reason</h3>
                    <input 
                        type="text"
                        name="changeReason"
                        value={props.state.job.changeReason}
                        onChange={props.handleInputChange}
                    />
                </div>

            </div>

        </form>
        <button className="job-form-button" form="job-form" name="job-form-submit">SAVE</button>
    </div >
)

export default Job;