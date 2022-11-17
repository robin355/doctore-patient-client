import { React, useContext } from 'react';
import Navbar from '../Share/Navbar/Navbar';
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hook/UseAdmin';
const DashBoardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard'>My Apointment</Link></li>
                        {
                            isAdmin &&
                            <>
                                <li><Link to='/dashboard/allUser'>All User</Link></li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;