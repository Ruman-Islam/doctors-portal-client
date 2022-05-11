import React from 'react';

const InfoCard = ({ cardInfo: { title, description, img, bgColor } }) => {
    return (
        <div className={`card lg:card-side shadow-xl py-0 xl:py-5 ${bgColor}`}>
            <figure className='p-5'>
                <img className='w-16' src={img} alt="Album" />
            </figure>
            <div className="card-body text-white text-center lg:text-left">
                <h2 className="font-semibold text-xl">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;