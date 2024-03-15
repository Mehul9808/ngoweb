import Image from "next/image";
import React from 'react';
import Link from "next/link";
import '@/app/globals.css';
import ngologo from "/public/Images/ngo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import { FaAngleDoubleRight } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
        <footer className="footersection  pt-14 pb-24 ">
            {/* <div className="container mx-auto flex flex-wrap items-center justify-between"> */}
            <div className="md:container md:mx-auto md:px-20 flex flex-wrap items-center justify-between pl-6">
                {/* Column 1: Logo and Website Name */}
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div className="flex items-center mb-2.5">
                        <Image src={ngologo} alt="ngo website logo " />
                        <span className="  font-semibold">NGO</span>
                    </div>
                    <p className="text-[color:white]">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="w-full  md:w-1/3 mb-4 md:mb-0 md:px-20 ">
                    <h3 className=" text-white  font-semibold mb-2">Quick Links</h3>
                    <ul className="footersectionlinks">
                        <div className="flex footersectionlinkss">
                       <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span> 
                        <li className="text-[color:white] mb-1"><Link href="#about" className="footersectionlinks">About</Link></li>
                        </div>
                        <div className="flex footersectionlinkss">
                        <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span>
                        <li className="text-[color:white] mb-1"><Link href="#blogs" className="footersectionlinks">Blogs</Link></li>
                        </div>
                        <div className="flex footersectionlinkss">
                        <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span>
                        <li className="text-[color:white] mb-1"><Link href="#services" className="footersectionlinks">Services</Link></li>
                        </div>

                        <div className="flex footersectionlinkss">
                        <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span>
                        <li className="text-[color:white] mb-1"><Link href="/login" className="footersectionlinks">Login</Link></li>
                        </div>

                        <div className="flex footersectionlinkss">
                        <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span>
                        <li className="text-[color:white] mb-1"><Link href="#contact" className="footersectionlinks">Contact Us</Link></li>
                        </div>
                        <div className="flex footersectionlinkss">
                        <span className="align-middle pt-1 pr-1"><FaAngleDoubleRight /></span>    
                        <li className="text-[color:white] mb-1"><Link href="/registration" className="footersectionlinks">Registration</Link></li>
                        </div>

                        {/* Add more links as needed */}
                    </ul>
                </div>

                {/* Column 3: Contact Info and Social Icons */}
                <div className="w-full md:w-1/3">
                    <h3 className=" text-white  font-semibold mb-2">Contact Details</h3>
                    <div className=" mb-4">
                        <div className="flex justify-start">
                        <FontAwesomeIcon icon={faHouse} className="mr-5 mb-4"  style={{color: "#fff",height:"25px",width:"25px"}} />
                        <span className="text-[color:white]"> 123 Street, City </span>
                        </div>
                        <div className="flex justify-start">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-5 mb-4"  style={{color: "#fff",height:"25px",width:"25px"}}/>
                        <span className="text-[color:white]">  info@example.com </span>
                        </div>
                        <div className="flex justify-start">
                        <FontAwesomeIcon icon={faPhone} className="mr-5 "  style={{color: "#fff",height:"25px",width:"25px"}}/>
                        <span className="text-[color:white]">  123-456-7890</span>
                        </div>
                    </div>
                    <div className=" ">
                    <ul className="socialfooter flex items-center space-x-4 ">
                                    <li className="social_icon  ">
                                    <Link href="#" ><FontAwesomeIcon icon={ faFacebook} className="icon" style={{color: "#36BA24",height:"25px",width:"25px"}} /></Link>
                                    </li>
                                    <li className="social_icon pointer  ">
                                    <Link href="#" ><FontAwesomeIcon icon={ faInstagram} className="icon" style={{color: "#36BA24",height:"25px",width:"25px"}} /></Link>
                                    </li>
                                    <li className="social_icon pointer   ">
                                    <Link href="#" > <FontAwesomeIcon icon={ faXTwitter} className="icon" style={{color: "#36BA24",height:"25px",width:"25px"}} /></Link>
                                    </li>
                                    <li className="social_icon pointer   ">
                                    <Link href="#" ><FontAwesomeIcon icon={ faYoutube} className="icon" style={{color: "#36BA24",height:"25px",width:"25px"}} /></Link>
                                    </li>
                                    
                                </ul>

                    </div>
                </div>
                
            </div>
            
        </footer>
        <p className="text-base text-center">Copyright © 2024 NGO All Rights Reserved</p>
        </div>
    );
};

export default Footer;







