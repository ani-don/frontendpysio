import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import {AppContext} from'../context/AppContext'
const Doctors = () => {

  const {speciality}=useParams()
  const [filterDoc,setFilterDoc]=useState([])
const navigate=useNavigate()
  const {doctors}=useContext(AppContext)

  const applyFilter =()=>{
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality===speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{


applyFilter()
  },[doctors,speciality])
  return (
    <div>
      <p className='text-gray-600 text-center'>Browse through the physiotherapy Specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className=' flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>speciality==='Musculoskeletal and sports'? navigate('/doctors'): navigate('/doctors/Musculoskeletal and sports')} className={`doc2 w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-700 rounded-3xl transition-all cursor-pointer ${speciality === "Musculoskeletal and sports" ? "bg-black  text-white":" "  }`}>Musculoskeletal and sports</p>
          <p onClick={()=>speciality==='Neuro Physiotherapist'? navigate('/doctors'): navigate('/doctors/Neuro Physiotherapist')} className={`doc2 w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-700 rounded-3xl transition-all cursor-pointer ${speciality === "Neuro Physiotherapist" ? "bg-black  text-white":" "  }`}>Neuro Physiotherapist</p>
          <p onClick={()=>speciality==='Orthopedic Physiotherapist'? navigate('/doctors'): navigate('/doctors/Orthopedic Physiotherapist')} className={`doc2 w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-red-700 rounded-3xl transition-all cursor-pointer ${speciality === "Orthopedic Physiotherapist" ? "bg-black  text-white":" "  }`}>Orthopedic Physiotherapist</p>
          <p onClick={()=>speciality==='Cardio'? navigate('/doctors'): navigate('/doctors/Cardio')} className={`doc2 w-[94vw] sm:w-auto pl-3 py-2.5 pr-16 border border-red-700 rounded-3xl transition-all cursor-pointer ${speciality === "Cardio" ? "bg-black  text-white":" "  }`}>Cardio</p>
          <p onClick={()=>speciality==='Womens health'? navigate('/doctors'): navigate('/doctors/Womens health')} className={`doc2 w-[94vw] sm:w-auto pl-3 py-2.5 pr-16 border border-red-700 rounded-3xl transition-all cursor-pointer ${speciality === "Womens health" ? "bg-black  text-white":" "  }`}>Womens health</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterDoc.map((item,index)=>(
              <article key={index} className="doc rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
               
                  <div onClick={()=>navigate(`/appointment/${item._id}`)} className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={item.image} alt="" />
                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
          
                    </div>
                  </div>
          
                  <div className="mt-1 p-2">
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                      <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <h2 className="text-slate-700">{item.name}</h2>
                    <p className="mt-1 text-sm text-slate-400">{item.speciality}</p>
          
                  
                  </div>
             
              </article>
              ))
            }

          
        </div>
      </div>


    </div>
  )
}

export default Doctors
