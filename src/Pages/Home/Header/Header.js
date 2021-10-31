import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logoutUsingGoogle } = useAuth();
    return (
        <div className="navbar-section">

            <nav className="navbar navbar-expand-lg navbar-dark   ">
                <div className="container-fluid">
                    <Link to="/home" className="nav-link active company-name">Versatile Tourism Agency</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon  "></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-link" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <Link to="/home" className="   nav-link active">Home</Link>
                            <Link to="/allService" className=" text-white nav-link ">Services</Link>


                            <Link to="/myorder" className=" text-white nav-link ">MyPackege</Link>:

                            <Link to="/gallery" className=" text-white nav-link ">Gallery</Link>:

                            {
                                user.email && <span><Link to="/home" className="nav-link active">{user.displayName}</Link></span>
                            }

                            {
                                user.email ?
                                    <Link to="/home" onClick={logoutUsingGoogle} className="text-white   nav-link "> <i className="fas fa-user pe-1"></i>Log out</Link>

                                    :
                                    <Link to="/login" className="text-white   nav-link "> <i className="fas fa-user pe-1"></i>Login</Link>
                            }

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;