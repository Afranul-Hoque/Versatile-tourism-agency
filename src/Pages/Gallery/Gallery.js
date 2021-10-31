import React from 'react';
import img1 from '../../Images/serviceimg/coxsbazar.jpg';
import img2 from '../../Images/serviceimg/reveria.jpg';
import img3 from '../../Images/banner/bandaban.jpg';
import img4 from '../../Images/banner/kashmir.jpg';
import img5 from '../../Images/banner/sajek.jpg';
import img6 from '../../Images/serviceimg/images.jpg';
import './Gallery.css'

const Gallery = () => {
    return (
        <div className="gallery-section">
            <div className="mb-5 text-center">
                <h5 className="choose-package">Our Gallery</h5>
                <h3 className="package">Some Beautiful Place We visited</h3>
            </div>
            <div className="row ">
                <div className=" row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />

                </div>
                <div className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Gallery;