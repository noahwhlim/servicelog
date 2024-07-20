import React from 'react'
import CarItem from '../components/CarItem'

export default function Cars() {
  return (
    <div className='flex flex-col justify-center items-center py-12'>
      <CarItem />
      <CarItem />
      <CarItem />
    </div>
  )
}
