import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Latest from '../Latest/Latest';
import Quality from '../Quality/Quality';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Offer from '../Offer/Offer';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Kitchen || Home </title>
            </Helmet>
           <Banner></Banner>
           <Order></Order>
           <Latest></Latest>
           <PopularMenu></PopularMenu>
           <Quality></Quality>
           <Chef></Chef>
           <Featured></Featured>
           <Offer></Offer>
           <Testimonial></Testimonial>
           
        </div>
    );
};

export default Home;