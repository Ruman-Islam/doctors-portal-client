import React from 'react';

const BookingModal = ({ treatment, setTreatment, date }) => {
    const { name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }

    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex items-center'>
                        <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg absolute top-2">{name}</h3>
                    </div>
                    <form
                        onSubmit={handleBooking}
                        className='mt-10'>
                        <input readOnly disabled value={date} className="input input-bordered w-full max-w-xs mb-2" />
                        <select name='slot' className="select select-bordered w-full max-w-xs mb-2">
                            <option disabled>Select your slot</option>
                            {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs mb-2" />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered w-full max-w-xs mb-2" />
                        <input name='number' type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-2" />
                        <input type="submit" value="SUBMIT" className="btn btn-accent w-full max-w-xs text-white text-md" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;