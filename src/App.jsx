import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Confirmation from './pages/Confirmation'
import Navbar from './Component/Navbar'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [user, setUser] = useState(null) 
  const [bookingData, setBookingData] = useState(null)

  return (
    <div>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/book"
          element={<Booking setBookingData={setBookingData} user={user} />}
        />
        <Route
          path="/confirmation"
          element={
            bookingData ? (
              <Confirmation bookingData={bookingData} setBookingData={setBookingData} user={user} />
            ) : (
              <Navigate to="/book" />
            )
          }
        />
      </Routes>
    </div>
  )
}

export default App
