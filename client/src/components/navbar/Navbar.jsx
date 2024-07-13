import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../redux/authSlice';
import { getUser, clearUser } from '../../redux/userSlice';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(getUser(response.data.body));
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (token) {
      fetchUserProfile();
    }
  }, [token, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/assets/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faUserCircle} />
              {user.firstName || ''}
            </Link>
            <span className="main-nav-item" onClick={handleLogout} style={{ cursor: 'pointer' }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Sign out
            </span>
          </>
        ) : (
          <Link className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;









