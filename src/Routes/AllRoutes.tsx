import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../components/login/Login'
import Register from '../components/Register/Register'
function AllRoutes() {
  return (
    <div>
      <Routes>
   <Route path="/login" element={<Login />}></Route>
   <Route path="/register" element={<Register />}></Route>
    </Routes>
    </div>
  )
}

export default AllRoutes