import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
    return (
        <div className='mt-16'>
            <h2 className='text-center text-secondary font-bold'>You Have Appointment On: {format(selectedDate, 'PP')}</h2>
        </div>
    );
};

export default AvailableAppointment;