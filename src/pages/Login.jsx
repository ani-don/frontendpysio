import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {


  const {backendUrl , token ,setToken} =useContext(AppContext)
  const navigate = useNavigate()



  const [state, setState] = useState('Sign up to phyisocare')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [setImage]= useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault()


    try {

      if (state === 'Sign up to phyisocare') 
      {

        const {data} = await axios.post(backendUrl + '/api/user/register',{name ,password,email})
        if(data.success){
          localStorage.setItem('token',data.token)

          setToken(data.token)
        }else{
          toast.error(data.message)
        }
        
      }else{

        
        const {data} = await axios.post(backendUrl + '/api/user/login',{password,email})
        if(data.success){
          localStorage.setItem('token',data.token)

          setToken(data.token)
        }else{
          toast.error(data.message)
        }

      }
      
    } catch (error) {
      toast.error(error.message)
    }



  }



useEffect(()=>{
  if (token){
navigate('/')
  }

},[token])

  return (
    <section className="bg-white">
      <div onSubmit={onSubmitHandler} className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div  className="absolute inset-0">
            { state ==='Sign up to phyisocare'?
            <img  className="object-cover object-top w-full h-full"  onClick={()=>setImage('Sign up to phyisocare')} src="https://www.health-challenges.com/wp-content/uploads/2020/11/physiotherapy.jpg" alt="" /> :  <img className="object-cover object-top w-full h-full" src="https://www.thephysioco.com.au/wp-content/uploads/2018/06/bigstock-Portrait-Of-Physiotherapist-Do-238971859-1024x684.jpg" onClick={()=>setImage('Login')} alt="" />
            }
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">

              { state ==='Sign up to phyisocare'?
              <h3 className="text-4xl font-bold text-white">Your One-Stop
             <br className="hidden xl:block" /> Physiotherapy Solution  </h3>:
              <h3 className="text-4xl font-bold text-white">Schedule An 
             <br className="hidden xl:block" /> Appointment Now! </h3>
}
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> Services offered </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> CB Specialities </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> What We Treat </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                    <svg className="w-3.5 h-3.5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-white"> Therapies offered </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl"> {state === 'Sign up to phyisocare' ? "Create Account" : "Login"}</h2>

            <p className="mt-2 text-base  text-red-600">{state === 'Sign up to phyisocare' ? "Sign up to phyisocare" : "log in"}  to book appointment</p>

            {
              state === "Sign up to phyisocare" && <div className='mt-3'>
                <label for="" className="text-base font-medium text-gray-900"> Full Name </label>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    type="name"
                   
                    placeholder="Enter full name"
                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    onChange={(e) => setName(e.target.value)} value={name}
                  />
                </div>
              </div>
            }

            <form action="" method="POST" className="mt-8">
              <div className="space-y-5">

                <div>
                  <label for="" className="text-base font-medium text-gray-900"> Email address </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>

                    <input
                      type="email"
                     
                      placeholder="Enter email to get started"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      onChange={(e) => setEmail(e.target.value)} value={email}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label for="" className="text-base font-medium text-gray-900"> Password </label>


                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>

                    <input
                      type="password"
                     
                      placeholder="Enter your password"
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                  </div>
                </div>

                <div>
                  <button type='submit'

                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    {state === 'Sign up to phyisocare' ? "Create Account" : "Login"}
                  </button>

                  {
                    state === "Sign up to phyisocare" ? <p className='mt-2'>Already have an account? <span onClick={()=>setState('Login')} className='text-blue-600 cursor-pointer'>Login here</span></p> : <p className='mt-2'>Don’t have an account? <span onClick={()=>setState('Sign up to phyisocare')}  className='text-blue-600 cursor-pointer' >Create Account</span></p>
                  }
                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>

  )
}

export default Login
