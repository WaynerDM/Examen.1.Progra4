import ReactDOM from "react-dom/client";
import {
  createRouter,
  RouterProvider,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import CarParts from "./pages/CarParts";
import Layout from "./layouts/Layout";

// 🔥 ROOT
const rootRoute = createRootRoute({
  component: Layout,
});

// 🏠 HOME
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// 🚗 CAR PARTS
const carPartsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/carparts",
  component: CarParts,
});

// 🌳 TREE
const routeTree = rootRoute.addChildren([homeRoute, carPartsRoute]);

// 🧠 ROUTER
const router = createRouter({ routeTree });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);