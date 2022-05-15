import React from 'react';

const AppointmentCard = ({ setTreatment, appointment }) => {
    const { name, availableSlots } = appointment;

    return (
        <div className="card w-80 2xl:w-96 bg-base-100 shadow-xl border">
            <div className="card-body flex flex-col">
                <div className='flex-1'>
                    <h2 className="card-title text-secondary">{name}</h2>
                    <ul className='text-left text-sm'>{
                        availableSlots.length ?
                            <>{availableSlots?.map((slot, index) =>
                                <li key={index}>
                                    {slot}
                                </li>)
                            }
                            </>
                            : <li className='text-red-500'>No Slot Available Today</li>
                    }</ul>
                </div>
                <div className="card-actions justify-end items-center py-1">
                    <p className='text-left font-semibold'>{availableSlots.length} {availableSlots.length > 1 ? 'spaces' : 'space'} available</p>
                    <label
                        onClick={() => setTreatment(appointment)}
                        disabled={availableSlots.length === 0}
                        htmlFor="Booking-modal"
                        className="btn btn-secondary px-3 py-2 rounded-md text-white uppercase bg-gradient-to-r from-secondary to-primary text-sm font-semibold">
                        book appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;