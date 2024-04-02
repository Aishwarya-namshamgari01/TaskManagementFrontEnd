import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../apiClient";

const useCreateTaskMutation = ({ onSucessCallback, onErrorCallback }) => {
  return useMutation({
    mutationKey: "createTask",
    mutationFn: (data) => {
      return apiClient({
        method: "post",
        url: "/createTask",
        data,
      });
    },
    onSuccess: (data) => onSucessCallback(data),
    onError: (error) => onErrorCallback(error),
  });
};
export default useCreateTaskMutation;
