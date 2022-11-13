import { createBrowserRouter } from 'react-router-dom'
import Main from '../../Layout/Main'
import Appointment from '../../Pages/Appointment/Appointment/Appointment'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Home/Home/Login/Login/Login'
import Signup from '../../Pages/Home/Home/Login/Signup/Signup'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])