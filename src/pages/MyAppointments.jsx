import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const MyAppointments = () => {

  const {backendUrl,token,getDoctorsData } =useContext(AppContext)

const [appointments,setAppointments]=useState([])
const months = ["", "Jan", "Feb", "Mar","Apr","May","June", "Jul","Aug","Sep","Oct","Nov","Dec"]



const slotDateFormat=(slotDate)=>{
  const dateArray =slotDate.split('_')
  return dateArray[0]+" "+months[Number(dateArray[1])] + " " + dateArray[2]
}

const navigate= useNavigate()


const getUserAppointments =async () => {

  try {

    const {data}=await axios.get(backendUrl + '/api/user/appointments',{headers:{token}})
    if (data.success) {
      
      setAppointments(data.appointments.reverse())
      console.log(data.appointments);
      
    }
    
  } catch (error) {
    console.log(error);

    toast.error(error.message)
    
  }
  
}


const cancelAppointment =async (appointmentId) => {
  
  try {

    // console.log(appointmentId);
    const {data}=await axios.post(backendUrl +'/api/user/cancel-appointment',{appointmentId},{headers:{token}})
    if (data.success) {
      toast.success(data.message)
      getUserAppointments()
      getDoctorsData()
    }
    else{
      toast.error(data.message)
    }
    
    
  } catch (error) {
    console.log(error);

    toast.error(error.message)
  }
}


const initPay = (order)=>{

 const options ={
  key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  amount:order.amount,
  currency:order.currency,
  name:'Appointment Payment',
  description:'Appointment Payment',
  order_id:order.id,
  receipt:order.receipt,
  handler:async (response) => {
  console.log(response);


  try {
    const {data} =await axios.post(backendUrl +'/api/user/verifyRazorpay',response,{headers:{token}})


    if (data.success) {
      getUserAppointments()
      navigate('/my-appointments')

    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
    
  }
    
  }
 }


 const rzp = new window.Razorpay(options)
 rzp.open()

}

const appointmentRazorpay =async (appointmentId) => {

  try {

    const {data} =await axios.post(backendUrl +'/api/user/payment-razorpay',{appointmentId},{headers:{token}})


    if (data.success) {
      // console.log(data.order);

      initPay(data.order)

      
    }
    
  } catch (error) {
    
  }
  
}

useEffect(()=>{
if (token) {
  getUserAppointments()
}
},[token])




  return (
<>
    <div className=' text-center text-xl text-red-500 font-bold '>
      <p>My Appointments</p>
    </div>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
  
      {
        appointments.map((item,index)=>(
          <div key={index} className=" md:flex">
          <div className="md:flex-shrink-0">
          <img className="doc4 md:h-48 w-full object-cover md:w-44"  src={item.docData.image} alt="Doctor's image"/>
          </div>
          <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{item.docData.name}</div>
          <hr />
          <p className="block mt-1 text-lg leading-tight font-medium text-black">Speciality:{item.docData.speciality}</p>
          <p className="mt-2 text-gray-500">Address:</p>
          <hr />
          <p className="mt-2 text-gray-500">{item.docData.address.line1}</p>
          <p className="mt-2 text-gray-500">{item.docData.address.line2}</p>
          <p className="mt-2 text-gray-500"><span>Date & Time</span>: {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
          <hr />
         <div className='flex flex-row gap-3'>
         {!item.cancelled && item.payment && !item.isCompleted && <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Paid</button>}
{!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentRazorpay(item._id)} className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Pay Online
</button>}




{!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className="mt-5 px-4 py-2  border border-red-600 text-sm font-medium rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
  Cancel Appointment
</button>}
{item.cancelled && !item.isCompleted && <button classNameName="mt-5 px-4 py-2  border border-purple-800 text-sm font-medium rounded-md   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Appointment cancelled</button>}
{item.isCompleted && <button classNameName='sm:min-w-48 border border-green-500 text-green-500 rounded'>Completed</button>}
          
        
          </div>
          </div>
      </div>

       ) )}
       
    </div>
    </>
  )
}

export default MyAppointments
