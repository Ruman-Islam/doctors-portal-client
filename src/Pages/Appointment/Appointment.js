import { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='page-container'>
            <div className='content-wrap'>
                <AppointmentBanner date={date} setDate={setDate} />
                <AvailableAppointments date={date} />
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;