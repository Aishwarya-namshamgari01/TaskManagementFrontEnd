import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

const useGetAllUsers = () => {
  const getUsers = async () => {
    const res = await apiClient({
      method: "get",
      url: "/getAllUsers",
    });
    return res;
  };
  return useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getUsers,
    enabled: !!localStorage.getItem("accessToken"),

    onError: (err) => {
      console.log({ err });
    },
  });
};
export default useGetAllUsers;
