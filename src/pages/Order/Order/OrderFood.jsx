import React, { useState } from 'react';
import "./OrderFood.css"
import Cover from '../../Shared/Cover/Cover';
import coverImg from "../../../assets/coverImg.jpg"
import { Helmet } from 'react-helmet-async';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../../../components/Container/Container';
import useMenu from '../../../hooks/useMenu';


const OrderFood = () => {

    const [tabIndex, setTabIndex]=useState(0)
    const [menu]=useMenu();
    console.log(menu)

    const desserts=menu.filter(item=> item.category === "dessert")
    const pizza=menu.filter(item=> item.category === "pizza")
    const salad=menu.filter(item=> item.category === "salad")
    const soup=menu.filter(item=> item.category === "soup")
    const offered=menu.filter(item=> item.category === "offered")


    return (
        <div>

            <Helmet
            title='Bistro || Our Shop'
            ></Helmet>
            <Cover img={coverImg} title={" our shop"} subTitle={"Would you like to try dish?"}></Cover>

            <Container>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

export default OrderFood;