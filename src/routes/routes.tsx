import { LoginPage } from "domain/guest/pages/login";

import { FullScreenLoading } from "components/shared/full-screen-loading";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import {
  Roles,
  selectIsAuthLoading,
  selectUserRole,
} from "store/slices/auth-slice";

import { EditorRoutes } from "./editor-routes";
import { GuestRoute } from "./components/guest-route";
import { ManagerRoutes } from "./manager-routes";
import { NotFoundPage } from "./not-found-page";

export function Routes() {
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
          <NotFoundPage />
        </Route>
      );
  }
}
