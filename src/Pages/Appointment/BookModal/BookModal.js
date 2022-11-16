import { format } from 'date-fns';
import { React, useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name: treatmentName, slots } = treatment
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PP')
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            email,
            phone,
            slot
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('booking Confirm')
                    refetch()
                    setTreatment(null)
                }
                else {
                    toast.error('already book')
                }

            })

    }
    return (
        <div>
            <input type="checkbox" id="book-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="book-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>

                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <input name='email' type="email" placeholder="Your Email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default BookModal;