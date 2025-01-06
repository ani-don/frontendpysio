import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';



const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl ,token, getDoctorsData } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

  const navigate=  useNavigate()

  const [docInfo, setDocInfo] = useState(null)


  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime,setSlotTime]=useState('')

  // Fetch doctor info
  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo)
  };

  // Generate available slots for the week
  const getAvailableSlots = async () => {
    setDocSlots([]) // Clear existing slots

    let today = new Date()
    

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      
      let endTime = new Date(currentDate);
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)


      // Set start and end times for slots
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else {
     currentDate.setHours(10)
     currentDate.setMinutes(0)
      }

      let timeSlots =[]

      while (currentDate < endTime) {
       let formattedTime = currentDate.toLocaleTimeString([],{hour: "2-digit", minute: "2-digit"})

       let day = currentDate.getDate()
       let month =currentDate.getMonth()+1
       let year = currentDate.getFullYear()

       const slotDate =day +"_" +month +"_" +year
       const slotTime =formattedTime


       const isSlotAvailable =docInfo.slots_booked[slotDate]&& docInfo.slots_booked[slotDate].includes(slotTime)? false : true
        

if (isSlotAvailable) {
  
      //add slot
      timeSlots.push({
        datetime : new Date(currentDate),
        time: formattedTime
      })
}

    
//increment
currentDate.setMinutes(currentDate.getMinutes()  + 30)

      }

      setDocSlots(prev => ([...prev, timeSlots]))

     
    }
  }


  const bookAppointment = async ()=>{
    if (!token) {
      toast.warn('Login To Book Appointment')
      return navigate('/login')
    }

    try {

      const date= docSlots[slotIndex][0].datetime

      let day = date.getDate()
      let month =date.getMonth()+1
      let year =date.getFullYear()

      const slotDate = day + "_"+ month +"_" + year
     

      const {data} = await axios.post(backendUrl + '/api/user/book-appointment',{docId, slotDate,slotTime},{headers:{token}})
      if (data.success) {

        toast.success(data.message)
        getDoctorsData()
        navigate('/my-appointments')
      }else{
        toast.error(data.message)
      }
      
      
    } catch (error) {
      
console.log(error);
toast.error(error.message)


    }
  } 
  
  

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
   getAvailableSlots()
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return docInfo && (
    <div>
      {/* Doctor Details */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div style={{ height: '300px' }} className="group rounded-lg relative block bg-gray-300">
          <img
            alt=""
            src={docInfo.image}
            className="absolute inset-0 h-full w-full object-contain opacity-100 transition-opacity group-hover:opacity-40"
          />
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div>
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-bold uppercase tracking-widest bg-black rounded-lg p-3 text-red-500">
                  {docInfo.speciality} <span className="text-sm text-blue-600">{docInfo.experience} years</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="doci flex-1 border border-red-600 rounded-lg p-8 py-7 bg-black mx-2 sm:mx-0 mt-[80px] sm:mt-0">
          <p className="flex items-center gap-2 text-2xl font-medium m-1">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <hr />
          <div className="flex items-center gap-2 text-sm mt-1">
            <p>
              {docInfo.degree}-{docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience} years</button>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium mt-3">
            <p>
              About
              <p className="text-sm max-w-[700px] mt-1">{docInfo.about}</p>
            </p>
          </div>
          <p className="mt-3">
            Appointment fee: <span className="text-green-500">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* booking */}
      <div className='sm:ml-72 sm:p-4 mt-4 font-medium   text-gray-700'>
        <p>Booking Slots</p>
        <div className='do flex gap-3 items-center overflow-x-scroll   mt-4'>
          {
            docSlots.length && docSlots.map((item, index)=>(
              <div onClick={()=>setSlotIndex(index)} key={index} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-black text-white' : 'border border-red-600'}`}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>

              </div>

            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots[slotIndex].map((item,index)=>(
< p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time ===slotTime ? 'bg-red-500 text-white ':'text-gray-500 border border-red-500'} `} key={index}>
{item.time.toLowerCase()}
</p>
            ))
          }
        </div>
<button onClick={bookAppointment} className= 'butt bg-black text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book An Appointment</button>
      </div>

      {/* rel doc */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
      </div>
     
  )
}
         





export default Appointment;
