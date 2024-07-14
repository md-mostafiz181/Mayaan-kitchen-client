import React from 'react';
import Banner from '../Banner/Banner';
import Order from '../Order/Order';
import Latest from '../Latest/Latest';
import Quality from '../Quality/Quality';
import PopularMenu from '../PopularMenu/PopularMenu';
import Chef from '../../Chef/Chef';
import Featured from '../Featured/Featured';
import Testimonial from '../Testimonial/Testimonial';
import Container from '../../../components/Container/Container';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Order></Order>
           <Latest></Latest>
           <PopularMenu></PopularMenu>
           <Quality></Quality>
           <Chef></Chef>
           <Featured></Featured>
           <Container><Testimonial></Testimonial></Container>
           
        </div>
    );
};

export default Home;