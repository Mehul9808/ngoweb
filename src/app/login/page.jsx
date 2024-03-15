"use client"
import React from 'react';
import Image from "next/image";
import ngologo from "/public/Images/ngo.png";
import arrowicon1 from "/public/Images/arrow1.png";
import texture1 from "/public/Images/texture1.png";
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link';


const Login = (onSubmit) => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    // Your form fields go here

    email: '',
    password: '',
    // Add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const loginhandler = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className="login">
        <div className="md:container md:mx-auto md:px-20 grid grid-cols-1 sm:grid-cols-2" style={{ backgroundImage: `url(${texture1.src})` }}>

          <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
            <div className="mx-auto w-auto">

              {/* Left Section for Registration */}
              <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
              <p className=" mb-8">New here? Register and join us!</p>
              <button onClick={() => router.push('/signup')} className="bgcolor flex w-full justify-center border rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">

                Go for Registration<Image
                  // className="mx-auto h-10 w-auto"
                  src={arrowicon1}
                  alt="Your Company"
                />
              </button>
            </div>
          </div>
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto h-10 w-auto"
                src={ngologo}
                alt="Your Company"
              />
              <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block  leading-6 ">
                    Email address:
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={handleChange}
                      value={formData.email}
                      required
                      className="block w-full p-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary  sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block  leading-6 ">
                      Password:
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                      value={formData.password}
                      required
                      className="block w-full p-2.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button type="submit"
                    className="bgcolor flex w-full justify-center border rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm   "
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Not a member?{' '}
                <Link href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Start a 14 day free trial
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )

}
export default Login;