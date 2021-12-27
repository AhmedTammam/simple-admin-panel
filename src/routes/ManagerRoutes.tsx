import { ProductsPage } from "domain/editor/pages/product-page";
import { CategoryPage } from "domain/manager/pages/category";

import React from "react";
import { Redirect, Switch, Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Header } from "components/header";

import { PrivateRoute } from "./private-route";

export function ManagerRoutes() {
  return (
    <>
      <Header
        renderLinks={() => (
          <>
            <Link as={ReachLink} to="/categories" mr="4">
              Categories
            </Link>
            <Link as={ReachLink} to="/products" mr="4">
              Products
            </Link>
          </>
        )}
      />
      <Switch>
        <Redirect exact from="/" to="/categories" />
        <PrivateRoute path="/categories" component={CategoryPage} />
        <PrivateRoute path="/products" component={ProductsPage} />
      </Switch>
    </>
  );
}
