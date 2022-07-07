import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signout } from '../data/slices/authSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    localStorage.removeItem('token');
    dispatch(signout());
  }, [dispatch]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return <div>Bye!</div>;
};

export default Logout;
