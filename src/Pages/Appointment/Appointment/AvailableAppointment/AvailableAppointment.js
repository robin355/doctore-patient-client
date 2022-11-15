import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { React, useState } from 'react';
import BookModal from '../../BookModal/BookModal';
import Option from './Option';

const AvailableAppointment = ({ selectedDate, setselectedDate }) => {
    const [treatment, setTreatment] = useState(null)
    const date = format(selectedDate, 'PP')
    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())


    })
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
                <BookModal treatment={treatment} setTreatment={setTreatment} selectedDate={selectedDate}></BookModal>}

        </div>
    );
};

export default AvailableAppointment;