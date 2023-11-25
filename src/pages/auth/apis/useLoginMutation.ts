import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { UserLoginVariables } from "../types";

const mutationFn = (payload: UserLoginVariables) => axios.post("/auth/signin", payload);

const useLoginMutation = () => {
  const loginMutation = useMutation({ mutationFn });

  return loginMutation;
};

export default useLoginMutation;
