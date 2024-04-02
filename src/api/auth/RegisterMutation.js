import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useRegisterMutation = ({ onSuccussCallback, onErrorCallback }) => {
  return useMutation({
    mutationFn: (data) => {
      return apiClient({
        method: "post",
        url: "/register",
        data,
      });
    },
    onSuccess: (data) => onSuccussCallback(data),
    onError: (error) => onErrorCallback(error),
  });
};
export default useRegisterMutation;
