import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'


export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 shadow-md'>
    <div className='max-w-5xl mx-auto px-8 h-16 flex items-center justify-between'>
           <img src="logo.png" alt="" />
        <div className='flex items-center gap-8' >  
       <Link to="/"  className='text-gray-700 hover:text-blue-500 font-medium transation'>home</Link>
       <Link to="/Courses"  className='text-gray-700 hover:text-blue-500 font-medium transation'>Course</Link>
       <Link to="/Login"  className='text-gray-700 bg-blue-500 rounded-md text-white px-3 py-2 hover:bg-blue-800 font-medium transation'>Login</Link>

        </div>
    </div>
    </nav>
  )
}
