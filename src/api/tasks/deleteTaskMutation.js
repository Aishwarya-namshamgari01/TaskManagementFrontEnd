import { useMutation } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useDeleteTaskMutation = ({ id, onSuccessCallback, onErrorCallback }) => {
  return useMutation({
    mutationKey: "deleteTask",
    mutationFn: (data) => {
      return apiClient({
        method: "delete",
        url: `/deleteTaskById/${id}`,
        data,
      });
    },
    onSuccess: (data) => onSuccessCallback(data),
    onError: (error) => onErrorCallback(error),
  });
};

export default useDeleteTaskMutation;
