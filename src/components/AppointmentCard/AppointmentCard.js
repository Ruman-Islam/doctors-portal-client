import React from 'react';

const AppointmentCard = ({ setTreatment, service }) => {
    const { name, slots } = service;
    return (
        <div className="card w-80 2xl:w-96 bg-base-100 shadow-xl border">
            <div className="card-body flex flex-col">
                <div className='flex-1'>
                    <h2 className="card-title text-secondary">{name}</h2>
                    <ul className='text-left'>{
                        slots.length ?
                            <>{slots?.map((slot, index) =>
                                <li key={index} className='text-sm'>
                                    {slot}
                                </li>)
                            }
                            </>
                            : <li className='text-red-500'>No Slot Available</li>
                    }</ul>
                </div>
                <div className="card-actions justify-end items-center py-1">
                    <p className='text-left font-semibold'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="Booking-modal"
                        className="px-3 py-2 rounded-md text-white uppercase bg-gradient-to-r from-secondary to-primary text-sm font-semibold cursor-pointer">
                        book appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;