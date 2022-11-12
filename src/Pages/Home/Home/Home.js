import React from 'react';
import Banner from '../Banner/Banner';
import Contract from '../Contract/Contract';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppaintment from '../MakeAppointment/MakeAppaintment';
import Testimonial from '../Testimonial/Testimonial';
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
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;