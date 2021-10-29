import React from 'react';
import './Banner.css';
import img1 from '../../../Images/banner/sajek.jpg';
import img2 from '../../../Images/banner/japlong.jpg';
import img3 from '../../../Images/banner/kashmir.jpg';
import img4 from '../../../Images/banner/ladakh.jpg';
const Banner = () => {
    return (
        <div>
            <div >
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item active banner-section">
                            <img src={img1} className="d-block w-100 banner-img " alt="..." />
                            <div className="carousel-caption banner-description d-none d-md-block">
                                <h5>Amazing Tour To Sajek <br /> In Bangladesh</h5>
                                <span className="tour-duration">3 Days, 4 Night Tour</span>
                            </div>
                        </div>
                        <div className="carousel-item banner-section">
                            <img src={img2} className="d-block  banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-description d-none d-md-block">
                                <h5>Amazing Tour To Japlong <br /> In Bangladesh</h5>
                                <span className="tour-duration">4 Days, 4 Night Tour</span>
                            </div>
                        </div>
                        <div className="carousel-item banner-section">
                            <img src={img3} className="d-block  banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-description d-none d-md-block">
                                <h5>Amazing Tour To Kashmir  <br /> In India</h5>
                                <span className="tour-duration">8 Days, 8 Night Tour</span>
                            </div>
                        </div>
                        <div className="carousel-item banner-section">
                            <img src={img4} className="d-block banner-img w-100" alt="..." />
                            <div className="carousel-caption banner-description d-none d-md-block">
                                <h5>Amazing Tour To Ladakh <br /> In India</h5>
                                <span className="tour-duration">9 Days, 8 Night Tour</span>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;