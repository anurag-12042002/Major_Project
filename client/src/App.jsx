import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CarDetails from './pages/CarDetails'
import Cars from './pages/Car'
import MyBookings from './pages/MyBookings'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'

const App = () => {

  const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
      {!isOwnerPath && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/owner' element={<Dashboard />} />
      </Routes>

    </>
  )
}
export default App