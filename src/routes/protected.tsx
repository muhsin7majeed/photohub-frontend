import { RouteObject } from "react-router-dom";
import Home from "pages/home/Home";

export const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
];
