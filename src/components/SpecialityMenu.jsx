import React from 'react'
import { Link } from 'react-router-dom'
import { specialityData, specialityData1, specialityData2, specialityData3, specialityData4 } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <>
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'> 
    <h1 className='text-3xl font-medium'>Find By Speciality</h1>
    <p className='ms-5 text-red-500'>Simply browse through our extensive list of trusted Physios, schedule your appointment hassle-free
    </p>
  
    </div>

<div  className="h-64 rounded-md overflow-hidden bg-cover bg-center bg-[url(https://www.edkirbyphysio.co.uk/wp-content/uploads/2019/11/MSK.jpg)]">
<div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
    <div data-aos="slide-left"  className="px-10 max-w-xl">
        <h2 className="text-2xl text-white font-semibold">Musculoskeletal and sports</h2>
        <p className="mt-2 text-gray-400">Musculoskeletal 'MSK' physiotherapy treats various injuries, illnesses, and diseases affecting the joints, muscles, ligaments and tendons.</p>
        {specialityData.map((item,index)=>(
        <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link key={index} to={`/doctors/${item.speciality}`}><span>Book Appointment</span></Link>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        ))}
    </div>
</div>
</div>

<div className="md:flex mt-8 md:-mx-4">
                <div  className="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 bg-[url(https://th.bing.com/th/id/OIP.cmNkK4bs_SUB7l5iS2NQtgHaEL?rs=1&pid=ImgDetMain)]" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div  data-aos="zoom-in" className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Neuro physiotherapy</h2>
                            <p className="mt-2 text-gray-400">Rehabilitation is aided by preventing muscular atrophy and loss of function brought on by inactivity.</p>
                            {specialityData1.map((item,index)=>(
                            <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link key={index}  to={`/doctors/${item.speciality}`}><span>Book here</span></Link>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        ))}
                        </div>
                    </div>
                </div>
                <div  className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-[url(https://blog.rehabselect.net/hubfs/orthopedic%20rehab%20physical%20therapy.jpeg)]">
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div  data-aos="zoom-in" className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Orthopedic physiotherapy
                            </h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias </p>
                            {specialityData2.map((item,index)=>(
                            <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link key={index} to={`/doctors/${item.speciality}`}><span>Book here</span></Link>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        ))}
                        </div>
                    </div>
                </div>
                <div   className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-[url(https://www.ayursh.com/wp-content/uploads/2022/11/chest_physiotherapy.jpg)]" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div data-aos="zoom-in" className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Cardio
                            </h2>
                            <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                            {specialityData3.map((item,index)=>(
                            <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link key={index} to={`/doctors/${item.speciality}`}><span>Book here</span></Link>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        ))}
                        </div>
                    </div>
                </div>
                <div  className="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 bg-[url(https://global-uploads.webflow.com/60d3395d60e9503a507bae32/60ffe991f5eae6f10eed54c1_Womens%20Health%20Physiotherapy.png)]" >
                    <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
                        <div data-aos="zoom-in" className="px-10 max-w-xl">
                            <h2 className="text-2xl text-white font-semibold">Womens health</h2>
                            <p className="mt-2 text-gray-400">Physiotherapy plays a vital role in women's health, addressing various issues from pelvic floor dysfunction and postpartum</p>
                            {specialityData4.map((item,index)=>(
                            <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <Link key={index} to={`/doctors/${item.speciality}`}><span>Book here</span></Link>
            <svg className="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
        ))}    </div>
                    </div>
                </div>
            </div>
</>
  )
}

export default SpecialityMenu
