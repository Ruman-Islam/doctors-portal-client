import React from 'react';
import InfoCard from './InfoCard';
import clockImg from '../../assets/icons/clock.svg';
import markerImg from '../../assets/icons/marker.svg';
import phoneImg from '../../assets/icons/phone.svg';

const cardsInfo = [
    {
        _id: 1,
        title: "Opening Hours",
        description: "we are open at 24/7 hours",
        img: clockImg,
        bgColor: "bg-gradient-to-r from-secondary to-primary"
    },
    {
        _id: 2,
        title: "Visit our location",
        description: "Brooklyn, NY 10036, United States",
        img: markerImg,
        bgColor: "bg-accent"
    },
    {
        _id: 3,
        title: "Contact us now",
        description: "+000 123 456789",
        img: phoneImg,
        bgColor: "bg-gradient-to-r from-secondary to-primary"
    }
]

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-20 my-10 xl:my-32'>
            {
                cardsInfo.map(cardInfo => <InfoCard key={cardInfo._id} cardInfo={cardInfo} />)
            }
        </div>
    );
};

export default Info;