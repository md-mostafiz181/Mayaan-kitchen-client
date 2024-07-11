import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='lg:w-3/12 text-center mt-2 mx-auto'>
            <p className='secondaryFont lg:text-xl text-[#f97316] font-bold'>---{subHeading}---</p>
            <h1 className='primaryFont lg:text-2xl text-[#f97316] font-normal uppercase border-y-4 py-4 mt-2'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;