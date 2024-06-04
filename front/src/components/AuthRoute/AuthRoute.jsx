/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const AuthRoute = ({ component }) => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return component;
};

export default AuthRoute;
