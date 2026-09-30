import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex items-center justify-center bg-slate-100 h-screen'>
      <div className='bg-white w-80 p-6 rounded-xl shadow-lg'>
        <h2 className='text-2xl font-bold text-center mb-5'>login</h2>
        <input type="text" placeholder='Email' className='w-full rounded border p-2 mb-4' />
        <input type="text" placeholder='Password'  className='w-full rounded border p-2 mb-4' />
        <button className='w-full bg-blue-600 text-white hover:bg-blue-900 transition duration-300 rounded-md'>Login</button>
        <p className='mt-3 text-center'>New acount?<Link  className="text-blue-600 hover:underline" to="/Signup">Signup</Link></p>
      </div>
    </div>
  )
}
