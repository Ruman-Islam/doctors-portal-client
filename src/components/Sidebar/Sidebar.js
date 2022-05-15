import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col relative">
                <label
                    htmlFor="sidebar"
                    tabIndex="1"
                    className="btn btn-ghost lg:hidden absolute top-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>

                </label>
                {/* <!-- Page content here --> */}
                <Outlet />
            </div>
            <div className="drawer-side border">
                <label htmlFor="sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/dashboard/my-appointment">My Appointments</NavLink></li>
                    <li><NavLink to="/dashboard/my-review">My Review</NavLink></li>
                    <li><NavLink to="/dashboard/my-history">My History</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;