import React, { useEffect, useState } from 'react';
import "./Chef.css"
import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ChefMenu from '../Shared/ChefMenu/ChefMenu';

const Chef = () => {

    const [chef,setChef]=useState([])
    console.log(chef)

    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(data =>{
            const chefRec=data.filter(item=> item.category === "offered") 
            setChef(chefRec)
        })
    },[])
    return (
        <div id='chef-part'>
            <Container>
                <section>
                    <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"}></SectionTitle>
                </section>


                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3'>
                {
                    chef.map(item => <ChefMenu
                    key={chef._id}
                    item={item}
                    ></ChefMenu>)
                }
            </div>
            </Container>


            
        </div>
    );
};

export default Chef;