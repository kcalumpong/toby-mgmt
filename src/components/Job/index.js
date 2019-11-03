import React from "react";
import "./style.css";

const Job = () => {
    return (
        <div className="job-page">
            <form name="job-form">
                <button className="job-form-button" form name="job-form">SAVE</button>

                <div className="hire-and-status">
                    <div className="hire-input">
                        <h4>Employment</h4>
                        <h3>Hire Date</h3>
                        <input type="date" name="hire-date"></input>
                    </div>

                    <div className="active-input">
                        <h3>Active</h3>
                        <select>
                            <option value="active" name="status">Active</option>
                            <option value="not-active" name="status">Not Active</option>
                        </select>
                    </div>
                </div>

                <div className="job-info-input">

                    <div className="effective-date-input">
                        <h4>Job Information</h4>
                        <h3>Effective Date</h3>
                        <input type="date" name="effective-date"></input>
                    </div>

                    <div className="dept-input">
                        <h3>Dept</h3>
                        <input type="text" name="dept" placeholder="Marketing"></input>
                    </div>

                    <div className="title-input">
                        <h3>Title</h3>
                        <input type="text" name="title" placeholder="Marketing Director"></input>
                    </div>

                    <div className="location-input">
                        <h3>Location</h3>
                        <input type="text" name="location" placeholder="Location"></input>
                    </div>

                    <div className="reports-to-input">
                        <h3>Reports to</h3>
                        <input type="text" name="location"></input>
                    </div>

                </div>

                <div className="compensation-input">

                    <div className="effective-date-input-two">
                        <h4>Compensation</h4>
                        <h3>Effective Date</h3>
                        <input type="date" name="effective-date"></input>
                    </div>

                    <div className="pay-rate">
                        <h3>Pay Rate</h3>
                        <input type="text" name="payrate"></input>
                    </div>

                    <div className="pay-type">
                        <h3>Pay Type</h3>
                        <input type="text" name="paytype" placeholder="Salary"></input>
                    </div>

                    <div className="pay-schedule">
                        <h3>Pay Schedule</h3>
                        <input type="text" name="paytype" placeholder="Every Two Weeks"></input>
                     </div>

                        <div className="change-reason">
                            <h3>Change Reason</h3>
                            <input type="text" name="paytype" placeholder="Promotion"></input>
                        </div>

                    </div>
    
            </form>

        </div>

    )
}

export default Job;