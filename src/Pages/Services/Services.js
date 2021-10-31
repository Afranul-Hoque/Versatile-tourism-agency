import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {
    // console.log(props)
    const { _id, name, Duration, cost, img, description } = props.service;
    return (
        <div>
            <div className="card service-img card-description mx-3 shadow-lg p-3 mb-5 bg-body rounded">
                <img src={img} className="card-img-top " alt="..." />
                <div className="card-body">
                    <h3 className="card-title">{name}</h3>
                    <p>{description}</p>
                    <span> <span className="cost">${cost}</span>/Per Person</span>
                    <span><i class="fas fa-calendar-alt ms-5 px-1"></i> <span className="duration">
                        {Duration}</span></span>


                    <div className=" mt-3">
                        <Link to={`/booking/${_id}`}>
                            <button type="button" className=" details-button mt-2 py-2"> Booking Now</button>
                        </Link>
                    </div>





                </div>
            </div>

        </div>
    );
};

export default Services;