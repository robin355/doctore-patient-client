import React from 'react';

const Reviews = ({ review }) => {
    const { name, location, image, userReview } = review
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="card-actions">

                        <div className="w-16 rounded-full">
                            <img src={image} alt='' />
                        </div>
                        <div>
                            <h2 className='text-lg'>{name}</h2>
                            <h3 className=''>{location}</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;