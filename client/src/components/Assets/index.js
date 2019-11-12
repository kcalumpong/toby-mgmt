import React from "react";
import "./style.css";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

const Assets = (props) => (
    
    <div className="assets-page">
        {/* <button className="assetsFormButton" form="assets-page-form" name="add-new-button" onClick={(e) => this.addRow(id, e)}>ADD NEW</button> */}
        <button className="assetsFormButton" form="assets-page-form" name="add-new-button" >ADD NEW</button>

        <form className="asset-page-form">
            <h4>Assets</h4>
            <div className="assets-form">

                <div className="category-input">
                    <h3>Category</h3>
                    <input
                        type="text"
                        name="category"
                        className="assets"
                        value={props.state.assets.category}
                        onChange={props.handleInputChange}
                        placeholder=""
                    />
                </div>

                <div className="description-input">
                    <h3>Description</h3>
                    <input
                        type="text"
                        name="description"
                        className="assets"
                        value={props.state.assets.description}
                        onChange={props.handleInputChange}
                        placeholder=""
                    />
                </div>

                <div className="notes-input">
                    <h3>Notes</h3>
                    <input
                        type="text"
                        name="notes"
                        className="assets"
                        value={props.state.assets.notes}
                        onChange={props.handleInputChange}
                        placeholder=""
                    />
                </div>

                <div className="assigned-input">
                    <h3>Date Assigned</h3>
                    <input
                        type="date"
                        name="dateAssigned"
                        className="assets"
                        value={props.state.assets.dateAssigned}
                        onChange={props.handleInputChange}
                    />
                </div>

                <div className="returned-input">
                    <h3>Date Returned</h3>
                    <input
                        type="date"
                        name="dateReturned"
                        className="assets"
                        value={props.state.assets.dateReturned}
                        onChange={props.handleInputChange}
                    />
                </div>
                    <FaEdit />
                    <FaRegTrashAlt />
            </div>
        </form>
    </div>
)

export default Assets;