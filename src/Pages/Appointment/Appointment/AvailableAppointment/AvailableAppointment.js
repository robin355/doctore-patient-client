import { format } from 'date-fns';
import { React, useEffect, useState } from 'react';
import BookModal from '../../BookModal/BookModal';
import Option from './Option';

const AvailableAppointment = ({ selectedDate, setSelectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <div className='my-16'>
            <h2 className='text-center text-secondary font-bold'>You Have Appointment On: {format(selectedDate, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
                {
                    appointmentOptions.map(option => <Option key={option._id} option={option} setTreatment={setTreatment}></Option>)
                }
            </div>
            {
                treatment &&
                <BookModal treatment={treatment}></BookModal>}

        </div>
    );
};

export default AvailableAppointment;