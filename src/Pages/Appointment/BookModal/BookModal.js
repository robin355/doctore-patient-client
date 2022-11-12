import { format } from 'date-fns';
import React from 'react';

const BookModal = ({ treatment, selectedDate }) => {
    const { name, slots } = treatment
    const date = format(selectedDate, 'PP')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        console.log(date, name, slot, email, phone)
    }
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Your Email" className="input input-bordered w-full" />
                        <input name='address' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookModal;