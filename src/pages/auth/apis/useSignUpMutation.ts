import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { UserSignInVariables } from "../types";

const mutationFn = (payload: UserSignInVariables) =>
  axios.post("/auth/signup", payload);

const useSignUpMutation = () => {
  const signUpMutation = useMutation({ mutationFn });

  return signUpMutation;
};

export default useSignUpMutation;
