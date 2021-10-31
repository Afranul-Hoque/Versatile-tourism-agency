import React from 'react';
import AllService from '../../AllService/AllService';
import Bestdestination from '../../Bestdestination/Bestdestination';
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
            <Bestdestination></Bestdestination>
            <Footer></Footer>
        </div>
    );
};

export default Home;