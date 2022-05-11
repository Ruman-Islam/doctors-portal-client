import React from 'react';

const Review = ({ review: { img, name, origin, reviewText } }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl mx-auto">
            <div className="card-body">
                <p className='my-5'>{reviewText}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl'>{name}</h4>
                        <p>{origin}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;