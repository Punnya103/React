import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl text-white font-semibold'>Hello <br/><span className='text-3xl font-semibold'>Punnya</span></h1>
        <button className='bg-[#BE503A] text-l font-medium p-5 py-2 rounded-full'>Log Out</button>
    </div>
  )
}

export default Header