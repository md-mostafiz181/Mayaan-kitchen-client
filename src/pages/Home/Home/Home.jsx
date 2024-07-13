import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Latest from '../Latest/Latest';
import Quality from '../Quality/Quality';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Order></Order>
           <Latest></Latest>
           <PopularMenu></PopularMenu>
           <Quality></Quality>
           
        </div>
    );
};

export default Home;