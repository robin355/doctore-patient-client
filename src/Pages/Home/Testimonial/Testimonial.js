import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews';
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: "Sakib",
            location: 'Uttara,Dhaka',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people1
        },
        {
            id: 2,
            name: "Ayesha",
            location: 'Badda,Dhaka',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people2
        },
        {
            id: 3,
            name: "Fatema",
            location: 'farmgate,Dhaka',
            userReview: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            image: people3
        }
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl font-bold text-primary'>Testimonial</h4>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className='lg:w-48 w-24' alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviews.map(review => <Reviews key={review.id} review={review}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;