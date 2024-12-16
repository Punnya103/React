import React, { useContext, useEffect ,useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLoaclStorage } from './utils/localStorage'


const App = () => {

  const [user, setuser] = useState()
//  const authData = useContext(AuthContext)

//  useEffect(()=>{
//   if (authData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//       setuser(loggedInUser.role)

//     }
//   }
//  },[authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      setuser('admin')
      localStorage.setItem('loggrdInUser' ,JSON.stringify({role:'admin'}))
    } else if (email === 'jane.smith@example.com' && password === '123') {
      setuser('employee')
      localStorage.setItem('loggrdInUser' ,JSON.stringify({role:'employee'}))
    } else {
      alert('Invalid credentials');
    }
  }
  

  return (
<>
{!user ? <Login handleLogin={handleLogin}/> :'' }
{user == 'admin' ? <AdminDashboard/> :<EmployeeDashboard/>}
</>
  )
}

export default App
