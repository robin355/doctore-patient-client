import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';
const InfoCards = () => {
    const cards = [
        {
            id: 1,
            name: "Our Opening",
            describe: "9:00 am to 5:00pm",
            bgColor: 'bg-gradient-to-r from-primary to-secondary',
            icons: clock
        },
        {
            id: 2,
            name: "Our Location",
            describe: "Uttara,Dhaka",
            bgColor: 'bg-accent',
            icons: marker
        },
        {
            id: 3,
            name: "Contract Us Now",
            describe: "+8801628434061",
            bgColor: 'bg-gradient-to-r from-primary to-secondary',
            icons: phone
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {
                cards.map(card => <InfoCard key={card.id} card={card}></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;