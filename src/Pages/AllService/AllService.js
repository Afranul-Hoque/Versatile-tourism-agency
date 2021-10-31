import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './AllService.css'

const AllService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://chilling-spell-24897.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="allService-section">
            <div className=" my-5 pb-4">
                <div className="mb-5 text-center">
                    <h5 className="choose-package">Choose Your Package</h5>
                    <h3 className="package">Select Best Package For Your Travel</h3>
                </div>

                <div className="row row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <Services
                            key={service._id}
                            service={service}
                        ></Services>)
                    }
                </div>

            </div>

        </div>
    );
};

export default AllService;