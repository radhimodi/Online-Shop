import React from "react";
import {
  ROUTE_SIGN_IN,
  ROUTE_SIGN_UP,
} from "../../../containers/routes/routes";
import SignInPage from "../../views/SignInPage";
import SignUpPage from "../../views/SignupPage";

const routes = [
  {
    isPublic: true,
    path: ROUTE_SIGN_IN,
    component: (props) => <SignInPage {...props} />,
  },
  {
    isPublic: true,
    path: ROUTE_SIGN_UP,
    component: (props) => <SignUpPage {...props} />,
  },
];

export default routes;
