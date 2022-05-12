import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="p-20 bg-[url('/src/assets/images/footer.png')]">
            <div className='footer mx-auto'>
                <div className='mx-auto'>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div className='mx-auto'>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © {year} - All right reserved by Ruman Islam</p>
            </div>
        </footer>
    );
};

export default Footer;