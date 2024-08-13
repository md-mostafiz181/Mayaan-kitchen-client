import React from 'react';
import "./MenuItem.css"

const MenuItem = ({item}) => {

    const {image,name,recipe,price}=item;
    console.log(item)
    return (
        <div>
            <div className="menu-main flex justify-center border mt-5 p-3 hover:shadow-lg h-[200px]">
                <div className="menu-img w-[40%]  ">
                    <img className='rounded ' src={image} alt="" />
                </div>
                <div className="menu-text ml-4 w-[60%]">
                    <h1 className='text-2xl primaryFont font-normal text-orange-400'>{name}..........</h1>
                    <h2 className='primaryFont text-[15px] mt-3'>{recipe}</h2>
                    <p className='secondaryFont text-orange-400 mt-3 font-bold '>${price}</p>
                </div>
                {/* <div className="menu-price">
                   
                </div> */}
            </div>
        </div>
    );
};

export default MenuItem;