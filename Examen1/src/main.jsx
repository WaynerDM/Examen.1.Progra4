import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router";

// 🚀 APP ENTRY POINT
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);