import { ProductsPage } from "domain/editor/pages/product-page";

import { Redirect, Switch, Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Header } from "components/header";

import { PrivateRoute } from "./private-route";

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
      <Switch>
        <Redirect exact from="/" to="/products" />
        <PrivateRoute path="/products" component={ProductsPage} />
      </Switch>
    </>
  );
}
