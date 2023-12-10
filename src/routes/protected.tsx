import { Navigate, RouteObject } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

import Home from "pages/home/Home";

export const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "/explore",
    index: true,
    element: <Heading>Explore</Heading>,
  },
  {
    path: "/chat",
    index: true,
    element: <Heading>Messages</Heading>,
  },
  {
    path: "/profile",
    index: true,
    element: <Heading>Profile</Heading>,
  },

  {
    path: "*",
    // TODO: Add 404
    element: <Navigate to="/" />,
  },
];
