import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import { SiGooglemaps } from "react-icons/si";
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div>
            {/* footer one */}
            <footer className="footer bg-base-200  p-10  bg-gradient-to-r from-[#070A16] via-[#070A16] to-[#070A16] text-white">

                {/* company logo section */}
                <aside>
                    <img src='' className='w-16 md:w-20' />
                    <p className='text-[#2AB7B1]'>
                    প্রতিদৌড়
                    <br />
                    Connecting runners,<br /> organizing marathons effortlessly.
                    </p>
                </aside>

                {/* contact us section */}
                <nav>
                    <h6 className="footer-title text-[#2AB7B1]">Contact Us</h6>
                    <a className="link link-hover">Head office</a>
                    <a className="link link-hover flex items-center gap-1"><SiGooglemaps className='text-lg text-[#2AB7B1]'/>
                    Rajshahi, Dhaka Bangladesh</a>
                    <a className="link link-hover flex items-center gap-1"><FaPhoneAlt className='text-[#2AB7B1]'/>
                    +88 01786141015</a>
                    <a className="link link-hover flex items-center gap-1"><FaWhatsapp className='text-lg text-[#2AB7B1]'/>
                    +88 01786141015 ( Message only )</a>
                    <a className="link link-hover flex items-center gap-1"><SiOpenstreetmap className='text-lg text-[#2AB7B1]'/>
                    Map Link: <p className='text-[#2AB7B1]'>https://maps.google.com/</p></a>

                </nav>

                {/* navlink section */}
                <nav>
                    <h6 className="footer-title text-[#2AB7B1]">প্রতিদৌড়</h6>
                    <Link to='/marathons' className="link link-hover">Marathons</Link>
                    <Link to='add-marathons' className="link link-hover">Add Marathons</Link>
                    <Link to='my-marathons' className="link link-hover">My Marathons</Link>
                    <Link to='/my-apply' className="link link-hover">My Apply</Link>
                </nav>

                {/* legal condition section */}
                <nav>
                    <h6 className="footer-title text-[#2AB7B1]">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

                </footer>

               {/* footer two */}
                    <footer className="footer-center bg-base-200 py-2 border-gray-500  bg-gradient-to-r from-[#070A16] via-[#070A16] to-[#070A16] text-white">
                    {/* copy right */}
                    <aside>
                        <p className='text-xs md:text-lg mb-2'>Follow Us On </p>
                    </aside>

                    {/* social icons */}
                    <nav className=''>
                        <div className="grid grid-flow-col gap-2 md:gap-4 justify-center">
                            <a><FaSquareFacebook className='text-2xl md:text-3xl text-[#2AB7B1] '/></a>

                            <a><FaSquareInstagram className='text-2xl md:text-3xl text-[#2AB7B1]'/></a>

                            <a><IoLogoYoutube className='text-2xl md:text-3xl text-[#2AB7B1]'/></a>

                            <a><IoLogoLinkedin className='text-2xl md:text-3xl text-[#2AB7B1]'/></a>

                            <a><IoLogoTwitter className='text-2xl md:text-3xl text-[#2AB7B1]'/></a>
                        </div>
                    </nav>                    
                    </footer>

                    <footer className="footer-center bg-base-200 p-2 border-gray-500 border-t bg-gradient-to-r from-[#070A16] via-[#070A16] to-[#070A16] text-white">
                        <aside>
                            <p className='text-xs md:text-base'>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                        </aside>
                    </footer>

        </div>
    );
};

export default Footer;