import React from 'react';

const Option = ({ option, setTreatment }) => {
    console.log(option)
    const { name, slots } = option;
    return (
        <div>
            <div className="card shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-center text-xl font-bold text-secondary">{name}</h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                    <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'}  Available</p>
                    <div className="card-actions justify-center">
                        <label onClick={() => setTreatment(option)} htmlFor="book-modal" className="btn btn-primary text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Option;