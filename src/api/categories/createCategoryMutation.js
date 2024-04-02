import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useCreateCategoryMutation = ({ onSucessCallback, onErrorCallback }) => {
  return useMutation({
    mutationKey: "createCategory",
    mutationFn: (data) => {
      return apiClient({
        method: "post",
        url: "/createCategory",
        data,
      });
    },
    onSuccess: (data) => onSucessCallback(data),
    onError: (error) => onErrorCallback(error),
  });
};

export default useCreateCategoryMutation;
