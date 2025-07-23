import { useSelector } from 'react-redux'

const BookingHistory = () => {
  const bookings = useSelector(state => state.booking.history)

  return (
    
    <div className="container mt-4">
      <h2>Booking History</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="row">
          {bookings.map((b, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card p-3 shadow-sm">
                <h5>name: {b.name} ({b.class})</h5>
                <p>From: {b.from}</p>
                <p>To: {b.to}</p>
                <p>Seats: {b.seats}</p>
                <p>Email: {b.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BookingHistory
