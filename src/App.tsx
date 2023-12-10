import { Button, Box } from "@chakra-ui/react";

import useAuthContext from "hooks/useAuthContext";
import { AppRoutes } from "routes";

function App() {
  const auth = useAuthContext();

  const handleLogout = () => {};
  console.log({ auth });

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
