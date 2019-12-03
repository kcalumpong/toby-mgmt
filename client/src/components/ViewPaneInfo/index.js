import React, { Fragment } from "react";
import "./style.css";
import PersonalInfo from "../PersonalInfo";
import JobInfo from "../JobInfo";
import AssetsInfo from "../AssetsInfo";
import DocumentsInfo from "../DocumentsInfo";
import Save from "../Save";

const enumObj = {
    personal: PersonalInfo,
    job: JobInfo,
    assets: AssetsInfo,
    documents: DocumentsInfo
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