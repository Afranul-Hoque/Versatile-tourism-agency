import React, { useState } from 'react';
import './ManagesOrders.css'

const ManagesOrders = (props) => {
    const { _id, Username, address, packege, phone, Duration } = props.manage;


    // delete user info

    const handleDelete = () => {
        const procced = window.confirm('Are you sure you want to delete?');
        if (procced) {
            const url = `http://localhost:5000/userService/${_id}`;
            fetch(url, {

                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfuly');

                    }
                })
        }
    }
    return (
        <div className=" mt-5">
            <div>

                <div className="card  mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h3 className="card-title">Name: {Username}</h3>
                        <h6>Address: {address}</h6>
                        <span> <span className="cost">Venue: {packege}</span></span>
                        <h4>Contact-Number: {phone}</h4>
                        <span> <span className="duration">
                            Duration: {Duration}</span></span>
                    </div>
                    <div>
                        <span><button className="manage-button mx-3">Update</button></span>
                        <span><button onClick={() => handleDelete(_id)} className="manage-button">Delete</button></span>
                    </div>



                </div>

            </div>

        </div>
    );
};

export default ManagesOrders;