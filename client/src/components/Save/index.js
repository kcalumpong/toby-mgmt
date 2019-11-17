import React from "react";
import "./style.css";

const saveButton = () => {
    console.log("Button Clicked")
}

const Save = () => (
    
    <div>
        <button onClick={saveButton}>Save</button>
    </div>
)

export default Save;