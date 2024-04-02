import { Box } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicOutlet = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const memorizedToken = useMemo(() => accessToken, [accessToken]);
  useEffect(() => {
    if (memorizedToken) navigate("/tasks");
  }, [memorizedToken, navigate]);
  if (!memorizedToken || memorizedToken === null)
    return (
      <Box
        // sx={{
        //   background: "grey",
        //   height: "100vh",
        // }}
      >
        <Outlet />
      </Box>
    );
  // if (!accessToken || accessToken === null) {
  //   return <Outlet />;
  // } else {
  //   return navigate("/home");
  // }
  return null;
};
export default PublicOutlet;
