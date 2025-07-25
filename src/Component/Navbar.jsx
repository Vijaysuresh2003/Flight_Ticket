import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

const Navbar = ({ user, setUser }) => {
  const handleLogout = () => setUser(null);

return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
        <span className="navbar-brand fw-bold">Flight Booker</span>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                {user && (
                    <li className="nav-item">
                        <Link className="nav-link" to="/book">Book Ticket</Link>
                    </li>
                )}
                <li className="nav-item">
  <Link className="nav-link" to="/history">History</Link>
</li>
                {!user ? (
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                ) : (
                    <li className="nav-item">
                        <button className="btn btn-danger btn-sm ms-2" onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </div>
    </nav>
);
};

export default Navbar;
