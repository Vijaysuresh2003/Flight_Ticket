import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import states from '../assets/states.json' 

const Home = ({ user }) => {
  const [selectedState, setSelectedState] = useState('')
  const navigate = useNavigate()

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Welcome to Home Page</h2>
      <select className="form-select mb-4" onChange={e => setSelectedState(e.target.value)}>
        <option value="">Select State</option>
        {states.map(state => (
          <option key={state}>{state}</option>
        ))}
      </select>

      <div className="row mb-4">
        {states.map(state => (
          <div key={state} className="col-6 col-md-3 mb-3">
            <img
              src={`/states/${state}.jpg`}
              alt={state}
              className="img-fluid rounded border state-img"
              style={{ width: '270px', height: '250px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>

      {selectedState && (
        <div className="text-center">
          <img
            src="/flight1.jpg"
            alt="flight1"
            className="img-thumbnail m-2"
            style={{ width: '350px', height: '250px', objectFit: 'cover' }}
          />
          <img
            src="/flight2.jpg"
            alt="flight2"
            className="img-thumbnail m-2"
            style={{ width: '350px', height: '250px', objectFit: 'cover' }}
          />
          <br />
          {user && (
            <button className="btn btn-success mt-3" onClick={() => navigate('/book')}>
              Book Ticket
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default Home
