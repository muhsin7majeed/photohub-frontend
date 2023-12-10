import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { UserSignInVariables } from "../types";

const mutationFn = (payload: UserSignInVariables) =>
  axios.post("/auth/signin", payload);

const useSignInMutation = () => {
  const signInMutation = useMutation({ mutationFn });

  return signInMutation;
};

export default useSignInMutation;
