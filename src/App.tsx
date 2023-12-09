import { Box, Heading } from "@chakra-ui/layout";
import { Route, Routes, useNavigate } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import Home from "pages/home/Home";
import { Button } from "@chakra-ui/react";
import RequireAuth from "components/RequireAuth";
import useAuthContext from "hooks/useAuthContext";
import SignUp from "pages/auth/SignUp";
import SignIn from "pages/auth/Signin";

function App() {
  const auth = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {};
  console.log({ auth });

  return (
    <>
      <Box>
        <Button onClick={handleLogout}>Logout</Button>

        <Routes>
          <Route path="account" element={<AuthLayout />}>
            <Route index element={<SignIn />} />
            <Route path="new" element={<SignUp />} />
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
