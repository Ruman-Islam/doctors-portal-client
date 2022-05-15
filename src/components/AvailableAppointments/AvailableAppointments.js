import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';
import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import UseNotify from '../../Hooks/useNotify';
import { useQuery } from 'react-query';
import Spinner from '../Common/Spinner';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP')
    const { notifyInfo } = UseNotify();

    const { data, isLoading, refetch } = useQuery(['appointments', formattedDate], () =>
        fetch(`http://localhost:5000/available-appointments?date=${formattedDate}`)
            .then(res => res.json())
    )

    useEffect(() => {
        if (!data?.success) {
            notifyInfo(data?.message)
        }
    }, [data])

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div id='appointment-section' className='text-center mt-10 xl:mt-32 mb-10'>
            <h1 className='2xl:text-xl text-md text-secondary font-bold my-10'>Available Appointments on {format(date, 'PP')} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 2xl:px-72 xl:px-32 px-5 justify-items-center'>
                {data.appointments?.map(appointment =>
                    <AppointmentCard
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment} />)}
            </div>
            {treatment && <BookingModal
                treatment={treatment}
                setTreatment={setTreatment}
                refetch={refetch}
                date={format(date, 'PP')} />}
        </div>
    );
};

export default AvailableAppointments;