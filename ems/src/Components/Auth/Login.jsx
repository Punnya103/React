import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email,setEmail] = useState('')
    const [password ,setPassword] =useState('')
const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
 console.log('hellooo')
}

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className=' w-screen m-52 items-center justify-center xl:w-[1000px] xl:justify-center xl:items-center'>
         <form onSubmit={(e)=>{
            submitHandler(e)
            console.log(email)
            console.log(password)
            setEmail("")
            setPassword("")
         }} className='flex flex-col w-full'>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="email" placeholder='Enter your Email' />
            <input 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full' type="password" placeholder='Enter your password' />
            <button className='border-2 bg-red-900 border-none text-white px-5 py-3 mt-5 rounded-full '>Login</button>
         </form>
      </div>
    </div>
  )
}

export default Login
