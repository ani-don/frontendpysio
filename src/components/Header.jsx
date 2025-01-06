import React, { useContext, useEffect } from 'react'
import group from '../assets/group.png'
import Aos from 'aos'

import 'aos/dist/aos.css';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Header = () => {

  useEffect(()=>{

    Aos.init({duration:3000});
    
    },[])


const {token} =useContext(AppContext)

  return (
  
  <div
    className="relative bg-[url(https://www.acesportsclinic.com.au/wp-content/uploads/2022/06/Shoulder-treatment-wall-frame-removed1.jpeg)] bg-cover bg-center bg-no-repeat  rounded-3xl"
  >
    <div
      className="absolute inset-0 sm:bg-transparent sm:from-900/95 sm:to-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
    >



      <div data-aos="fade-zoom-in" className="ms-2 mt-5 max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
   
        <h1 className="text-3xl font-extrabold text-black sm:text-5xl" >
         We Care About 
  
          <strong className="block mt-2 font-extrabold text-rose-600"  > Your Health. </strong>
        </h1>
  
        <div className="flex  flex-col md:flex-row items-center  text-black text-sm font-light text-justify">
        <img  className='w-28'  src={group} alt="" />
      
       <p style={{fontSize:"17px"}} className='font-light text-justify'>Simply browse through our extensive list of trusted Physiotherapists, schedule your appointment hassle-free</p>
        </div>
  

  {
    token ? 
    <div className="ms-14 mt-3 flex flex-wrap gap-4 text-center">


    <a
     
      className="block w-56 bg-white rounded-full  px-24  shadow   sm:w-auto"
    >

      <img className='w-10'  src='https://media2.giphy.com/media/QZDxWfEasmXPe7QykC/source.gif'/>
      
    </a>

    <Link to={'/doctors'}><a
     
      className="block w-full rounded-full bg-white px-10 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
    >
      Book Appointment   <i className="fa-solid fa-arrow-right"></i>
    </a></Link>
  </div> :  <div className="ms-14  mt-3 flex flex-wrap gap-4 text-center">


<Link to={'/login'}><a
 
  className="block w-full rounded-full bg-rose-600 px-20 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
>
  Get Started
</a></Link>

<Link to={'/login'}><a
 
  className="block w-full rounded-full bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
>
  Book Appointment   <i className="fa-solid fa-arrow-right"></i>
</a></Link>
</div>
  }
       
      </div>
    </div>
  </div>

  )
}

export default Header
