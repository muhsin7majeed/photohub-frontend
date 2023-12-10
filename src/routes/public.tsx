import { Location, Navigate, RouteObject } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import SignIn from "pages/auth/SignIn";
import SignUp from "pages/auth/SignUp";

export const getPublicRoutes = (location: Location<any>) => {
  const publicRoutes: RouteObject[] = [
    {
      path: "/",
      index: true,
      element: <Navigate to="/auth/signin" />,
    },
    {
      path: "/auth/*",
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "*",
      // TODO: Add 404
      element: (
        <Navigate to="/auth/signin" state={{ from: location }} replace />
      ),
    },
  ];

  return publicRoutes;
};
