import React from 'react';
import serviceImg1 from '../../assets/images/fluoride.png';
import serviceImg2 from '../../assets/images/cavity.png';
import serviceImg3 from '../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const services = [
    {
        _id: 1,
        title: 'Fluoride Treatment',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the problem',
        img: serviceImg1
    },
    {
        _id: 2,
        title: 'Cavity Filling',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the problem',
        img: serviceImg2
    },
    {
        _id: 3,
        title: 'Teeth Whitening',
        description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the problem',
        img: serviceImg3
    }
]

const Services = () => {
    return (
        <div className='2xl:px-64 my-20'>
            <div>
                <h2 className='uppercase text-center text-2xl font-semibold text-secondary'>our services</h2>
                <h1 className='text-center text-2xl xl:text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-20 my-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;