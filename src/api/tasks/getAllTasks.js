import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useGetAllTasks = () => {
  const getAllTasks = async () => {
    const res = await apiClient({
      method: "get",
      url: "/getAllTasks",
    });
    return res.data;
  };
  return useQuery({
    queryKey: ["getAllTasks"],
    queryFn: getAllTasks,
    enabled: !!localStorage.getItem("accessToken"),
  });
};
export default useGetAllTasks;
