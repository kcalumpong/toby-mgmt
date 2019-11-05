import React from "react";
import "./style.css";
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';


const Assets = () => {
    return (
        <div className="assets-page">
            <button className="assets-form-button" form="assets-page-form">ADD NEW</button>
            <form className="asset-page-form">


                <h3>Assets</h3>
                <div className="assets-form">

                    <div className="category-input">
                        <h3>Category</h3>
                        <input type="text" name="category" placeholder=""></input>
                    </div>

                    <div className="description-input">
                        <h3>Description</h3>
                        <input type="text" name="description" placeholder=""></input>
                    </div>

                    <div className="notes-input">
                        <h3>Notes</h3>
                        <input type="text" name="notes" placeholder=""></input>
                    </div>

                    <div className="assigned-input">
                        <h3>Date Assigned</h3>
                        <input type="date" name="date-assigned"></input>
                    </div>

                    <div className="returned-input"></div>
                    <h3>Date Returned</h3>
                    <input type="date" name="date-returned"></input>
                    <FaEdit />
                    <FaRegTrashAlt />
                </div>

            </form>
        </div>
    )
}

export default Assets;