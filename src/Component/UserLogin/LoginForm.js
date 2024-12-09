import React, { useState } from 'react'

const LoginForm = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const switchAuth = () => {
      setUserLoggedIn(!userLoggedIn);
  }

  return (
    <div className='flex justify-center items-center w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='mb-[50px] max-w-[450px] w-full'>
            <div className='login-form-bg'>
               <header className='mb-[28px]'>
                  <span className='text-4xl font-extrabold text-white'>{userLoggedIn ? 'Sign In' : 'Sign Up'}</span>
               </header>
               { userLoggedIn ? (
               <form className='flex flex-col gap-4'>
                  <div className='background-white-overlay w-full h-14 rounded-md px-5 pt-1'>
                     <label className='text-sm text-light'>Email or mobile number</label>
                     <input type="text" className=' outline-none w-full bg-transparent text-light text-sm' />
                  </div>

                  <div className='background-white-overlay w-full h-14 rounded-md px-5 pt-1'>
                     <label className='text-sm text-light'>Password</label>
                     <input type="password" className=' outline-none w-full bg-transparent text-light text-sm' />
                  </div>

                  <button className=' bg-[#E50914] text-light text-sm h-10 rounded-md'>Sign In</button>
               </form>
               ) : (
                  <form  className='flex flex-col gap-4'>
                  <div className='background-white-overlay w-full h-14 rounded-md px-5 pt-1'>
                     <label className='text-sm text-light'>Full Name</label>
                     <input type="text" className=' outline-none w-full bg-transparent text-light text-sm' />
                  </div>

                  <div className='background-white-overlay w-full h-14 rounded-md px-5 pt-1'>
                     <label className='text-sm text-light'>Email or mobile number</label>
                     <input type="text" className=' outline-none w-full bg-transparent text-light text-sm' />
                  </div>

                  <div className='background-white-overlay w-full h-14 rounded-md px-5 pt-1'>
                     <label className='text-sm text-light'>Password</label>
                     <input type="password" className=' outline-none w-full bg-transparent text-light text-sm' />
                  </div>

                  <button className=' bg-[#E50914] text-light text-sm h-10 rounded-md'>Sign Up</button>
               </form>
               )}
               <div className='w-full my-2'>
                  <div className='w-full flex justify-between items-center'>
                     <div className='flex justify-center items-center gap-1'>
                        <input type='checkbox' className='' />
                        <span className='text-sm text-light'>Remember me</span>
                     </div>
                     <span className='text-sm text-light'>Forgot Password</span>
                  </div>
                  <div className='mt-2'>
                     <span className='text-sm text-[#757575]'>
                        New to Netflix? 
                        <span className='text-light text-sm font-bold underline ml-1 cursor-pointer' onClick={switchAuth}>{userLoggedIn ? 'sign up now' : "sign In now"}</span>
                     </span>
                  </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm