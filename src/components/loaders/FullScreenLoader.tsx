import { Flex, Spinner } from "@chakra-ui/react";

const FullScreenLoader = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
    >
      <Spinner color="teal" />
    </Flex>
  );
};

export default FullScreenLoader;
