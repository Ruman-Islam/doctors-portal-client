import React from 'react';
import Banner from './Banner';
import Banner2 from './Banner2';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Banner2 />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;