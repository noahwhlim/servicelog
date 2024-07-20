import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function Header() {

  const navigate = useNavigate();

  return (
    <header className='bg-jet shadow-md text-platinum'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/' className='bg-sea w-fit px-2 py-1 rounded-lg'>
        <h1 className='lg:text-xl'>
          Service<span className='font-bold'>Log</span>
        </h1>
        </Link>



        <div className='flex gap-4'>
          <Link to='/cars'>Cars</Link>
          <Link to='/about'>About</Link>
          <Link to='/sign-in'>Sign In</Link>
        </div>
      </div>
    </header>
  )
}
