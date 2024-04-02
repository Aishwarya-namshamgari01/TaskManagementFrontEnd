import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useUpdateTaskMutation = ({ id, onSucessCallback, onErrorCallback }) => {
  return useMutation({
    mutationKey: "updateTask",
    mutationFn: (data) => {
      return apiClient({
        method: "patch",
        url: `/updateTaskById/${id}`,
        data,
      });
    },
    onSuccess: (data) => {
      onSucessCallback(data);
    },
    onError: (error) => onErrorCallback(error),
  });
};

export default useUpdateTaskMutation;
