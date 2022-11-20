import { createBrowserRouter } from 'react-router-dom'
import AllUser from '../../AllUser/AllUser'
import DashBoardLayout from '../../Layout/DashBoardLayout'
import Main from '../../Layout/Main'
import Appointment from '../../Pages/Appointment/Appointment/Appointment'
import AddDoctor from '../../Pages/DashBoard/AddDoctor/AddDoctor'
import ManageDoctors from '../../Pages/DashBoard/DeshBoard/ManageDoctors/ManageDoctors'
// import DashBoard from '../../Pages/DashBoard/DeshBoard/DashBoard'
import MyDashBoard from '../../Pages/DashBoard/MyDashBoard/MyDashBoard'
import Payment from '../../Pages/DashBoard/Payment/Payment'
import Home from '../../Pages/Home/Home/Home'
import Login from '../../Pages/Home/Home/Login/Login/Login'
import Signup from '../../Pages/Home/Home/Login/Signup/Signup'
import DisplayError from '../../Pages/Share/DisplayError/DisplayError'
import AdminRoute from '../AdminRoute/AdminRoute'
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyDashBoard></MyDashBoard>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managdoctors',
                element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }

])