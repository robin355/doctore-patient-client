import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

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
                            required: "Email Password is required",
                            minLength: { value: 6, message: 'Password Must be 6 character Longer' }
                        })} className="input input-bordered w-full max-w-xs" />
                        <span className="label-text">Forget Password?</span>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value='Login' type="submit" />
                    <p>New To Portal <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                    <div className="divider">OR</div>
                    <button className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>
                </form>
            </div>
        </div>
    );
};

export default Login;