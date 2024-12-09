import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './UserLogin/Login'

const Body = () => {
  const appRounter = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/browse',
        element: <Browse/>
    },
  ]);
    
  return (
    <>
        <RouterProvider router={appRounter}/>
    </>
  )
}

export default Body