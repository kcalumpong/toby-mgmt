import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const Job = (props) => (
    <div className="job-page">
        <form>
            <div className="hire-and-status">
                <legend>Employment</legend>

                <div className="employeeNumInput">
                    <h3>Emp #</h3>
                    <input
                        type="text"
                        name="employeeNumber"
                        // className="job"
                        className="employment employeeNumber"
                        value={props.state.job.employeeNumber}
                        onChange={props.handlers.jobChange}
                        placeholder="#"
                    />
                </div>

                <div className="hireInput">
                    <h3>Hire Date</h3>
                    <input
                        type="date"
                        name="hireDate"
                        // className="job"
                        // data-index={index}
                        className="employment hireDate"
                        value={props.state.job.hireDate}
                        onChange={props.handlers.jobChange}
                    />
                </div>

                <div className="statusInput">
                    <h3>Status</h3>
                    <select
                        type="select"
                        name="status"
                        // className="job"
                        className="employment"
                        value={props.state.job.status}
                        onChange={props.handlers.jobChange}
                    >
                        <option name="active">Active</option>
                        <option name="notActive">Not Active</option>
                    </select>
                </div>

            </div>

            <hr />

            {/* Beginning Add New */}

            <div className="job-information">
                <legend>Job Information</legend>
                <button className="addNewJob" onClick={props.handleAddJob}>ADD NEW</button>
                {props.state.job.jobInformation.map((item, index) =>
                    <div className="job-info-input">
                        <div className="effective-date-input">
                            <h3>Effective Date</h3>
                            <input
                                type="date"
                                name="employmentDate"
                                className={index}
                                value={item.employmentDate}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>

                        <div className="dept-input">
                            <h3>Department</h3>
                            <input
                                type="text"
                                name="department"
                                className={index}
                                value={item.department}
                                onChange={(e) => props.handlers.jobChange(e, index)}
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
                                onChange={(e) => props.handlers.jobChange(e, index)}
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
                                onChange={(e) => props.handlers.jobChange(e, index)}
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
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>
                        <FontAwesomeIcon
                        icon={faTrash}
                        onClick={(event) => props.deleteJob(event, index)}
                        />
                       
                    </div>
                )}
            </div>

            <hr/>

            {/* Compensation */}

            <div className="compensation">
                <legend>Compensation</legend>
                <button className="addComp" onClick={props.handleAddJob}>ADD NEW</button>

                {props.state.job.compensation.map((item, index) =>
                    <div className="compensation-input">

                        <div className="effective-date-input-two">
                            <h3>Effective Date</h3>
                            <input
                                type="date"
                                name="compensationDate"
                                className={index}
                                value={item.compensationDate}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>

                        <div className="hourly-pay-rate">
                            <h3>Annual Salary</h3>
                            <input
                                type="text"
                                name="hourlyPayRate"
                                className={index}
                                value={item.hourlyPayRate}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>

                        <div className="salary-pay-rate">
                            <h3>Hourly Pay</h3>
                            <input
                                type="text"
                                name="salaryPayRate"
                                className={index}
                                value={item.salaryPayRate}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>

                        <div className="pay-schedule">
                            <h3>Pay Schedule</h3>
                            <input
                                type="text"
                                name="paySchedule"
                                className={index}
                                value={item.paySchedule}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                            />
                        </div>

                        <div className="change-reason">
                            <h3>Change Reason</h3>
                            <input
                                type="text"
                                name="changeReason"
                                className={index}
                                value={item.changeReason}
                                onChange={(e) => props.handlers.jobChange(e, index)}
                                placeholder="Promotion"
                            />
                        </div>
                        <FontAwesomeIcon
                        icon={faTrash}
                        // className="deleteJob"
                        onClick={(event) => props.deleteAsset(event, index)}
                        />
                    </div>
                )}
            </div>
            {/* End of Add New */}
        </form>
    </div >
)


export default Job;