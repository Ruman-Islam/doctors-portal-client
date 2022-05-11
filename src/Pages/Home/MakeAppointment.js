import React from 'react';
import doctorPic from '../../assets/images/doctor-small.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            className="flex justify-center items-center bg-accent
             mt-0 xl:mt-44 2xl:mt-56 bg-[url('/src/assets/images/appointment.png')]
            bg-center bg-no-repeat bg-auto 2xl:px-64">
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctorPic} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <PrimaryButton>GET STARTED</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;