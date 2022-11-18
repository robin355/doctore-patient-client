import { useState, useEffect } from 'react'
const useAdmin = email => {
    const [isAdmin, setisAdmin] = useState(false)
    const [isAdminLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctore-patient-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setisAdmin(data.isAdmin)
                    setIsLoading(false)
                })
        }
    }, [email])
    return [isAdmin, isAdminLoading]
}
export default useAdmin;