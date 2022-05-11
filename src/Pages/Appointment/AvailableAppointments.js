import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    // if (date) {
    //     return (
    //         <div>
    //             <h1>Available Appointments on {format(date, 'PP')} </h1>
    //         </div>
    //     );
    // }
    return (
        <div className='text-center my-10'>
            <h1 className='2xl:text-xl text-md text-secondary font-bold my-10'>Available Appointments on {format(date, 'PP')} </h1>
            <div className='grid grid-cols-1 2xl:grid-cols-3 gap-5 2xl:px-64 px-5 justify-items-center'>
                {services.map(service =>
                    <ServiceCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment} />)}
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                date={format(date, 'PP')} />}
        </div>
    );
};

export default AvailableAppointments;