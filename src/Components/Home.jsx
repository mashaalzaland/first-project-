import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import { Data } from './CardData'
import Footer from './Footer'


export default function Home() {
  return (
  
 
    <div>
      <Navbar/>
         <Hero/>
         <section className='py-8 bg-gray-100'>
            <h1 className='text-center font-bold  text-3xl mb-8'>latet Blogs</h1>
          <div className='max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto p-8'>
          
         {
          Data.map((card)=>{
        return     <Card 
         title={card.title} body={card.body} button={card.button}/>
          })
         }
         </div>
         </section>
         <Footer/>
   
    </div>
  

  )
}
