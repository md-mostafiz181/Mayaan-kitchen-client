import React from 'react';

import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from "../../../assets/Menu.bg.jpg"
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import dessertBg from "../../../assets/dessertBg.jpg"
import pizzaBg from "../../../assets/pizzaBg.jpg"
import saladBg from "../../../assets/saladBg.jpg"
import soupBg from "../../../assets/soupBg.jpg"
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import Container from '../../../components/Container/Container';
import MenuCategory from '../MenuCategory/MenuCategory';
import "./Menu.css"

const Menu = () => {

    const [menu]=useMenu();
    const desserts=menu.filter(item=> item.category === "dessert")
    const pizza=menu.filter(item=> item.category === "pizza")
    const salad=menu.filter(item=> item.category === "salad")
    const soup=menu.filter(item=> item.category === "soup")
    const offered=menu.filter(item=> item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Kitchen || Our Menu</title>
            </Helmet>

            <Cover img={menuImg} title="our menu" subTitle="would you like to try dish?"></Cover>
            
            <Container>
                <SectionTitle subHeading="Don't miss" heading="Today's offered"></SectionTitle>
                <MenuCategory items={offered} ></MenuCategory> 
            </Container>

            <MenuCategory items={desserts} title="Dessert" img={dessertBg}></MenuCategory>
            <MenuCategory items={salad} title="Salad" img={saladBg}></MenuCategory>
            <MenuCategory items={pizza} title="pizza" img={pizzaBg}></MenuCategory>
            <MenuCategory items={soup} img={soupBg} title="soup"></MenuCategory>

           

          
        </div>
    );
};

export default Menu;