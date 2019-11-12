import React from "react";
import "./style.css";

const Job = (props) => (

    <div className="job-page">

        <form name="job-form">

            <div className="hire-and-status">
                <h4>Employment</h4>

                <div className="employeeNumInput">
                    <h3>Employee #</h3>
                    <input
                        type="text"
                        name="employeeNumber"
                        className="personal"
                        value={props.state.job.employeeNumber}
                        onChange={props.handleInputChange}
                        placeholder="#"
                    />

                </div>

                <div className="hire-input">
                    <h3>Hire Date</h3>
                    <input
                        type="date"
                        name="hireDate"
                        className="job"
                        value={props.state.job.hireDate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="statusInput">
                    <h3>Status</h3>
                    <select
                        type="select"
                        name="status"
                        className="job"
                        value={props.state.job.status}
                        onChange={props.handleInputChange}
                    >
                        <option name="active">Active</option>
                        <option name="notActive">Not Active</option>
                    </select>
                </div>

            </div>

            <hr />

            <div className="job-info-input">

                <div className="effective-date-input">
                    <h4>Job Information</h4>
                    <button>Add New</button>
                    <h3>Effective Date</h3>
                    <input
                        type="date"
                        name="employmentDate"
                        className="job"
                        value={props.state.job.employmentDate}
                        onChange={props.handleInputChange}
                    />
                    {/* {(props.state.personal.jobInformation)map(item => {
                        <h3>Effective Date</h3>
                        <input 
                            type="date"
                            name="employmentDate"
                            className="job"
                            value={props.state.job.employmentDate} 
                            onChange={props.handleInputChange}
                        />
                    })} */}
                    <h3>Effective Date</h3>
                    <input
                        type="date"
                        name="employmentDate"
                        className="job"
                        value={props.state.job.employmentDate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="dept-input">
                    <h3>Dept</h3>
                    <input
                        type="text"
                        name="department"
                        className="job"
                        value={props.state.job.department}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="title-input">
                    <h3>Title</h3>
                    <input
                        type="text"
                        name="title"
                        className="job"
                        value={props.state.job.title}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="location-input">
                    <h3>Location</h3>
                    <input
                        type="text"
                        name="location"
                        className="job"
                        value={props.state.job.location}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="reports-to-input">
                    <h3>Reports to</h3>
                    <input
                        type="text"
                        name="reportsTo"
                        className="job"
                        value={props.state.job.reportsTo}
                        onChange={props.handleInputChange}
                    />
                </div>

            </div>

            <hr />

            <div className="compensation-input">

                <div className="effective-date-input-two">
                    <h4>Compensation</h4>
                    <button>Add New</button>
                    <h3>Effective Date</h3>
                    <input
                        type="date"
                        name="compensationDate"
                        className="job"
                        value={props.state.job.compensationDate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="hourly-pay-rate">
                    <h3>Annual Salary</h3>
                    <input
                        type="text"
                        name="hourlyPayRate"
                        className="job"
                        value={props.state.job.hourlyPayRate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="salary-pay-rate">
                    <h3>Hourly Pay</h3>
                    <input
                        type="text"
                        name="salaryPayRate"
                        className="job"
                        value={props.state.job.salaryPayRate}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="pay-type">
                    <h3>Pay Type</h3>
                    <input
                        type="text"
                        name="payType"
                        className="job"
                        value={props.state.job.payType}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="pay-schedule">
                    <h3>Pay Schedule</h3>
                    <input
                        type="text"
                        name="paySchedule"
                        className="job"
                        value={props.state.job.paySchedule}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="change-reason">
                    <h3>Change Reason</h3>
                    <input
                        type="text"
                        name="changeReason"
                        className="job"
                        value={props.state.job.changeReason}
                        onChange={props.handleInputChange}
                    />
                </div>

            </div>

        </form>
        {/* <button className="job-form-button" form="job-form" name="job-form-submit">SAVE</button> */}
    </div >
)

export default Job;