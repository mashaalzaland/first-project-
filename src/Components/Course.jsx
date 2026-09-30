import React from 'react'
import { Paid } from './Paid'
import { Free } from './Freee'
import Navbar from './Navbar'
import Footer from './Footer'
function Paidcourse({title,pay, text,button}){
  return(
    
   
   
    <div className='max-w-sm  shadow-lg p-5 rounded-lg hover:shadow-xl bg-white '>
      <span className='bg-blue-100 text-blue-600 px-3 py-1 rounded-full'>{text}</span>
      <h3 className='text-lg font-semibold mt-4'>{title}</h3>
      <p className='text-gray-600 mt-2'>{pay}</p>
      <button className='mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg'>{button}</button>
    </div>

   
    
 
  )
}
function Freecourse({Title,Button,Pay , Text}){
  return(
   <div className='max-w-sm  shadow-lg p-5 rounded-lg hover:shadow-xl bg-white '>
      <span className='bg-blue-100 text-green-600 px-3 py-1 rounded-full'>Free</span>
      <h3 className='text-lg font-semibold mt-4'>{Title}</h3>
      <p className='text-gray-600 mt-2'>${Pay}</p>
      <button className='mt-5 bg-green-600 text-white px-4 py-2 rounded-lg'>Enroll</button>
    </div>
  )

}
 <div className='max-w-5xl mx-auto grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3'></div>

export default function Course() {
  return (
  
    <>
    <Navbar/>
    <div className='max-w-5xl mx-auto'>
       <h2 className='text-blue-600'>Paid Course</h2>
    </div>
    
    <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-5 flex flex-center items-center'> 
     
 
    {

      Paid.map((Pa)=>{
        return <Paidcourse  
          title={Pa.title}
           text={Pa.text}
            button={Pa.button} 
            pay={Pa.pay}  />
      })
    }
     <div>
     <h2 className='text-green-600'>Free Course</h2>
  </div>
     
      {
        Free.map((Fr)=>{
        return <Freecourse  Title={Fr.Title} 
          Pay={Fr.Pay}
           Button={Fr.Button}
            Text={Fr.Text}/>
        })
      }
     
    </div>
    <Footer/>
    
    </>
   
  )
}
