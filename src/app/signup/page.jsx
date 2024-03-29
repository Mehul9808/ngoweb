"use client"
import React from 'react';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation'

import '../globals.css';
import Image from "next/image";
import ngologo from "/public/Images/ngo.png";
import arrowicon1 from "/public/Images/arrow1.png";
import ngoimg8 from "/public/Images/ngoimg8.jpg";
import dynamic from 'next/dynamic';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import {useRouter} from 'next/router'




const Signup = (onSubmit ) => {

    const [formData, setFormData] = useState({
        // Your form fields go here
        name: '',
        email: '', 
        phonenumber: '',
        state: '',
        // Add more fields as needed
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation logic here

        // Redirect to dashboard with form data
        window.location.href = `/dashboard?name=${formData.name}&email=${formData.email}&phone=${formData.phonenumber}&state=${formData.state}`;
    };

    return (
        <>


            <div className="relative flex flex-col items-center justify-center">
                <div className="absolute -z-10 w-full  ">
                    <Image src={ngoimg8} alt="" width={1980} height={1000} className=" " />


                </div>

                <div className=" registrationpage1 md:container rounded-2xl   ">
                <div className=" registrationpage  rounded-2xl  grid sm:grid-cols-10">



                    <div className="col-span-3 flex min-h-full flex-1 flex-col justify-center items-center   ">
                        <div className="md:ml-10">

                            {/* Left Section for Registration */}
                            <h2 className="text-3xl font-bold mb-4 text-primary">Welcome!</h2>
                            <p className=" mb-8 text-white">Already a member? Login to Continue.</p>
                            <button onClick={() => router.push('/login')} className="bgcolor flex w-full justify-center  rounded-md   py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">
                                Go for Login<Image
                                   
                                    src={arrowicon1}
                                    alt="Your Company"
                                />
                            </button>
                        </div>


                    </div>
                    <div className="col-span-7 flex min-h-full flex-1 flex-col justify-center  py-12 ">
                        <div className="">
                            <Image
                                className="mx-auto h-10 w-auto"
                                src={ngologo}
                                alt="Your Company"
                            />
                            <h2 className=" text-center text-primary text-2xl font-bold leading-9 tracking-tight ">Registration</h2>
                            <div className="mt-10   ">
                                <form onSubmit={handleSubmit}>
                                    <div className="md:flex flex-row justify-around">
                                        <div className="mb-5 ">
                                            <label htmlFor="username" className="block mb-1 text-white leading-6 ">Your Name:</label>
                                            <input type="text" id="username" name="name" value={formData.name}
                                                className="block w-full p-2.5 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Your good name" required
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label htmlFor="email" className="block mb-1 text-white  dark:text-white">Your Email:</label>
                                            <input type="email" id="email" value={formData.email} name="email"
                                                className="block w-full p-2.5 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="name@flowbite.com" required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="md:flex flex-row justify-around">
                                        <div className="mb-5">
                                            <label htmlFor="phonenumber" className="block mb-1 text-white  dark:text-white">Your Phone No.:</label>
                                            <input type="tel" id="phonenumber" pattern="[0-9]{10}" value={formData.phonenumber} name="phonenumber"
                                                className="block w-full p-2.5 rounded-md border-0 py-1.5 0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Write your phone number" required
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="floating-input" className="block mb-1 text-white  dark:text-white">Your State:</label>
                                            <input type="text" id="floating-input" value={formData.state} name="state"
                                                className="block w-full p-2.5 rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6" placeholder="Write a comment" required
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-start mb-5">
                                        <div className="flex items-center md:ml-28 h-7">

                                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>

                                        <label htmlFor="remember" className="ml-2 text-white">Remember me</label>
                                    </div>
                                    <div className="flex justify-start">

                                        <button type="submit" className="md:ml-28 bgcolor   rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                     </div>
                    </div>
                </div>

            </div>



        </>
    )
}
export default Signup;

