import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen">
      
      <div className="hidden xl:flex w-1/2 h-full">
        <img
          src="https://via.placeholder.com/500"
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex w-full xl:w-1/2 items-center justify-center">
        <div className="m-20 items-center justify-center xl:w-[500px]">
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full"
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full"
              type="email"
              placeholder="Enter your Email"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="text-white text-xl outline-none bg-transparent border-2 border-red-900 rounded-full px-6 py-1 placeholder:text-gray-500 mt-3 w-full"
              type="password"
              placeholder="Enter your password"
            />
            <button
              className="border-2 bg-red-900 border-none text-white px-5 py-3 mt-5 rounded-full"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
