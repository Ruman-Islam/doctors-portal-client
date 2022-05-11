import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const reviews = [
    {
        _id: 1,
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Winson Herry',
        origin: 'California',
        img: people1
    },
    {
        _id: 2,
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Gal Gadot',
        origin: 'New York',
        img: people2
    },
    {
        _id: 3,
        reviewText: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: 'Harshal Gibs',
        origin: 'Los Angeles',
        img: people3
    }
]
const Testimonial = () => {
    return (
        <section className='my-28 2xl:px-64 px-5'>
            <div className='flex justify-between mb-5'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='xl:text-3xl text-xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-20 lg:w-32" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {reviews.map(review => <Review key={review._id} review={review} />)}
            </div>
        </section>
    );
};

export default Testimonial;