import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { selectIsAuthenticated } from "store/slices/auth-slice";

import { CustomRouteProps } from "../types";

function PrivateRoute({ ...routeProps }: CustomRouteProps) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  }
  return <Redirect to="/login" />;
}

export { PrivateRoute };
