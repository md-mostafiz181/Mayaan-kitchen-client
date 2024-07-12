import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Latest from '../Latest/Latest';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Order></Order>
           <Latest></Latest>
        </div>
    );
};

export default Home;