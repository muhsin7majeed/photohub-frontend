import { Box, Heading } from "@chakra-ui/layout";
import { Route, Routes, useNavigate } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import Login from "pages/auth/Login";
import SignIn from "pages/auth/SignIn";
import Home from "pages/home/Home";
import { Button } from "@chakra-ui/react";
import RequireAuth from "components/RequireAuth";
import useAuthContext from "hooks/useAuthContext";

function App() {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signout(() => {
      navigate("/account");
    });
  };
  console.log({ auth });

  return (
    <>
      <Box>
        <Button onClick={handleLogout}>Logout</Button>

        <Routes>
          <Route path="account" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="new" element={<SignIn />} />
          </Route>

          <Route
            index
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />

          <Route
            path="/about"
            element={
              <RequireAuth>
                <Heading>About</Heading>
              </RequireAuth>
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
