import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import Save from "../Save";

const AssetsInfo = (props) => (

    <div className="assets-page">

        <form className="asset-page-form">
            <legend>Assets and Licenses</legend>
            <button className="addNewButton" onClick={props.handleAddAsset}>NEW ASSET</button>

            {props.state.assets.map((item, index) =>
                <div className="asset-line">

                    <div className="category-input">
                        <h3>Category</h3>
                        <input
                            type="text"
                            name="category"
                            className={index}
                            value={item.category}
                            onChange={props.handlers.assetChange}
                            placeholder="Electronics"
                        />
                    </div>

                    <div className="description-input">
                        <h3>Description</h3>
                        <input
                            type="text"
                            name="description"
                            className={index}
                            value={item.description}
                            onChange={props.handlers.assetChange}
                            placeholder="MacBook Pro 16-inch "
                        />
                    </div>

                    <div className="notes-input">
                        <h3>Notes</h3>
                        <input
                            type="text"
                            name="notes"
                            className={index}
                            value={item.notes}
                            onChange={props.handlers.assetChange}
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
                            onChange={props.handlers.assetChange}
                        />
                    </div>

                    <div className="returned-input">
                        <h3>Date Returned</h3>
                        <input
                            type="date"
                            name="dateReturned"
                            className={index}
                            value={item.dateReturned}
                            onChange={props.handlers.assetChange}
                        />
                    </div>

                    <FontAwesomeIcon
                        icon={faTrash}
                        onClick={(event) => props.deleteAsset(event, index)}
                    /><hr></hr>

                </div>
            )}

        </form>
    </div>
)

export default AssetsInfo;