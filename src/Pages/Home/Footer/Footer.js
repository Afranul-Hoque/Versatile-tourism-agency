import React from 'react';
import payment from '../../../Images/banner/payment.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="mt-5 footer-section py-5 px-5">
            <div className="row pt-3">

                <div className="col-md-4">
                    <div>
                        <h3 >Versatile Tourism Agency</h3>
                        <div className="mt-5">
                            <p>Tourism is the activities of people traveling to and staying in places outside their usual environment for leisure, business or other purposes for not more than one consecutive year.
                            </p>
                        </div>

                        <div>
                            {/* social link */}
                            <h5 className="follow">Follow Us</h5>
                            <div className="pt-3">
                                <i class="fab fa-facebook-f pe-3"></i>
                                <i class="fab fa-instagram pe-3"></i>
                                <i class="fab fa-twitter pe-3"></i>
                                <i class="fab fa-youtube pe-3"></i>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-4 ">
                    <h3 >Contact Us</h3>
                    <div>
                        <div className="mt-5">
                            <span><i className="fas fa-phone pe-3"></i></span>
                            <span>0190000000 , </span>
                            <span>0170000000</span>
                        </div>
                        <div className="mt-3">
                            <span><i class="fas fa-envelope pe-3"></i></span>
                            <span> info@gmail.com ,</span>

                            <span> support@gmail.com</span>
                        </div>

                        <div className="mt-3">
                            <span><i class="fas fa-map-marker-alt pe-3"></i></span>
                            <span>13/D Hospital Road,</span>

                            <span> Mirpur, Dhaka</span>
                        </div>
                    </div>
                </div>


                {/* payment method */}

                <div className="col-md-4 ">

                    <h3 >We Accepts</h3>
                    <div className="mt-5">
                        <img src={payment} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;