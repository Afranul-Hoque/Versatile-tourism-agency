import React from 'react';
import AllService from '../../AllService/AllService';
import Whywe from '../../whyWe/Whywe';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <AllService></AllService>
            <Whywe></Whywe>
            <Footer></Footer>
        </div>
    );
};

export default Home;