import CustomLink from './CustomLink';
import React from 'react';

const Navbar = () => {
    const menuItems = <>
        <li className='mr-0'><CustomLink to='/'>Home</CustomLink></li>
        <li className='mr-0'><CustomLink to='/about'>About</CustomLink></li>
        <li className='mr-0'><CustomLink to='/appointment'>Appointment</CustomLink></li>
        <li className='mr-0'><CustomLink to='/reviews'>Reviews</CustomLink></li>
        <li className='mr-0'><CustomLink to='/contact'>Contact Us</CustomLink></li>
    </>

    return (
        <div className="navbar bg-base-100 xl:px-20 shadow-lg sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 className="normal-case text-xl xl:text-3xl">Doctors Portal</h1>
            </div>
            <div className="navbar-center hidden lg:flex text-md font-semibold pl-80">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="dropdown dropdown-end ml-28 xl:ml-0">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <p className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </p>
                    </li>
                    <li><p>Settings</p></li>
                    <li><p>Logout</p></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;