import React from 'react'
import { Data } from './CardData'

export default function Card({title,body,button}) {
  return (
    
    <div className='shadow-md hover:shadow-lg p-4 border rounded-lg bg-white'>
      <h2 className='font-bold text-4xl py-2'>{title}</h2>
      <p className='font-medium py-2 '>{body}</p>
      <button className='btn bg-blue-500 hover:bg-blue-700 py-2 px-5 mt-4 text-white rounded-lg transation duration-500 '>{button}</button>
    </div>
    
  )
}
