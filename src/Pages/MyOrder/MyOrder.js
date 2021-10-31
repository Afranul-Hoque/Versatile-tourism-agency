import React, { useEffect, useState } from 'react';
import SingleOrder from '../SingleOrder/SingleOrder';

const MyOrder = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://chilling-spell-24897.herokuapp.com/userService')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])
    return (
        <div className="allService-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h3 className="package">User Information </h3>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        allorders.map(allorder => <SingleOrder
                            key={allorder._id}
                            allorder={allorder}
                        ></SingleOrder>)
                    }
                </div>

            </div>

        </div>
    );
};

export default MyOrder;