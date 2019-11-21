import React from "react";
import "./style.css";

const saveButton = () => {
    alert("Button Clicked")
}

const Save = () => (
    
    <div>
        <button className="save-button" onClick={saveButton}>SAVE</button>
    </div>
)

export default Save;