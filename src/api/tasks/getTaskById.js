import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useGetTaskById = ({ id, onSuccessCallback }) => {
  const taskById = async () => {
    const res = await apiClient({
      method: "get",
      url: `/getTaskById/${id}`,
    });
    return res.data;
  };
  return useQuery({
    queryKey: [`getTaskById-${id}`],
    queryFn: taskById,
    enabled: !!id,
    onSuccess: (data) => onSuccessCallback(data),
  });
};
export default useGetTaskById;
