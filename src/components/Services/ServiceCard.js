import React from 'react';

const ServiceCard = ({ service: { title, description, img } }) => {
    return (
        <div className='flex flex-col shadow-xl border rounded-xl py-10'>
            <figure className='text-center mx-auto'>
                <img className='w-16' src={img} alt="Album" />
            </figure>
            <div className="text-center px-10 xl:px-16">
                <h2 className="font-semibold text-xl my-3">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;