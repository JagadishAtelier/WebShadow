import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center lg:px-20 px-10 lg:py-5 md:py-5 py-5 border-b border-gray-300'>
        <p className='font-bold text-lg'>WEB SHADOWS</p>
        <div className='hidden  lg:flex gap-5'>
            <a href='/' className='text-sm font-semibold text-black'>WORK</a>
            <a href='/'className='text-sm font-semibold' >ABOUT</a>
            <a href='/'className='text-sm font-semibold' >TEAM</a>
            <a href='/'className='text-sm font-semibold' >CONTACT</a>
        </div>
    </div>
  )
}

export default Navbar