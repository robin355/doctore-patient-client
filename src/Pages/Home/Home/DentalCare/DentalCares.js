import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
import PrimaryBtn from '../../../../components/Primarybtn/PrimaryBtn';
const DentalCares = () => {
    return (

        <section className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse p-4">
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryBtn>GET STARTED</PrimaryBtn>
                </div>
                <img src={treatment} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
            </div>
        </section>

    );
};

export default DentalCares;