import React from 'react';
import bannerPic from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner2 = () => {
    return (
        <div className="hero 2xl:mt-32">
            <div className="hero-content flex-col lg:flex-row">
                <img src={bannerPic} className="max-w-xs md:max-w-md rounded-lg shadow-2xl xl:mr-10" alt="" />
                <div className='mr-10'>
                    <h1 className="text-4xl xl:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner2;