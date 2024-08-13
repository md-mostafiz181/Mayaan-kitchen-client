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
                <MenuCategory items={offered}></MenuCategory>

                <div className="card-actions justify-center px-3 py-3">
                <button class="custom-btn1 btn-3 uppercase "><span className="font-bold">Ordered Your Favorite Food</span></button>
                </div>

                
            </Container>

            <Cover img={dessertBg} title="Dessert" subTitle="would you like to try dish?"></Cover>
            <Container>
            <MenuCategory items={desserts} ></MenuCategory>
            </Container>

            <Cover img={saladBg} title="Salad" subTitle="would you like to try dish?"></Cover>
            <Container>
            <MenuCategory items={salad} ></MenuCategory>
            </Container>

            <Cover img={pizzaBg} title="pizza" subTitle="would you like to try dish?"></Cover>
            <Container>
            <MenuCategory items={pizza} ></MenuCategory>
            </Container>

            <Cover img={soupBg} title="soup" subTitle="would you like to try dish?"></Cover>
            <Container>
            <MenuCategory items={soup} ></MenuCategory>
            </Container>

           

          
        </div>
    );
};

export default Menu;