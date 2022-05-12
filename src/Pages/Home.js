import MakeAppointment from '../components/MakeAppointment/MakeAppointment';
import Testimonial from '../components/Testimonial/Testimonial';
import Services from '../components/Services/Services';
import Hero2 from '../components/HeroSection/Hero2';
import Contact from '../components/Contact/Contact';
import Hero1 from '../components/HeroSection/Hero1';
import Footer from '../components/Common/Footer';
import Info from '../components/Info/Info';
import React from 'react';

const Home = () => {
    return (
        <div>
            <Hero1 />
            <Info />
            <Services />
            <Hero2 />
            <MakeAppointment />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;