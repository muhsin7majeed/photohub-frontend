import { Navigate, RouteObject } from "react-router-dom";
import Home from "pages/home/Home";

export const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },

  {
    path: "*",
    // TODO: Add 404
    element: <Navigate to="/" />,
  },
];
