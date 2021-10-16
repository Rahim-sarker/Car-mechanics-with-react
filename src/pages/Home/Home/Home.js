import React from 'react';
import Experts from '../Experts/Experts';
import Servies from '../../Home/Services/Services'
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Servies></Servies>
            <Experts></Experts>
        </div>
    );
};

export default Home;