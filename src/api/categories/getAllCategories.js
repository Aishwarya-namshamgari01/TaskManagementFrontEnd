import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";

const useGetAllCategories = () => {
  const getAllCategories = async () => {
    const res = await apiClient({
      method: "get",
      url: "/getAllCategories",
    });
    return res?.data;
  };
  return useQuery({
    queryKey: ["getAllCategories"],
    queryFn: getAllCategories,
    enabled: !!localStorage.getItem("accessToken"),
  });
};
export default useGetAllCategories;
