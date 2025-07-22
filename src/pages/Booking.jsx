import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Booking = ({ setBookingData, user }) => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    name: '',
    seats: '',
    class: '',
  })

  const navigate = useNavigate()

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setBookingData({ ...form, email: user.email })
    navigate('/confirmation')
  }

  return (
    <div className="container mt-4">
  <h2>Book a Flight</h2>
  <form className="row g-3 mt-3" onSubmit={handleSubmit}>
    <div className="col-md-6">
      <input
  name="from"
  placeholder="From"
  className="form-control border border-dark"
  onChange={handleChange}
  required
/>

    </div>
    <div className="col-md-6">
      <input
        className="form-control border border-dark"
        name="to"
        placeholder="To"
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-6">
      <input
        className="form-control border border-dark"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-6">
      <input
        className="form-control border border-dark"
        name="seats"
        type="number"
        placeholder="Seats"
        onChange={handleChange}
        required
      />
    </div>
    <div className="col-md-6">
      <select
        className="form-select border border-dark"
        name="class"
        onChange={handleChange}
        required
      >
        <option value="">Select Class</option>
        <option value="Economy">Economy</option>
        <option value="Business">Business</option>
        <option value="FirstClass">FirstClass</option>
      </select>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">Confirm Booking</button>
    </div>
  </form>
</div>

  )
}

export default Booking
