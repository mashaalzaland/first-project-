import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Components/Home'
import Course from './Components/Course'

import Login from './Components/Login'
import Signup from './Components/Signup'


export default function App() {
  return (
    <div>
     
  <Routes>
   <Route path='/'  element={<Home/>} />
   <Route path='/Login'  element={<Login/>} />
   <Route path='/Courses'  element={<Course/>} />
   <Route path='/Signup'  element={<Signup/>} />
  </Routes> 
    </div>
  )
}
