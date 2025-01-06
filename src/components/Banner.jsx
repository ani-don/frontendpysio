import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Banner = () => {
const {token } = useContext(AppContext)
  return (

    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div data-aos="slide-left" class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2  className="text-2xl font-bold text-gray-900 md:text-3xl">
        Book Appointment <br />
        With 100+ Trusted Physiotherapists
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Physiotherapy is a highly effective specialty treatment for injury, disorder. It is a treatment that uses specific physical methods in restoring mobility and movement in the affected area. 
      </p>

      <div className="mt-4 md:mt-8">


{
  token ? 
  <Link to={'/doctors'}><button
        
  className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
>
search for your Physios
</button></Link>:
 <Link to={'/login'}><button
        
 className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
>
create account
</button></Link>
}

      
      </div>
    </div>
  </div>

  <img data-aos="slide-right"
    alt=""
    src="https://www.universitymagazine.ca/wp-content/uploads/2020/07/Best-Physiotherapy-Schools-In-America-2020.jpg"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>

  )
}

export default Banner
