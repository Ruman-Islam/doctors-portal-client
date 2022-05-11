import React from 'react';
import bannerPic from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')] bg-center bg-no-repeat bg-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerPic} className="max-w-xs md:max-w-2xl rounded-lg shadow-2xl" alt="" />
                <div className='2xl:mr-10'>
                    <h1 className="text-4xl xl:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment. If none of your friends or family can recommend a doctor, we go on the web to find ourselves one.</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;