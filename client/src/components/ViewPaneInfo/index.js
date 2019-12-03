import React, { Fragment } from "react";
import "./style.css";
import PersonalInfo from "../PersonalInfo";
import Job from "../Job";
import Assets from "../Assets";
import Documents from "../Documents";
import Save from "../Save";

const enumObj = {
    personal: PersonalInfo,
    job: Job,
    assets: Assets,
    documents: Documents
};

const renderView = (props) => {
    const ComponentName = enumObj[props.currentSection];
    return (
        <div>
            <ComponentName {...props} />
            <Save />
        </div>
    )
}

const ViewPaneInfo = (props) => (
    <Fragment>
        {renderView(props)}
    </Fragment>
)

export default ViewPaneInfo;