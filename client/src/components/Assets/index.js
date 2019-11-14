import React from "react";
import "./style.css";
import { FaRegTrashAlt } from 'react-icons/fa';

const Assets = (props) => (

    <div className="assets-page">
        <button className="addNewButton" onClick={props.handleAddNewButton}>ADD NEW</button>

        <form className="asset-page-form">
            <legend>Assets</legend>

            {props.state.assets.map((item, index) =>
                <div className="assets-form">

                    <div className="category-input">
                        <h3>Category</h3>
                        <input
                            type="text"
                            name="category"
                            className={index}
                            value={item.category}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="description-input">
                        <h3>Description</h3>
                        <input
                            type="text"
                            name="description"
                            className={index}
                            value={item.description}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="notes-input">
                        <h3>Notes</h3>
                        <input
                            type="text"
                            name="notes"
                            className={index}
                            value={item.notes}
                            onChange={props.handleInputChange}
                            placeholder=""
                        />
                    </div>

                    <div className="assigned-input">
                        <h3>Date Assigned</h3>
                        <input
                            type="date"
                            name="dateAssigned"
                            className={index}
                            value={item.dateAssigned}
                            onChange={props.handleInputChange}
                        />
                    </div>

                    <div className="returned-input">
                        <h3>Date Returned</h3>
                        <input
                            type="date"
                            name="dateReturned"
                            className={index}
                            value={item.dateReturned}
                            onChange={props.handleInputChange}
                        />
                    </div>

                    <FaRegTrashAlt />

                </div>
            )}
            
        </form>
    </div>
)

export default Assets;