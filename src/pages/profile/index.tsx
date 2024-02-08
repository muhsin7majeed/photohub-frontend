import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const path = useLocation();
  console.log(path);

  return <>Profile</>;
};

export default UserProfile;
