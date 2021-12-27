import { Redirect, Route } from "react-router-dom";
import { selectIsAuthenticated } from "store/slices/auth-slice";
import { useSelector } from "react-redux";

import { CustomRouteProps } from "./types";

function GuestRoute({ ...routeProps }: CustomRouteProps) {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps} />;
}

export { GuestRoute };
