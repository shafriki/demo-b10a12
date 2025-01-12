import React from 'react';
import Banner from './Home/Banner/Banner';
import Latest from './Home/Latest/Latest';
import FindUs from './FindUs/FindUs';
import AboutUs from './AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Latest></Latest>
            <AboutUs></AboutUs>
            <FindUs></FindUs>
        </div>
    );
};

export default Home;