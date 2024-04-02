import { Grid, Box, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import GlobalTopNav from "../components/common/GlobalTopNav";
import GlobalSideNav from "../components/common/GlobalSideNav";
import AllTasks from "../components/tasks/AllTasks";
import RightSideBar from "../components/common/RightSideBar";
import Modals from "../components/modals/modals";

const PrivateOutlet = () => {
  console.log("private");
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  let memorizedToken = useMemo(() => accessToken, [accessToken]);
  useEffect(() => {
    if (!memorizedToken) {
      navigate("/login");
    }
  }, [memorizedToken, navigate]);
  if (memorizedToken && memorizedToken !== null) {
    return (
      <>
        <Box
          sx={{
            backgroundColor: "#4f3cc975",
            padding: "20px",
            // height: "calc(100vh - 100px)",
            overflow: "hidden",
            height: "100vh",
          }}
        >
          <Grid
            container
            sx={{
              backgroundColor: "#fff",
              border: "2px solid #fff",
              borderRadius: "10px",
              overflow: "hidden",
              height: "calc(100vh - 30px)",
            }}
            spacing={2}
          >
            <Grid item lg={12} md={12} xl={12} xs={12} sm={12}>
              <GlobalTopNav />
            </Grid>
            {/* <Grid item lg={0.8} md={0.8} sx={{ backgroundColor: "" }}>
              <GlobalSideNav />
            </Grid> */}
            <Grid
              item
              lg={12}
              md={12}
              xs={12}
              sm={12}
              justifyContent="space-evenly"
            >
              <Outlet />
            </Grid>
          </Grid>
        </Box>
        <Modals />
      </>
    );
  }
  return null;
};
export default PrivateOutlet;
