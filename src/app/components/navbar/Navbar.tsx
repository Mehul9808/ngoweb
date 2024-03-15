"use client"
import React from 'react';
import Link from "next/link"
import { useState } from 'react';
import Image from "next/image";
// import Links from "@/app/components/navbar/Links";
import ngologo from "/public/Images/ngo.png";


{/* <Image src={ngologo} alt="ngo website logo "/>
<Links/> */}
function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    // <div className="sticky top-0 bg-white z-40 backdrop-blur supports-backdrop-blur:bg-white">
    <div className="sticky topnavbar top-0  z-40 ">
      <nav className="w-full left-0 right-0 ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
              <Image src={ngologo} alt="ngo website logo "/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src={ngologo} width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src={ngologo}
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="navlink  text-xl text-black py-2 md:px-6 text-center border-b-2 md:border-b-0    border-primary  md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                    
                  </Link>
                </li>
                <li className="navlink  text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#blogs" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>
                <li className="navlink  text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#services" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
               
             
                <li className="navlink  text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="navlink  text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="#faq" onClick={() => setNavbar(!navbar)}>
                    FAQ
                  </Link>

                </li>
                <li className="navlink   text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="login" onClick={() => setNavbar(!navbar)}>
                    Login/Signup
                  </Link>
                </li>
                <li className="navlink   text-xl text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900   md:hover:text-primary md:hover:bg-transparent">
                  <Link href="dashboard" onClick={() => setNavbar(!navbar)}>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
    




   

export default Navbar;