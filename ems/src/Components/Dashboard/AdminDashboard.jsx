import React from 'react'
import Header from '../Others/Header'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
  return (
    <div>
        <div>
            <form className='flex sm:flex-col lg:flex-row items-center justify-center gap-6 w-full h-screen p-20 bg-[#1E1E1E]'>
                <div className=' w-1/2 h-1/2'>
                <div>
              <h3 className='font-thin'>Add Task</h3>
              <input className='bg-[#383838] border-1 border-gray-900 rounded-l  w-full mt-3 mb-5 p-1 outline-none' type="text" placeholder='Make a Design' />
              </div>
              <div>
              <h3 className='font-thin'>Date</h3>
              <input className='bg-[#383838] border-1 border-gray-900 rounded-l w-full mt-5 mb-5 p-1 outline-none' type="date"  />
              </div>
              <div>
              <h3 className='font-thin'>Assign to</h3>
              <input className='bg-[#383838] border-1 border-gray-900 rounded-l  w-full mt-5 mb-5 p-1 outline-none' type="text" placeholder='Employee' />
              </div>
              <div>
              <h3 className='font-thin'>category</h3>
              <input className='bg-[#383838] border-1 border-gray-900 rounded-l  w-full mt-3 mb-5 p-1 outline-none' type="text" placeholder='design ,dev etc' />
              </div>
                </div>
                <div className='flex flex-col w-1/2 h-1/2'>
              <h3 className='font-thin'>Discription</h3>
              <textarea className='bg-[#383838] border-1 border-gray-900 rounded-l p-1 outline-none mt-3'  name="" id="" cols="30" rows="10"></textarea>
              <button className='bg-black px-2 mt-10'>Create Task</button>
              </div>
            </form>
        </div>
        <AllTask/>
    </div>
  )
}

export default AdminDashboard