import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-3/4 md:w-3/12 mb-7'>
            <p className=' text-white mb-1 text-sm md:text-lg'>---{subHeading}---</p>
            <p className='text-xl md:text-3xl font-semibold uppercase border-y-4 border-[#2AB7B1] py-1 md:py-2 text-[#2AB7B1]'>{heading}</p>
        </div>
    );
};

export default SectionTitle;