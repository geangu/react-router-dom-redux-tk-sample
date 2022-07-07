import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../data/slices/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  const storedToken = localStorage.getItem('token');

  if (storedToken) {
    dispatch(signin(storedToken));
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        {token && (
          <>
            <li>
              <Link to={'/profile'}>Profile</Link>
            </li>
            <li>
              <Link to={'/logout'}>Exit</Link>
            </li>
          </>
        )}
        {!token && (
          <li>
            <Link to={'/login'}>Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
