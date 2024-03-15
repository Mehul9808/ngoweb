// const Signup =  ({ searchParams } : any) => {
//     console.log(searchParams);

//     return (
//         <>
//             <h1>SSR Home Page</h1>
//             <h2>You passed { searchParams.name }</h2>
//         </>

//     )
// }

// export default Signup;

import ngoimg16 from "/public/Images/ngoimg16.jpg";
import uparrow from "/public/Images/uparrow.png";
import namelogo from "/public/Images/namelogo.png";
import emailimg from "/public/Images/emailimg.png";
import phoneimg from "/public/Images/phoneimg.png";
import locationimg from "/public/Images/locationimg.png";
import ngobackgroundtexture from "/public/Images/ngobackgroundtexture2.jpg";
import Image from 'next/image';
// import { useAuth } from '../components/AuthProvider';
// import { useAuth } from '@/app/components/AuthProvider';


const Signup = ({ searchParams }: any) => {
  


  return (
    <>
      <div className="dashboardbanner  flex justify-center items-center text-white md:text-6xl font-semibold leading-6 tracking-wide" style={{ backgroundImage: `url(${ngoimg16.src})`, width: "100%", height: "20rem" }}>
        <h1>Welcome</h1>

      </div>
      <div className="dashboardbody min-h-screen ">
        <div className="dashboardcontainer    md:container md:px-40 " >
          <div className=" md:container flex dashboard-center-container bg-white md:mx-auto grid grid-cols-10 ">
            <div className="col-span-3 border-2">
              <div className=" flex justify-center items-start">
                <div className="hi-container-dashboard rounded-xl overflow-hidden  shadow-[0_15px_30px_rgba(8,_112,_184,_0.7)] w-80">

                  <div className="px-6 py-6">
                    <div className="text-primary font-bold text-2xl mb-2">Hi,{searchParams.name}</div>
                    <p className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit   Maiores  eaque.
                    </p>
                    <p className="text-sm mt-2">your profile is <span className="text-primary"> 100%</span> complete.</p>
                  </div>
                </div>
              </div>
              {/* button start */}
              <div className="mt-12 dashboardbuttons flex flex-col justify-center relative overflow-hidden sm:py-1 sm:px-1">
                <div className="max-w-7xl mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                      <svg className="w-8 h-8 " fill="none" viewBox="0 0 24 24" style={{ color: "#36BA24" }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                      </svg>
                      <div className="space-y-2">
                        <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                        {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
                        <div className="flex justify-end pr-10 ">
                          <Image src={uparrow} className="uparrow" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* button ends */}
              <div className=" dashboardbuttons  flex flex-col justify-center relative overflow-hidden sm:py-1 sm:px-1">
                <div className="max-w-7xl mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                      <svg className="w-8 h-8 " fill="none" viewBox="0 0 24 24" style={{ color: "#36BA24" }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                      </svg>
                      <div className="space-y-2">
                        <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                        {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
                        <div className="flex justify-end pr-10 ">
                          <Image src={uparrow} className="uparrow" alt="..." />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" dashboardbuttons  flex flex-col justify-center relative overflow-hidden sm:py-1 sm:px-1">
                <div className="max-w-7xl mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" style={{ color: "#36BA24" }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                      </svg>
                      <div className="space-y-2">
                        <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                        {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
                        <div className="flex justify-end pr-10 ">
                          <Image src={uparrow} className="uparrow" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" dashboardbuttons flex flex-col justify-center relative overflow-hidden sm:py-1 sm:px-1">
                <div className="max-w-7xl mx-auto">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                      <svg className="w-8 h-8 " fill="none" viewBox="0 0 24 24" style={{ color: "#36BA24" }}>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                      </svg>
                      <div className="space-y-2">
                        <p className="text-slate-800">Learn how to make a glowing gradient background!</p>
                        {/* <a href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Article →</a> */}
                        <div className="flex justify-end pr-10 ">
                          <Image src={uparrow} className="uparrow" alt="..." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className=" dashboardinfocard1  col-span-7 flex justify-center items-center  " style={{backgroundImage:`url(${ngobackgroundtexture.src})`,  objectFit:"cover"}}>
              <div className="h-3/4  ">
                <div className="dashboardinfocard rounded-2xl shadow-lg min-w-96 ">
                <div className="px-6 py-6">
                  <h1 className="Aboutheading text-center text-3xl  py-3.5">My profile</h1>
                  <div className="flex justify-start py-8 ">
                    <span><Image src={namelogo} className="pr-5" alt="..." /></span>
                    <p className=""><b>Name:</b>&nbsp; <br/><span className="rounded  pr-20 py-1 border-2 shadow-lg bg-gray-300">{searchParams.name}</span></p>
                  </div>
                  <div className="flex justify-start py-8">
                    <span><Image src={emailimg} className="pr-5" alt="..." /></span>
                    <p className=""><b>Email:</b>&nbsp; <br/><span className="rounded  pr-20 py-1 border-2 shadow-lg bg-gray-300">{searchParams.email}</span></p>
                  </div>
                  <div className="flex justify-start py-8">
                    <span><Image src={phoneimg} className="pr-5" alt="..." /></span>
                    <p className=""><b>Phone Number:</b>&nbsp; <br/><span className="rounded  pr-20 py-1 border-2 shadow-lg bg-gray-300">{searchParams.phone}</span></p>
                  </div>
                  <div className="flex justify-start py-8">
                    <span><Image src={locationimg} className="pr-5" alt="..." /></span>
                    <p className=""><b>State:</b>&nbsp; <br/><span className="rounded  pr-20 py-1 border-2 shadow-lg bg-gray-300">{searchParams.state}</span></p>
                  </div>
                  {/* <p><span className="font-semibold ">Name:&nbsp;</span>{searchParams.name}</p>
                  <p><span className="font-semibold ">Email:&nbsp;</span>{searchParams.email}</p>
                  <p><span className="font-semibold ">Phone No.:&nbsp;</span>{searchParams.phone}</p>
                  <p><span className="font-semibold ">State:&nbsp;</span>{searchParams.state}</p> */}
                </div>
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