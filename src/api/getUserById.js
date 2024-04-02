import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";

const useGetUserById = ({ id }) => {
  const getUser = async () => {
    const user = await apiClient({
      method: "get",
      url: `/getUserById/${id}`,
    });
    return user;
  };
  return useQuery({
    queryKey: [`userById-${id}`],
    queryFn: getUser,
    enabled: !!id,
  });
};
export default useGetUserById;
