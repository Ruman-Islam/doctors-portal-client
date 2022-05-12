import AvailableAppointments from '../components/AvailableAppointments/AvailableAppointments';
import AppointmentBanner from '../components/AppointmentBanner/AppointmentBanner';
import Footer from '../components/Common/Footer';
import { useState } from 'react';

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