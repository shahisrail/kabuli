import React from 'react';
import Banner from '../Components/Banner';
import Slider from '../Components/Slider';
import Parallax from '../Components/parallax';

const Home = () => {
    return (
        <div className='p-2'>
            <Banner />
            <Slider/>
            <Parallax/>
        </div>

    );
};

export default Home;