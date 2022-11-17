import { createBrowserRouter } from 'react-router-dom'
import AllUser from '../../AllUser/AllUser'
import DashBoardLayout from '../../Layout/DashBoardLayout'
import Main from '../../Layout/Main'
import Appointment from '../../Pages/Appointment/Appointment/Appointment'
// import DashBoard from '../../Pages/DashBoard/DeshBoard/DashBoard'
import MyDashBoard from '../../Pages/DashBoard/MyDashBoard/MyDashBoard'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Home/Home/Login/Login/Login'
import Signup from '../../Pages/Home/Home/Login/Signup/Signup'
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'

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
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashBoard></MyDashBoard>
            },
            {
                path: '/dashboard/allUser',
                element: <AllUser></AllUser>
            }
        ]
    }

])