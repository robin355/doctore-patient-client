import React from 'react';
import appaintment from '../../../assets/images/appointment.png'
import doctore from '../../../assets/images/doctor.png'
import PrimaryBtn from '../../../components/Primarybtn/PrimaryBtn';
const MakeAppaintment = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${appaintment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctore} className="-mt-32 hidden lg:block  lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div>
                        <p className='text-lg text-primary font-bold'>Appointment</p>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryBtn>Appaintment</PrimaryBtn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppaintment;