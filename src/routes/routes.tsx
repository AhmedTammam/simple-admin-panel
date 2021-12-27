import { LoginPage } from "domain/guest/pages/login";

import { FullScreenLoading } from "components/shared/FullScreenLoading";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Roles,
  selectIsAuthLoading,
  selectUserRole,
} from "store/slices/auth-slice";

import { CatchAll404 } from "./404";
import { EditorRoutes } from "./EditorRoutes";
import { GuestRoute } from "./guest-route";
import { ManagerRoutes } from "./ManagerRoutes";

function Content() {
  const isAuthLoading = useSelector(selectIsAuthLoading);
  const role = useSelector(selectUserRole);

  if (isAuthLoading) {
    return <FullScreenLoading />;
  }

  switch (role) {
    case Roles.MANAGER:
      return <ManagerRoutes />;
    case Roles.EDITOR:
      return <EditorRoutes />;
    case Roles.GUEST:
      return <GuestRoute exact path={["/", "/login"]} component={LoginPage} />;

    default:
      return (
        <Route>
          <CatchAll404 />
        </Route>
      );
  }
}

function Routes() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export { Routes };
