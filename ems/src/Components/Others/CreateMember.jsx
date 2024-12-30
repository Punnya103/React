import React from 'react'

const CreateMember = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
     <div className='flex w-screen m-10 items-center justify-center xl:w-[1000px] xl:justify-center xl:items-center s:w-[300]'>
         <form className='flex flex-col w-full'>
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="email" placeholder='Enter your Email' />
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <input className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <button className='border-2 bg-red-900 border-none text-white px-5 py-3 mt-5 rounded-full '>Create Member</button>
         </form>
      </div>
    </div>
  )
}

export default CreateMember
