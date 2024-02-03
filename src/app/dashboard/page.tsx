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

const Signup = ({ searchParams }: any) => {

  return (
    <>
      <div className="dashboardbanner  flex justify-center items-center text-white md:text-6xl font-semibold leading-6 tracking-wide" style={{ backgroundImage: `url(${ngoimg16.src})`, width: "100%", height: "20rem" }}>
        <h1>Welcome</h1>

      </div>
      <div className="dashboardbody min-h-96">
      <div className="dashboardcontainer    md:container md:px-40">
        <div className=" md:container min-h-80 bg-white md:mx-auto grid grid-cols-10 ">
          <div className="col-span-4 flex justify-center items-center">
            <div className="max-w-sm rounded-xl overflow-hidden shadow-2xl  w-64">
              <div className="px-6 py-6">
                <div className="text-primary font-bold text-2xl mb-2">Hi,{searchParams.name}</div>
                <p className="text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit   Maiores  eaque.
                </p>
                <p className="text-sm mt-2">your profile is <span className="text-primary"> 100%</span> complete.</p>
              </div>

            </div>
          </div>
          <div className="col-span-6 flex justify-center items-center  ">
            <div className=" max-w-sm rounded-3xl overflow-hidden shadow-2xl">
            <div className="px-6 py-6">
              <h1 className="Aboutheading  text-3xl  py-2.5">My profile</h1>
              <p><span className="font-semibold ">Name:&nbsp;</span>{searchParams.name}</p>
              <p><span className="font-semibold ">Email:&nbsp;</span>{searchParams.email}</p>
              <p><span className="font-semibold ">Phone No.:&nbsp;</span>{searchParams.phone}</p>
              <p><span className="font-semibold ">State:&nbsp;</span>{searchParams.state}</p>
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