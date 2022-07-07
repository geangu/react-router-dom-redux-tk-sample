import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { signin } from '../data/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const globalToken = useSelector((state) => state.auth.token);

  const [token, setToken] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(token));
  };

  if (globalToken) {
    localStorage.setItem('token', globalToken);
    return <Navigate to={'/profile'} />;
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Token"
          type="text"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
