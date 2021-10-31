import React from 'react';
import ladakh from '../../Images/serviceimg/ladakh.jpg';
import nilgiri from '../../Images/serviceimg/nilgiri.jpg'

import './Bestdestination.css'

const Bestdestination = () => {
    return (
        <div className="mt-5 py-3 text-center destination-section">
            <h3 className="best-camping">Upcomming Best Camping Tour</h3>
            <div className=" my-5 mx-5  destination">
                <div className="mb-5 text-center">

                    <h3 className="best-destination">See Our Best Popular Destinations
                    </h3>
                </div>

                <div>
                    <div className="row mx-5">
                        <div className="col-lg-6">
                            <div className="card mb-3 card-designs">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={nilgiri} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title"> Group Travel Go To Nilgiri
                                            </h5>
                                            <p className="card-text">Nilgiri or Nil Giri is one of the tallest peaks and beautiful tourist spot in Bangladesh. It is about 3500 feet high and situated at Thanci Thana.</p>
                                            <p className="card-text"><small className="text-muted">Starting-Data: 20 November 2021 </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-3 card-designs" >
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={ladakh} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Group Travel Go To Ladakh</h5>
                                            <p className="card-text">Ladakh, 'the Land of High Passes', is a beautiful region in India. Snowcapped peaks, clear blue skies</p>
                                            <p className="card-text"><small className="text-muted">Starting-Data: 10 November 2021 </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bestdestination;