import { createRouter, createRoute, createRootRoute } from "@tanstack/react-router";

import Home from "../pages/Home";
import CarParts from "../pages/CarParts";
import Layout from "../layouts/Layout";

// 🔥 ROOT ROUTE (Layout principal)
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

// 🌳 ÁRBOL DE RUTAS
const routeTree = rootRoute.addChildren([
  homeRoute,
  carPartsRoute,
]);

// 🧠 ROUTER EXPORTADO
export const router = createRouter({
  routeTree,
});