import React, { useContext, useState } from 'react'

import { AppContext } from '../context/AppContext'

import axios from 'axios'
import { toast } from 'react-toastify'

const MyProfile = () => {


  const {userData,setUserData, token ,backendUrl,loadUserProfileData}= useContext(AppContext)


const [isEdit,setIsEdit]=useState(true)
const [image,setImage]=useState(false)

const updateUserProfileData= async () => {
  

try {
  const formData =new FormData()

  formData.append('name',userData.name)
  formData.append('phone',userData.phone)
  formData.append('address',JSON.stringify( userData.address))
  formData.append('gender',userData.gender)
  formData.append('dob',userData.dob)

  image && formData.append('image',image)

  const {data} =await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})

  if (data.success) {

    toast.success(data.message)
   await loadUserProfileData()
   setIsEdit(false)
   setImage(false)
  }else{
    toast.error(data.message)
  }

} catch (error) {
  
console.log(error);
toast.error(error.message)

}

}


  return userData && (

<body className=" bg-[url(https://th.bing.com/th/id/R.19c2cb4b4f8db8ab6b71d5d87f52c8c7?rik=nCCzgdIfxG6ILQ&riu=http%3a%2f%2fwww.womensmedicalcenterrhodeisland.com%2fwp-content%2fuploads%2f2018%2f08%2fphysio.jpg&ehk=haR92XZ96drXzP6KcbYwaK5SWMCyFy3JvxJ8LiSWtrE%3d&risl=&pid=ImgRaw&r=0)] bg-cover bg-center bg-no-repeat rounded-3xl min-h-screen flex items-center justify-center p-4">
    <div className="dark:bg-black rounded-xl shadow-2xl max-w-4xl w-full p-8 transition-all duration-300 animate-fade-in">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 text-center mb-8 md:mb-0">

            {
              isEdit ? <label htmlFor="image">
<div className='inline-block relative cursor-pointer'>
<img className='w-48 rounded-full opacity-75' src={image ?  URL.createObjectURL(image):userData.image}alt=''/>

</div>

<input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden/>


              </label>: <img src={userData.image}alt="" className="rounded-full w-48 h-50 mx-auto mb-4 border-4 border-indigo-800 dark:border-blue-900 transition-transform duration-300 hover:scale-105"/>
            }
                
                {
                  isEdit ? <input className=' dark:bg-gray-800 p-1  rounded-3xl text-xl text-white text-center' type='text' value={userData.name}  onChange={e => setUserData(prev => ({...prev,name:e.target.value}))}/> : <h1 class="text-2xl font-bold text-indigo-800 dark:text-white mb-2">{userData.name}</h1>
                }
               
             
               
                
                {
                isEdit ? <button className="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300" onClick={updateUserProfileData}> Save Information</button>: <button class="mt-4 bg-indigo-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors duration-300" onClick={()=> setIsEdit(true)}>Edit</button>
              }
               
            </div>
            <div className="md:w-2/3 md:pl-8">
                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mb-4">About Me</h2>
             <hr />
             
          
                <h2 className="text-xl font-semibold text-indigo-800 dark:text-white mt-4 mb-4">Contact Information</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                   {userData.email}
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                       
                        {
                  isEdit ? <input type='text' className=' dark:bg-gray-800 p-1  rounded-3xl text-sm text-white text-center'  value={userData.phone}  onChange={e => setUserData(prev => ({...prev,phone:e.target.value}))}/> : <p>{userData.phone} </p> 
                }
                    </li>
                    <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-800 dark:text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                       

                        {
                  isEdit ? <p><input className=' dark:bg-gray-800  p-1  rounded-3xl text-sm text-white text-center'  type='text'   onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address, line1 : e.target.value}}))} value={userData.address.line1}/> <br /> <input className=' dark:bg-gray-800 p-1 mt-2 rounded-3xl text-sm text-white text-center' type='text'    onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address, line2 : e.target.value}}))} value={userData.address.line2}/> <br /> </p> :  <p>{userData.address.line1}  <br /> {userData.address.line1}  </p> 
                }
                    </li>
                </ul>
                <div>
              <p className="text-xl font-semibold text-indigo-800 dark:text-white mt-4 mb-4">BASIC INFORMATION</p>
              <hr />
              <div className='mt-3 '><p class="space-y-2 text-gray-700  dark:text-gray-300">Gender :</p>
              
              {
                  isEdit ? <select className=' dark:bg-gray-800 p-2  rounded-3xl text-sm text-white '  onChange={(e) => setUserData(prev => ({...prev,gender: e.target.value}))} value={userData.gender}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select> : <p className="space-y-2 text-gray-700 dark:text-gray-300"> {userData.gender} </p>
                }

                <p className="space-y-2 text-gray-700 dark:text-gray-300">Birthday: </p>
                {
                  isEdit 
                  ? <input className=' dark:bg-gray-800 p-2 rounded-3xl text-sm text-white '   type='date'  onChange={(e) => setUserData(prev => ({...prev,dob: e.target.value}))} value={userData.dob}/>: <p class="space-y-2 text-gray-700 dark:text-gray-300">{userData.dob}</p>
                }
              </div>
            </div>

           
            </div>
           
        </div>
    </div>

</body>

 

  )
}

export default MyProfile
