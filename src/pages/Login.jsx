import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
    
      setUser({ email });
      navigate('/');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <div className="mb-3">
        <input
          type="email"
          className="form-control border border-dark"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control border border-dark"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
