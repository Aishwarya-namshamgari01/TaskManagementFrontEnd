import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";
const loginMutation = ({ onSucessCallback, onErrorCallback }) => {
  return useMutation({
    mutationKey: "login",
    mutationFn: (data) => {
      const res = apiClient({
        method: "post",
        url: "/login",
        data,
      });
      return res;
    },
    onSuccess: (data) => {
      onSucessCallback(data);
    },
    onError: (err) => onErrorCallback(err),
  });
};
export default loginMutation;
