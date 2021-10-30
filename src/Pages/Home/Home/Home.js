import React from 'react';
import AllService from '../../AllService/AllService';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AllService></AllService>
            <Footer></Footer>
        </div>
    );
};

export default Home;