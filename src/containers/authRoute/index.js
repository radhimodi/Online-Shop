import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ROUTE_SIGN_IN } from '../../containers/routes/routes';
import { Access_Token } from '../../constant/app.constant';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!Access_Token) return <Redirect to={ROUTE_SIGN_IN}/>;
        return <Component {...props} />;
      }}
    />
  );
};
