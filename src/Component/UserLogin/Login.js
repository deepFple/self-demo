import React from 'react'
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div className="login-background">
        <div className='w-full h-screen absolute top-0 left-0 bg-[rgba(0,0,0,0.5)]'>
            <LoginHeader />
            <LoginForm />
        </div>
    </div>
  )
}

export default Login