import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


import physio from'../assets/physiocare.png'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

const navigate=useNavigate();
const {token ,setToken,userData}= useContext(AppContext)

const [showMenu,setShowMenu]=useState(false)


const logout =()=>{
  setToken(false)
  localStorage.removeItem('token')
}



  return (
    <div className='flex items-center justify-between text-sm py-2 mb-5 border-b border-b-red-400'>
      <img onClick={()=>navigate('/')} className='w-40 cursor-pointer' src={physio} alt=''/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
      <NavLink to='/'>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">HOME</li>

        </NavLink>
        <NavLink to='/doctors'>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">ALL DOCTORS</li>

        </NavLink>
        <NavLink to='/about'>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">ABOUT</li>

        </NavLink>
        <NavLink to='/blog'>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">BLOG</li>

        </NavLink>
        <NavLink to='/contact'>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">CONTACT</li>

        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
            token && userData  ?<div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={userData.image}alt=''/>
                <img className='w-7' src='https://cdn1.iconfinder.com/data/icons/basic-mobile-ios-android/24/Dropdown-Down-512.png' alt=''/>
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-50 hidden group-hover:block'>
                    <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                    </div>
                </div>
            </div>
            :
            <button className="rounded-full bg-red-600 p-3 px-5 py-3 text-sm  font-semibold text-white shadow-sm transition-all duration-150 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 hidden md:block"
               onClick={()=>navigate('/login')} >Create Account</button> 
        }
        <img onClick={()=>setShowMenu(true)} className='w-6  md:hidden' src={assets.icon2} alt=''/>
        {/* mobile */}
        <div className={`${showMenu ? 'fixed w-full ' : 'h-0 w-0'}  md:hidden  bg-white right-0 top-0 bottom-0 z-20  overflow-hidden transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-44'  src={assets.physio} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.icon1} alt="" />
          

          </div>
          


<ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-light'>
  <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded-full inline-block bg-gray-500 text-white'>HOME</p></NavLink>
  <NavLink  onClick={()=>setShowMenu(false)}  to='/doctors'><p className='px-4 py-2 rounded-full inline-block bg-gray-500 text-white'>ALL PHYISOTHERAPISTS</p></NavLink>
  <NavLink  onClick={()=>setShowMenu(false)}  to='/about'><p className='px-4 py-2 rounded-full inline-block bg-gray-500 text-white'>ABOUT</p></NavLink>
  <NavLink  onClick={()=>setShowMenu(false)}  to='/blog'><p className='px-4 py-2 rounded-full inline-block bg-gray-500 text-white'>BLOG</p></NavLink>
  <NavLink  onClick={()=>setShowMenu(false)}  to='/contact'><p className='px-4 py-2 rounded-full inline-block bg-gray-500 text-white'>CONTACT</p></NavLink>
  

</ul>

        </div>

        
    
            </div>
    </div>
  )
}

export default Navbar
