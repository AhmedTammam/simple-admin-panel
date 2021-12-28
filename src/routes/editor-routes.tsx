import { ProductsPage } from "domain/editor/pages/product";

import { Redirect, Switch, Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Header } from "components/header";
import { MainLayout } from "components/layout/main-layout";

import { PrivateRoute } from "./components/private-route";

export function EditorRoutes() {
  return (
    <>
      <Header
        renderLinks={() => (
          <Link as={ReachLink} to="/products" mr="4">
            Products
          </Link>
        )}
      />
      <MainLayout>
        <Switch>
          <Redirect exact from="/" to="/products" />
          <PrivateRoute path="/products" component={ProductsPage} />
        </Switch>
      </MainLayout>
    </>
  );
}
