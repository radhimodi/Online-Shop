import React from "react";

import {
  ROUTE_CART,
  ROUTE_CATEGORY,
  ROUTE_CATEGORY_DETAIL,
  ROUTE_CATEGORY_LIST,
  ROUTE_CHECKOUT,
  ROUTE_HOME,
  ROUTE_SUCCESS_ORDER,
} from "../routes";

import HomePage from "../../views/HomePage";
import CategoryPage from "../../views/CategoryPage";
import CategoryListPage from "../../views/CategoryListPage";
import CategoryDetailPage from "../../views/CategoryDetailPage";
import Cart from "../../views/Cart";
import Checkout from "../../views/Checkout";
import SuccessOrder from "../../views/SuccessOrder";

const dashbordRoutes = [
  {
    path: ROUTE_HOME,
    component: (props) => <HomePage {...props} />,
  },
  {
    path: ROUTE_CATEGORY,
    component: (props) => <CategoryPage {...props} />,
  },
  {
    path: ROUTE_CATEGORY_LIST,
    component: (props) => <CategoryListPage {...props} />,
  },
  {
    path: ROUTE_CATEGORY_DETAIL,
    component: (props) => <CategoryDetailPage {...props} />,
  },
  {
    path: ROUTE_CART,
    component: (props) => <Cart {...props} />,
  },
  {
    path: ROUTE_CHECKOUT,
    component: (props) => <Checkout {...props} />,
  },
  {
    path: ROUTE_SUCCESS_ORDER,
    component: (props) => <SuccessOrder {...props} />,
  },
];
export default dashbordRoutes;
