import { CategoryPage } from "domain/manager/pages/category";
import { ProductsPage } from "domain/manager/pages/product";

import React from "react";
import { Redirect, Switch, Link as ReachLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import { Header } from "components/header";
import { MainLayout } from "components/layout/main-layout";

import { PrivateRoute } from "./components/private-route";

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
      <MainLayout>
        <Switch>
          <Redirect exact from="/" to="/categories" />
          <PrivateRoute path="/categories" component={CategoryPage} />
          <PrivateRoute path="/products" component={ProductsPage} />
        </Switch>
      </MainLayout>
    </>
  );
}
