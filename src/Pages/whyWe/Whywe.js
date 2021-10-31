import React from 'react';
import './Whywe.css'

const Whywe = () => {
    return (
        <div className=" my-5 mx-5 pb-4">
            <div className="mb-5 text-center">
                <h5 className="why-us"> Versatile Tourism Agency</h5>
                <h3 className="Travel-us">Why You Are Travel With Our Agency</h3>
            </div>
            <div>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 text-center mx-5">
                    <div className="col">
                        <div className="card card-design">
                            <div >
                                <i className="fas fa-user-tie icons"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-white">2000+ Our worldwide guide</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-design">
                            <div>
                                <i class="fas fa-hands-helping icons"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-white">100% trusted travel agency</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-design">
                            <div>
                                <i class="fas fa-route icons"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-white">8+ years of travel experience</h5>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-design">
                            <div>
                                <i class="fas fa-smile-beam icons"></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-white">95% of our traveller happy</h5>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Whywe;