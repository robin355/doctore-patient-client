import { React, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../../Context/AuthProvider';
import useToken from '../../../../../Hook/UseTooken';
const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { createUser, updateUser } = useContext(AuthContext)
    const [SignupError, setSignupError] = useState('')
    const [createdUserEmail, setcreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }
    const handleSignup = data => {
        setSignupError(' ')
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('crate successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        handleUser(data.name, data.email)

                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
                setSignupError(error.message)
            })
    }
    const handleUser = (name, email) => {
        const user = { name, email };
        fetch(`https://doctore-patient-server.vercel.app/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setcreatedUserEmail(email)
            })
    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", {
                            required: "Name is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: " Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 character Longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Signup' type="submit" />
                </form>
                {
                    SignupError && <p className='text-red-600'>{SignupError}</p>

                }
                <p>Already have an Account?<Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;