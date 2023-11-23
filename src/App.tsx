import { Box } from "@chakra-ui/layout";
import { Route, Routes } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import Login from "pages/auth/Login";
import SignIn from "pages/auth/SignIn";

function App() {
  return (
    <>
      <Box>
        <Routes>
          <Route path="account" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="new" element={<SignIn />} />
          </Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
