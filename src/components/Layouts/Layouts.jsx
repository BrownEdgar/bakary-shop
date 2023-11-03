import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layouts() {
  return (
    <div className='main'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
