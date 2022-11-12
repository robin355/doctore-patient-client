import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppaintment from '../MakeAppointment/MakeAppaintment';
import DentalCares from './DentalCare/DentalCares';
import Services from './services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCares></DentalCares>
            <MakeAppaintment></MakeAppaintment>
        </div>
    );
};

export default Home;