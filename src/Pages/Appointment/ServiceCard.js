import React from 'react';

const ServiceCard = ({ setTreatment, service }) => {
    const { name, slots } = service;
    return (
        <div className="card w-80 2xl:w-96 bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title text-secondary">{name}</h2>
                <p className='text-left'>{
                    slots.length ?
                        <>{slots?.map((slot, index) =>
                            <span key={index} className='block'>
                                {slot}
                            </span>)
                        }
                        </>
                        : <span className='text-red-500'>No Slot Available</span>
                }</p>
                <p className='text-left'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center py-5">
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="Booking-modal"
                        className="btn btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">
                        book appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;