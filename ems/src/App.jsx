import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashboard';
import { setLocalStorage, getLocalStorage } from './utils/localStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  // useEffect(() => {
   
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == 'admin@example.com' && password == '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData ){
      const employee = authData.employee.find((e) => e.email === email && e.password === password)
      if(employee){
      setUser('employee');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }));
    }}
   else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user ? 
        <Login handleLogin={handleLogin} /> :''}
      {
      user === 'admin' ? <AdminDashboard />: (user==='employee'?<EmployeeDashboard data={loggedInUserData}/>:null)
      }
    </>
  );
};

export default App;

