import React from 'react';

const SingleOrder = (props) => {
    console.log(props);
    const { Username, address, packege, Opinion, phone, Duration } = props.allorder;

    return (
        <div className=" mt-5">
            <div>

                <div className="card  mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="card-body">
                        <h3 className="card-title">Name: {Username}</h3>
                        <h6>Address: {address}</h6>
                        <span> <span className="cost">Venue: {packege}</span></span>
                        <h4>{phone}</h4>
                        <span> <span className="duration">
                            Duration: {Duration}</span></span>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default SingleOrder;