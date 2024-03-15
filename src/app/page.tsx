"use client"
import React from 'react';




import { useState } from 'react';
import { Button, ButtonGroup } from "@nextui-org/react";
import Slide from "./components/Slide";
import Slider from "./components/Slider";
import Slidey from "./components/Slidey";


import ImageSlider from './components/ImageSlider';
import Image from 'next/image';
import Card from './components/Card';
// import { Carousel } from 'flowbite-react';
import { Accordion } from 'flowbite-react';
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import './globals.css';
import ngoimg1 from "/public/Images/ngoimg1.jpg";
import ngoimg2 from "/public/Images/ngoimg2.jpg";
import ngoimg3 from "/public/Images/ngoimg3.jpg";
import ngoimg4 from "/public/Images/ngoimg4.jpg";
import ngoimg21bg from "/public/Images/ngoimg21bg.png";
import ngoimg6 from "/public/Images/ngoimg6.jpg";
import ngoimg7 from "/public/Images/ngoimg7.jpg";
import ngoimg9 from "/public/Images/ngoimg9.jpg";
import ngoimg26 from "/public/Images/ngoimg26.jpg";
import ngoimg27 from "/public/Images/ngoimg27.jpg";
import ngoimg28 from "/public/Images/ngoimg28.jpg";
import locationicon from "/public/Images/location.png";
import emailicon from "/public/Images/email.png";
import phonecallicon from "/public/Images/phonecall.png";
import dynamic from 'next/dynamic';
import arrowicon1 from "/public/Images/arrow1.png";
import backgroundtexture3 from "/public/Images/backgroundtexture3.jpg";
import texture2 from "/public/Images/texture2.png";
import ngoimg23 from "/public/Images/ngoimg23.webp";
import ssshape from "/public/Images/ssshape.svg";

import Carousel from '@/app/components/Carousel';

const CardsGridServer = dynamic(() => import('./components/CardsGrid.server'), {
  ssr: true,
});




