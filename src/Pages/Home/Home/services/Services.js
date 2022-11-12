import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import whitening from '../../../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            descrive: 'Fluoride varnish can be applied to both baby teeth and adult.',
            icon: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            icon: cavity,
            descrive: 'To treat a cavity your dentist will remove the decayed portion".'
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            icon: whitening,
            descrive: 'Teeth whitening involves bleaching your teeth to make them.'
        },

    ]
    return (
        <div className='mt-16'>
            <div>
                <h2 className='text-xl font-bold text-center text-primary'>OUR SERVICES</h2>
                <p className='text-center text-[36px]  font-normal'>Services We Provide</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;