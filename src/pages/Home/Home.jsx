import React from 'react';
import Banner from './Home/Banner/Banner';
import Latest from './Home/Latest/Latest';
import FindUs from './FindUs/FindUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Latest></Latest>
            <FindUs></FindUs>
        </div>
    );
};

export default Home;