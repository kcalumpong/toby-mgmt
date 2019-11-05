import React, { Fragment } from "react";
import "./style.css";
import Personal from "../Personal";
import Job from "../Job";
import Assets from "../Assets";
import Documents from "../Documents";

const enumObj = {
    personal: Personal,
    job: Job,
    assets: Assets,
    documents: Documents
};

const renderView = (currentSection) => {
    const ComponentName = enumObj[currentSection];
    return <ComponentName />
}

const ViewPane = (props) => (
    <Fragment>
        {renderView(props.currentSection)}
    </Fragment>
)

export default ViewPane;