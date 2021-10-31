import React, { useEffect, useState } from 'react';
import ManagesOrders from '../ManagesOrders/ManagesOrders';

const ManageOrder = () => {
    const [manages, setManages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/userService')
            .then(res => res.json())
            .then(data => setManages(data))
    }, [])
    return (
        <div>
            <div className="allService-section">
                <div className=" my-5 pb-4">
                    <div className="mb-5 text-center">
                        <h3 className="package">Manages User Information  & Orders </h3>
                    </div>

                    <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                        {
                            manages.map(manage => <ManagesOrders
                                key={manage._id}
                                manage={manage}
                            ></ManagesOrders>)
                        }
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ManageOrder;