import { Button, Box } from "@chakra-ui/react";
import useAuth from "hooks/useAuth";

import { AppRoutes } from "routes";

function App() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.handleSignOut();
  };

  return (
    <>
      <Box>
        <Button onClick={handleLogout}>Logout</Button>

        <AppRoutes />
      </Box>
    </>
  );
}

export default App;
