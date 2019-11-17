import React from "react";
import "./style.css";
import { FaRegTrashAlt } from 'react-icons/fa';

const Job = (props) => (

    <div className="job-page">

        <form name="job-form">

            <div className="hire-and-status">
                <h4>Employment</h4>
{/* 
                <div className="employeeNumInput">
                    <h3>Employee #</h3>
                    <input
                        type="text"
                        name="employeeNumber"
                        className="job"
                        value={props.state.job.employeeNumber}
                        onChange={props.handleInputChange}
                        placeholder="#"
                    />
                </div> */}

                {/* <div className="hire-input">
                    <h3>Hire Date</h3>
                    <input
                        type="date"
                        name="hireDate"
                        className="job"
                        value={props.state.job.hireDate}
                        onChange={props.handleInputChange}
                    />
                </div> */}

                {/* <div className="statusInput">
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
                </div> */}

            </div>

            <hr />

            {/* Beginning Add New */}
            <legend>Job Information</legend>
            <button className="addNewJob" onClick={props.handleAddJob}>ADD NEW</button>

            {props.state.job.map((item, index) =>
                <div className="job-info-input">

                    <div className="effective-date-input">

                        <h3>Effective Date</h3>
                        <input
                            type="date"
                            name="employmentDate"
                            className={index}
                            value={item.employmentDate}
                            onChange={props.handleInputChange}
                        />
                    </div>

                    <div className="dept-input">
                        <h3>Department</h3>
                        <input
                            type="text"
                            name="department"
                            className={index}
                            value={item.department}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="title-input">
                        <h3>Title</h3>
                        <input
                            type="text"
                            name="title"
                            className={index}
                            value={item.title}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="location-input">
                        <h3>Location</h3>
                        <input
                            type="text"
                            name="location"
                            className={index}
                            value={item.location}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="reports-to-input">
                        <h3>Reports to</h3>
                        <input
                            type="text"
                            name="reportsTo"
                            className={index}
                            value={item.reportsTo}
                            onChange={props.handleInputChange}
                        />
                    </div>

                    <FaRegTrashAlt />

                </div>

            )}

            {/* End of Add New */}

            <hr />

            <div className="compensation-input">
            <button className="addNewJobTwo" onClick={props.handleAddJobTwo}>ADD NEW</button>
{/* 
                <div className="effective-date-input-two">
                    <legend>Compensation</legend>
                    <h3>Effective Date</h3>
                    <input
                        type="date"
                        name="compensationDate"
                        className="job"
                        value={props.state.job.compensationDate}
                        onChange={props.handleInputChange}
                    />
                </div> */}

                {/* <div className="hourly-pay-rate">
                    <h3>Annual Salary</h3>
                    <input
                        type="text"
                        name="hourlyPayRate"
                        className="job"
                        value={props.state.job.hourlyPayRate}
                        onChange={props.handleInputChange}
                    />
                </div> */}

                {/* <div className="salary-pay-rate">
                    <h3>Hourly Pay</h3>
                    <input
                        type="text"
                        name="salaryPayRate"
                        className="job"
                        value={props.state.job.salaryPayRate}
                        onChange={props.handleInputChange}
                    />
                </div> */}
{/* 
                <div className="pay-schedule">
                    <h3>Pay Schedule</h3>
                    <input
                        type="text"
                        name="paySchedule"
                        className="job"
                        value={props.state.job.paySchedule}
                        onChange={props.handleInputChange}
                    />
                </div> */}

                {/* <div className="change-reason">
                    <h3>Change Reason</h3>
                    <input
                        type="text"
                        name="changeReason"
                        className="job"
                        value={props.state.job.changeReason}
                        onChange={props.handleInputChange}
                        placeholder="Promotion"
                    />
                </div> */}

            </div>

        </form>

    </div >
)

export default Job;