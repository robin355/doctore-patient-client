import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import Loading from '../../Share/Loading/Loading';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const imgHostkey = process.env.REACT_APP_imgbb_key
    const navigate = useNavigate()

    const { data: specialites, isLoading } = useQuery({
        queryKey: ['specality'],
        queryFn: async () => {
            const res = await fetch('https://doctore-patient-server.vercel.app/appointmentSpecialty')
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(specialites)
    const handleDoctor = data => {
        console.log(data.image[0])
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostkey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const doctore = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        imgData: imgData.data.url
                    }
                    fetch(`https://doctore-patient-server.vercel.app/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctore)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added Sucessfully`)
                            navigate('/dashboard/managdoctors')
                        })
                }
            })
    }
    return (
        <div className='w-96 p-7'>
            <form onSubmit={handleSubmit(handleDoctor)}>

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
                        <span className="label-text">Specialty</span>
                    </label>

                    <select type="text" {...register("specialty")} className="select input-bordered w-full max-w-xs">

                        {
                            specialites.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: "Name is required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-600'>{errors.img?.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-3' value='Signup' type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;