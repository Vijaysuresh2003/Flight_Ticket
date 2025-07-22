import { useNavigate } from 'react-router-dom'

const Confirmation = ({ bookingData, setBookingData }) => {
  const navigate = useNavigate()

  const handleCancel = () => {
    setBookingData(null)
    navigate('/book')
  }

  return (
<div className="container mt-5">
      <h2 className="text-success">✅ Booking Confirmed!</h2>
  <div className="card p-4 mt-3">
    <p><strong>Name:</strong> {bookingData.name}</p>
    <p><strong>Email:</strong> {bookingData.email}</p>
    <p><strong>From:</strong> {bookingData.from}</p>
    <p><strong>To:</strong> {bookingData.to}</p>
    <p><strong>Seats:</strong> {bookingData.seats}</p>
    <p><strong>Class:</strong> {bookingData.class}</p>
    <button className="btn btn-danger mt-3" onClick={handleCancel}>Cancel Booking</button>
  </div>
</div>

  )
}

export default Confirmation
