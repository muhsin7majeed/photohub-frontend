import { Avatar, Box, Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Posts from "./posts";
import Followers from "./followers";

const UserProfile = () => {
  const path = useLocation();
  console.log(path);

  return (
    <>
      <Box>
        <Flex alignItems="center" justifyContent="center" margin="2rem 1rem" gap="1rem">
          <Avatar size="lg" name="John Doe" />

          <Box w="80%">
            <Text fontSize="1.5rem">joghn_doe</Text>
            <Button size="xs">Edit Profile</Button>
          </Box>
        </Flex>

        <Box px="1rem" mb="1rem">
          <Text>John Doe</Text>
          <Text color="gray.700">To infinity and beyond 🚀</Text>
        </Box>

        {/* TODO:  Update to links */}
        <Tabs isFitted>
          <TabList>
            <Tab>Posts (100)</Tab>
            <Tab>Followers (1)</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Posts />
            </TabPanel>

            <TabPanel>
              <Followers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default UserProfile;
