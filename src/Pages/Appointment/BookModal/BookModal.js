import { format } from 'date-fns';
import React from 'react';

const BookModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" value={date} className="input input-bordered w-full" />
                        <select className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookModal;