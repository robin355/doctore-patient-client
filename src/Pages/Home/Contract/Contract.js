import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const Contract = () => {
    return (
        <section style={{
            background: ` url(${appointment})`
        }}>
            <div className='text-center pt-12'>
                <h4 className='text-primary text-xl font-bold'>Contact</h4>
                <h2 className='text-2xl font-normal text-white'>Stay connected with us</h2>
            </div>
            <div>
                <form className='text-center'>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered mt-2" /><br />
                    <input type="text" name='subject' placeholder="Subject" className="input input-bordered mt-2" /><br />
                    <textarea className="textarea w-[275px] h-[100px] mt-2" name='massege' placeholder="Your Massege"></textarea>
                    <br />
                    <button type='submit' className="mt-4 mb-16  btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contract;