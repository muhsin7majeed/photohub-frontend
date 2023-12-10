import { ButtonGroup, IconButton } from "@chakra-ui/react";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    to: "/",
    icon: <AiOutlineHome />,
    label: "Feed",
  },
  {
    to: "/explore",
    icon: <AiOutlineSearch />,
    label: "Explore",
  },
  {
    to: "/chat",
    icon: <AiOutlineMessage />,
    label: "Messages",
  },
  {
    to: "/profile",
    icon: <AiOutlineUser />,
    label: "Profile",
  },
];

const Navbar = () => {
  return (
    <ButtonGroup
      as="nav"
      variant="ghost"
      display="flex"
      bgColor="gray.100"
      alignItems="center"
      justifyContent="space-evenly"
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      padding="5px"
    >
      {NAV_LINKS.map((link) => (
        <IconButton
          key={link.to}
          as={NavLink}
          to={link.to}
          aria-label={link.label}
          title={link.label}
          fontSize="34px"
          icon={link.icon}
          _activeLink={{
            fontWeight: "bold",
            color: "teal",
          }}
        />
      ))}
    </ButtonGroup>
  );
};

export default Navbar;