export default function Home() {


  // for about section
  const img = require("/public/Images/ngoimg18.jpg");
  const styling = {
    backgroundImage: `url('${img.src}')`,
    width: "100%",
    height: "100%"
  }



  return (
    <>




      


       {/* carousels start */}
       <div>
      <Carousel />
    </div>

       {/* carousels end */}

     


      {/* about us section */}
     
      <div className=" aboutussection pt-20  grid grid-cols-1 sm:grid-cols-2 gap-4 " id="about" >
        {/* <div className="  w-full h-svh ">
          <Image src={ngoimg20} alt="about us image" className="" layout="fill"
            objectFit="cover"
            quality={100} /></div> */}
            
        <div className="col-span-1 flex items-center justify-center"  style={{ backgroundImage:`url(${ssshape.src})`, objectFit:"cover",  backgroundRepeat: "no-repeat" }}>
         
        
          <Image src={ngoimg21bg} alt="about us image" className="rounded-lg w-fit h-svh" style={{ objectFit: "cover" }} quality={100} />
        </div>
        <div className="md:container md:mx-auto md:px-20 grid grid-cols-1  sm:grid-cols-1  ">
          <div className="   flex flex-col justify-center items-center h-full sm:pb-20">
            <h2 className="Aboutheading text-4xl text-start pb-2.5">About Us</h2>

            <p className="text-center text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquab mpor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliquab mpor incididunt ut labore et dolore magna aliqua.</p>
            <p className="text-center mt-3 text-wrap">Sed do eiusmod tempor incididunt ut labore et dolore magna aliquab mpor incididunt ut labore et dolore magna aliqua.tempor incididunt ut labore et dolore magna aliquab mpor incididunt ut labore et dolore magna aliqua. </p>
          </div>


        </div>

      </div>
      {/* </div> */}
      <div className="vissionmission ">
        <div className="md:container  md:mx-auto md:px-20 grid grid-cols-1 sm:grid-cols-2 pt-24 pb-24" >
          <div className="vissioncard  col-span-1 flex p-6 justify-center items-center ">
          

            <Slide>
              {/* <div className="aboutcard px-6 py-4 max-w-md rounded-lg overflow-hidden drop-shadow-2xl">
                  <div className="Aboutheading  text-4xl mb-2">Our Vision</div>
                  <p className=" ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div> */}
              <div className="card">
                <div className="card-content">
                  <h2 className="card-title text-2xl font-bold">Our Vision</h2>
                  <p className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.

                  </p>

                </div>
              </div>
            </Slide>
            
          </div>
          
          <div className="col-span-1 flex items-center justify-center"  >
            <div className="p-6">

              <Slider>
                {/* <div className="aboutcard px-6 py-4 max-w-md rounded-lg overflow-hidden drop-shadow-2xl">
                    <div className="Aboutheading  text-4xl mb-2">Our Mission</div>
                    <p className=" ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div> */}
                <div className="card" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/medium-shot-community-solidarity-concept_23-2149182035.jpg?w=360&t=st=1707377512~exp=1707378112~hmac=28c4d8fc224d7b38a28d4a330657e753c9023580f96f00d97b7e7c4688d884e7)` }}>
                  <div className="card-content" >
                    <h2 className="card-title text-2xl font-bold">Our Mission</h2>
                    <p className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.

                    </p>

                  </div>
                </div>
              </Slider>
            </div>

          </div>
        </div>

      </div>
      {/* Service Section */}



      <div className="Servicessection pt-24" id="services">
        <div className="md:container md:mx-auto md:px-20   pb-12">
          <h2 className="Aboutheading text-4xl text-center pb-2.5">Our Services</h2>
          <p className="text-center text-wrap md:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="md:container md:mx-auto md:px-20  pb-4">
          <div className="flex justify-center ">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              {/* <Card
                title="Health"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              /> */}
              <Slide>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">

                  <Image className="shadow-lg object-cover h-60" src={ngoimg7} alt="Sunset in the mountains" />

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Health</div>
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
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
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
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
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
                    <p className=" ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>

                </div>
              </Slider>
            </div>
          </div>
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

                  <Image className="shadow-lg object-cover h-60" src={ngoimg26} alt="Sunset in the mountains" />

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Humanitarian Aid and Relief</div>
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
                    <p className=" ">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>

                </div>
              </Slide>
              <Slidey>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
                  <Image className="h-60 object-cover shadow-xl" src={ngoimg28} alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Social and Economic Development</div>
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>

                </div>
              </Slidey>
              <Slider>
                <div className="max-w-sm rounded-lg overflow-hidden shadow-xl">
                  <Image className="h-60 object-cover shadow-lg" src={ngoimg27} alt="Sunset in the mountains" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Advocacy and Human Rights</div>
                    <hr style={{backgroundColor:"#36BA24", height:"3px",}}></hr>
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
          <p className="text-center md:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua. labore et dolore magna aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. aliqua consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <div className="md:container mx-auto md:px-20  sm:px-5 grid grid-cols-1 sm:grid-cols-2  pb-24">
          <div className="  flex flex-col justify-center h-full">
            <h2 className=""><b>Contact Information</b></h2>
            <p className=" pb-5">Got a question or suggestion? We'd love to hear from you! Get in touch with us. </p>
            <Slider>
              <div className="mb-4">
              <div className=" bg-black rounded-xl  shadow-2xl" style={{ backgroundImage: `url(${ngoimg23.src})`, height: "100%", maxWidth: "100%", objectFit: "cover" }}>
                <div className="contactleftinformation">
                  <div className=" flex flex-row justify-start items-center  p-4">

                    <Image src={locationicon} alt="ngo website logo " className="mr-3 bg-white rounded-full border-none" />
                    <h2 className=""><b>Register Office Address:</b></h2></div>
                  <p className="md:ml-11  pb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. </p>
                </div>
              </div>
              </div>
            </Slider>
            <Slider>
            <div className="mb-4">
              <div className=" bg-black  rounded-xl shadow-2xl" style={{ backgroundImage: `url(${ngoimg23.src})`, height: "100%", maxWidth: "100%", objectFit: "cover" }}>
                <div className="contactleftinformation">
                  <div className=" flex flex-row justify-start   p-4">
                    <Image src={emailicon} alt="ngo website logo " className=" mr-3 bg-white rounded-full border-none" />
                    <span className=" "><b>Email:</b> xyz@gmail.com</span>
                  </div>
                </div>
              </div>
              </div>
            </Slider>
            <Slider>
            <div className=" bg-black  rounded-xl shadow-2xl" style={{ backgroundImage: `url(${ngoimg23.src})`, height: "100%", maxWidth: "100%", objectFit: "cover" }}>
            <div className="contactleftinformation">
              <div className="flex flex-row justify-start  p-4 ">
                <Image src={phonecallicon} alt="ngo website logo " style={{ height: "auto", }} className=" mr-3 bg-white rounded-full border-none" />
                <span className=" pb-2.5"><b>Call Us:</b> +91 98xx-xx-4455</span>
              </div>
              </div>
              </div>
            </Slider>
          </div>
          <div className="  flex flex-col justify-center h-full">
            <h2 className="Aboutheading text-2xl text-center pb-2.5">Write to us</h2>
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
                {/* <button type="submit" className="bgcolor text-white bg-blue-700   focus:outline-none   rounded-lg  w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button> */}
                <button type="submit" className="bgcolor flex  justify-center border rounded-md  px-6 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ">

                  Send Message<Image
                    // className="mx-auto h-10 w-auto"
                    src={arrowicon1}
                    alt="Your Company"
                  />
                </button>
              </Slider>
            </form>

          </div>
        </div>
      </div>




      {/* blogs section */}


      <div className="blogssection pt-24 pb-20" id="blogs" style={{ backgroundImage: `url(${backgroundtexture3.src})`,width:"100%", backgroundSize:"cover",}}>
        <div className="md:container md:mx-auto md:px-20 ">
          <h2 className="Aboutheading text-4xl text-center pb-2.5">Our Blogs</h2>
          <p className="text-center text-wrap pb-16 md:px-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center ">
            <CardsGridServer />
          </div>
        </div>
      </div>


      {/* accordion */}




      <div className="faqsection md:container md:mx-auto md:px-60   py-20 " id="faq" style={{backgroundImage:`url(${texture2.src})`}}>
        <h2 className="Aboutheading text-4xl text-center pb-2.5">Frequently Asked Questions</h2>

        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>How can I get involved with NGO?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              There are several ways to get involved with NGO, including volunteering, donating, or participating in our events and campaigns. Visit our "Get Involved" page for more information.
              </p>
             
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What projects or initiatives is NGO currently working on?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              NGO is currently involved in several projects/initiatives aimed at [briefly describe the focus or goal of the projects/initiatives]. Visit our "Projects" page for more detailed information.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How can I request assistance from NGO?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              If you or someone you know is in need of assistance, you can reach out to us through our contact form or by contacting us directly via phone or email. Our team will review your request and get back to you as soon as possible.
              </p>
             
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Does NGO offer internships or volunteer opportunities?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, NGO offers internships and volunteer opportunities for individuals who are passionate about our cause and want to make a difference. Visit our "Get Involved" page to learn more about current opportunities.
              </p>
             
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How can I contact NGO for more information?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              You can contact NGO by filling out the contact form on our website or by reaching out to us via phone or email. Our team will be happy to assist you with any questions or concerns you may have.
              </p>
            
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Does NGO accept corporate partnerships or sponsorships?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
              Yes, NGO welcomes corporate partnerships and sponsorships from organizations that share our values and goals. Please contact us to discuss potential collaboration opportunities.</p>
              
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>


      </div>



    </>

  )
}

