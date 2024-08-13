import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({items,title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title="our menu" subTitle="would you like to try dish?"></Cover>}
             <div className="div grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 py-5">
            {
                items.map(item=> <MenuItem
                key={item._id}
                item={item}
                ></MenuItem> )
            }
        </div>
            
        </div>
    );
};

export default MenuCategory;