"use client"
import React from 'react';
import { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/react";
import  Slide  from "./components/Slide";
import  Slider  from "./components/Slider";
import  Slidey  from "./components/Slidey";


import ImageSlider from './components/ImageSlider';
import Image from 'next/image';
import Card from './components/Card';
import { Carousel } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './globals.css';
import ngoimg1 from "/public/Images/ngoimg1.jpg";
import ngoimg2 from "/public/Images/ngoimg2.jpg";
import ngoimg3 from "/public/Images/ngoimg3.jpg";
import ngoimg4 from "/public/Images/ngoimg4.jpg";
import ngoimg5 from "/public/Images/ngoimg5.jpg";
import ngoimg6 from "/public/Images/ngoimg6.jpg";
import ngoimg7 from "/public/Images/ngoimg7.jpg";
import ngoimg9 from "/public/Images/ngoimg9.jpg";
import locationicon from "/public/Images/location.png";
import emailicon from "/public/Images/email.png";
import phonecallicon from "/public/Images/phonecall.png";
import dynamic from 'next/dynamic';

const CardsGridServer = dynamic(() => import('./components/CardsGrid.server'), {
  ssr: true,
});
export default function Home() {



  return (
    <>




      <div className="h-56  md:h-screen">
        <Carousel slideInterval={3000}>

          <Image src={ngoimg2} alt="..." />
          <Image src={ngoimg1} alt="..." />
          <Image src={ngoimg3} alt="..." />
          <Image src={ngoimg4} alt="..." />
        </Carousel>
      </div>
      

      





      {/* about us section */}
      <div className="aboutussection " id="about">

        <div className="md:container md:mx-auto md:px-20 grid grid-cols-1 sm:grid-cols-2  py-24">
          <div className="  flex flex-col justify-center h-full">
            <h2 className="Aboutheading text-4xl text-center pb-2.5">About Us</h2>

            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

          </div>
          <div className="col-span-1 flex items-center justify-center">
            <Image src={ngoimg5} alt="about us image" className="rounded-lg w-96 h-auto" />
          </div>

        </div>
        <div className="md:container  md:mx-auto md:px-20 grid grid-cols-1 sm:grid-cols-2  pb-24">
          <div className="  col-span-1 flex p-6 justify-center items-center ">
            
            <Slide>
              <div className="aboutcard px-6 py-4 max-w-md rounded-lg overflow-hidden drop-shadow-2xl">
                <div className="Aboutheading  text-4xl mb-2">Our Vision</div>
                <p className=" ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
            </Slide>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="p-6">
              {/* <h5 className="Aboutheading text-center text-4xl block mb-2 font-sans  antialiased  leading-snug tracking-normal text-blue-gray-900">
                Our Mission
              </h5>
              <p className="block  text-base antialiased leading-relaxed ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p> */}
              <Slider>
              <div className="aboutcard px-6 py-4 max-w-md rounded-lg overflow-hidden drop-shadow-2xl">
                <div className="Aboutheading  text-4xl mb-2">Our Mission</div>
                <p className=" ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
              </div>
              </Slider>
            </div>
            {/* <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button">
              Read More
            </button>
          </div> */}
          </div>
        </div>
      </div>


      {/* Service Section */}



      <div className="Servicessection pt-24" id="services">
        <div className="md:container md:mx-auto md:px-20   pb-24">
          <h2 className="Aboutheading text-4xl text-center pb-2.5">Our Services</h2>
          <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="md:container md:mx-auto md:px-20  pb-24">
          <div className="flex justify-center ">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              {/* <Card
                title="Health"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              /> */}
              <Slide>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
               
                <Image className="shadow-lg object-cover h-60"  src={ngoimg7} alt="Sunset in the mountains" />
               
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Health</div>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>

              </div>
              </Slide>
              <Slidey>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
                <Image className="h-60 object-cover shadow-xl" src={ngoimg9} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Education</div>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>

              </div>
              </Slidey>
              <Slider>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
                <Image className="h-60 object-cover shadow-lg" src={ngoimg6} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Livlihood</div>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>

              </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>



      {/* Contact us */}


      <div className="contactussection pt-24" id="contact">
        <div className="md:container md:mx-auto md:px-20   pb-14">
          <h2 className="Aboutheading text-4xl text-center pb-2.5">Contact Us</h2>
          <p className="text-center ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="md:container mx-auto md:px-20 grid grid-cols-1 sm:grid-cols-2  pb-24">
          <div className="  flex flex-col justify-center h-full">
            <h2 className=""><b>Contact Information</b></h2>
            <p className=" pb-5">Got a question or suggestion? We'd love to hear from you! Get in touch with us. </p>
            <div className="flex flex-row justify-start">

              <Image src={locationicon} alt="ngo website logo " className="mr-3 " />
              <h2 className=""><b>Register Office Address:</b></h2></div>
            <p className="md:ml-11  pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. </p>
            <div className="flex flex-row justify-start">
              <Image src={emailicon} alt="ngo website logo " className="mb-5 mr-3 " />
              <span className=" pb-2.5"><b>Email:</b> xyz@gmail.com</span>
            </div>
            <div className="flex flex-row justify-start">
              <Image src={phonecallicon} alt="ngo website logo " className=" mr-3 " />
              <span className=" pb-2.5"><b>Call Us:</b> +91 98xx-xx-4455</span>
            </div>

          </div>
          <div className="  flex flex-col justify-center h-full">
            <h2 className="Aboutheading text-3xl text-center pb-2.5">Write to us</h2>
            <form className=" md:mx-14  ">
              <div className="mb-5 ">
                <label htmlFor="name" className="block mb-1   dark:text-white">Your Name:</label>
                <Slider>
                <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Your good name" required />
                </Slider>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-1 dark:text-white">Your Email:</label>
                <Slider>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="name@flowbite.com" required />
                </Slider>
              </div>
              {/* <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
  </div> */}
              <div className="mb-5">
                <label htmlFor="phonenumber" className="block mb-1 dark:text-white">Your Phone No.:</label>
                <Slider>
                <input type="tel" id="phonenumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Write your phone number" required />
                </Slider>
              </div>
              <div className="mb-5">
                <label htmlFor="floating-input" className="block mb-1 dark:text-white">Your Message:</label>
                <Slider>
                <input type="text" id="floating-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary" placeholder="Write a comment" required />
                </Slider>
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-7">
                  <input id="remember" type="checkbox" value="" className="w-5 h-5 border border-gray-300 rounded bg-gray-50 focus:ring-0  dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                </div>
                <label htmlFor="remember" className="ms-2 dark:text-gray-300">Remember me</label>
              </div>
              <Slider>
              <button type="submit" className="bgcolor text-white bg-blue-700   focus:outline-none   rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
              </Slider>
            </form>

          </div>
        </div>
      </div>




      {/* blogs section */}


      <div className="blogssection py-24" id="blogs">
        <div className="md:container md:mx-auto md:px-20 ">
          <h2 className="Aboutheading text-4xl text-center pb-2.5">Our Blogs</h2>
          <p className="text-center pb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center h-screen">
            <CardsGridServer />
          </div>
        </div>
      </div>


      {/* accordion */}




      <div className="faqsection md:container md:mx-auto md:px-20 py-48" id="faq">
        <h2 className="Aboutheading text-4xl text-center pb-2.5">Frequently Asked Questions</h2>

        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                {/* <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500"> */}
                Figma design system
                {/* </a> */}
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                {/* <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500"> */}
                Figma design system
                {/* </a> */}
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                {/* <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500"> */}
                Figma design system
                {/* </a> */}
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the
                {/* <a href="" className="text-cyan-600 hover:underline dark:text-cyan-500"> */}
                Figma design system
                {/* </a> */}
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>


      </div>



    </>

  )
}

