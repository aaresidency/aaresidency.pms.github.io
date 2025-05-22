import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, ...rest }) =>
  isAuthenticated ? <Route {...rest} /> : <Redirect to="/login" />;

export default PrivateRoute;