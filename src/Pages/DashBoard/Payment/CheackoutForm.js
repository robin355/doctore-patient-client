import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
const CheackoutForm = ({ booking }) => {
    const stripe = useStripe();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState('');
    const [transactionId, setTransactionId] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const elements = useElements();
    const { price, email, patient, _id } = booking;
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("https://doctore-patient-server.vercel.app/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('')
        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email: email
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        if (paymentIntent.status === 'succeeded') {

            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch(`https://doctore-patient-server.vercel.app/payments`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        setSuccess('congrats! Your Payment Complete')
                        setTransactionId(paymentIntent.id)
                    }
                })
        }
        setProcessing(false)
    }
    return (
        <div>
            <>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button type="submit" className="btn btn-primary mt-4" disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </form>
                <p className='text-red-600'>{cardError}</p>
                {
                    success && <>
                        <p className='text-green-600'>{success}</p>
                        <p>Your TransactionId:<span className='font-bold'>{transactionId}</span></p>
                    </>
                }
            </>
        </div>
    );
};

export default CheackoutForm;