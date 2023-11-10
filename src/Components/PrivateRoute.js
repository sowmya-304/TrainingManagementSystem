// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element }) => {
  const isAuthenticated = sessionStorage.getItem('uid') !== null;

  return isAuthenticated ? <Route path={path} element={element} /> : <Navigate to="/LoginRadio" />;
};

export default PrivateRoute;
