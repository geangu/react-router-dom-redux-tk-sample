import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Profile = () => {
  const token = useSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to={'/login'} />;
  }

  return <>Profile {token}</>;
};

export default Profile;
