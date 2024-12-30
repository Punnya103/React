import React from 'react'
import Header from '../Others/Header'
import AllTask from '../Others/AllTask'
import Createtask from '../Others/Createtask'

const AdminDashboard = () => {
  return (
    <div>
    
      <Createtask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard