import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../../Share/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Share/Loading/Loading';
import toast from 'react-hot-toast';
const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null)
    const closeModal = () => {
        setDeletingDoctor(null)
    }
    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json()
                return data
            }
            catch (error) {

            }
        }

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDeletDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Doctor ${doctor.name} is Deleted Sucessfully`)
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specaliaty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <div>
                            {
                                doctors?.map((doctor, i) => <tr key={doctor._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src={doctor.imgData} alt='img' />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                    </td>
                                </tr>)
                            }
                        </div>
                    </tbody>
                </table>
            </div>
            {
                deletingDoctor && <ConfirmationModal
                    title={`Are You Sure You want to Delete?`}
                    message={`If you  ${deletingDoctor.name}.it cannot be undone`}
                    modalData={deletingDoctor}
                    successButtonName='Delete'
                    closeModal={closeModal}
                    successAction={handleDeletDoctor}

                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctors;