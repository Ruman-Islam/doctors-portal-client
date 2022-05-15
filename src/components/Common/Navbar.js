import React from 'react';
import auth from '../../Firebase/FirebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2'
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [user, ,] = useAuthState(auth);

    const navigate = useNavigate();

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            background: '#fff',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Logout',
            backdrop: `
            rgba(0, 0, 0, 0.438)
            left top
            no-repeat `
        }).then(async (result) => {
            if (result.isConfirmed) {
                await signOut(auth);
                navigate('/home');
            }
        })
    }

    const menuItems = <>
        <li className='mr-1'><NavLink to='/'>Home</NavLink></li>
        <li className='mr-1'><NavLink to='/about'>About</NavLink></li>
        <li className='mr-1'>
            <NavLink to='/appointment/#appointment-section'>
                <HashLink smooth to="/appointment/#appointment-section">
                    Appointment
                </HashLink>
            </NavLink>
        </li>
        <li className='mr-1'><NavLink to='/reviews'>Reviews</NavLink></li>
        <li className='mr-1'><NavLink to='/contact'>Contact Us</NavLink></li>
        {user ? '' : <li className='mr-1'><NavLink to='/login'>Login</NavLink></li>}
        {user && <li className='mr-1'><NavLink to='/dashboard'>Dashboard</NavLink></li>}
    </>

    return (
        <div className="navbar bg-base-100 px-2 md:px-10 sticky top-0 z-50 shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <h1 className="normal-case text-xs lg:text-xl xl:text-2xl 2xl:text-3xl">Doctors Portal</h1>
            </div>
            <div className="navbar-center hidden lg:flex text-md font-semibold pl-80">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

            {user && <div className="dropdown dropdown-end ml-28 sm:ml-64 md:ml-96 lg:ml-0">
                <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt='' />
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
                    <li onClick={handleSignOut}><p>Logout</p></li>
                </ul>
            </div>}
        </div>
    );
};

export default Navbar;