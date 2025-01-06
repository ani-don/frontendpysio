import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'





const TopDoctors = () => {

  const navigate=useNavigate()
  const {doctors}=useContext(AppContext)
 

 


  return (

    <>

    
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Physiotherapists to Book</h1>
        <p className='sm:w-1/3 text-center text-sm text-red-500'>Simply browse our Extensive list of Trusted Physios</p>
       
      
    </div>


    <section className="py-10 bg-gray-100">
  <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">


    {doctors.slice(0,8).map((item,index)=>(
    <article key={index} className="doc rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
     
        <div onClick={() =>{ navigate(`/appointment/${item._id}`); scrollTo(0,0)} } className="relative flex items-end overflow-hidden rounded-xl">
          <img src={item.image} alt="Hotel Photo" />
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>

          </div>
        </div>

        <div class="mt-1 p-2">
          <div className='flex items-center gap-2 text-sm text-center text-green-500'>
            <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
          </div>
          <h2 className="text-slate-700">{item.name}</h2>
          <p className="mt-1 text-sm text-slate-400">{item.speciality}</p>

        
        </div>
     
    </article>
    ))}
    </div>

    <center><button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-red-200 text-gray-600 px-12 py-3 rounded-full mt-10'>More</button></center>
</section>

    </>
  )
}

export default TopDoctors
