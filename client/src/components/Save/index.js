import React from "react";
import "./style.css";

// const saveButton = () => {
//     alert("Button Clicked")
// }

const Save = (props) => (
    
    <div>
        <button className="save-button" onClick={props.handleSaveButton}>SAVE</button>
    </div>
)

export default Save;