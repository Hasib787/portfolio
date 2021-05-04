import React from 'react';
import HeaderNav from '../Shared/HeaderNav/HeaderNav';
import About from './About/About';
import Header from './Header/Header';

const Home = () => {
    return (
        <div>
            <HeaderNav />
            <Header/>
            <About />
        </div>
    );
};

export default Home;