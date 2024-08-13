import React from 'react';

import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/Menu.bg.jpg"
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import dessertBg from "../../../assets/dessertBg.jpg"
import pizzaBg from "../../../assets/pizzaBg.jpg"
import saladBg from "../../../assets/saladBg.jpg"
import soupBg from "../../../assets/soupBg.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Kitchen || Our Menu</title>
            </Helmet>

            <Cover img={menuImg} title="our menu" subTitle="would you like to try dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={dessertBg} title="dessert" subTitle="would you like to try dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={pizzaBg} title="pizza" subTitle="would you like to try dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={saladBg} title="salad" subTitle="would you like to try dish?"></Cover>
            <PopularMenu></PopularMenu>
            <Cover img={soupBg} title="soup" subTitle="would you like to try dish?"></Cover>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;