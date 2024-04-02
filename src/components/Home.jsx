import React from "react";
import useGetAllUsers from "../api/getAllUsers";
import { Stack, Typography, Box, Grid } from "@mui/material";
import GlobalTopNav from "./common/GlobalTopNav";
import GlobalSideNav from "./common/GlobalSideNav";
import AllTasks from "./tasks/AllTasks";
import RightSideBar from "./common/RightSideBar";

const Home = () => {
  const getAllUsers = useGetAllUsers();
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={9}
        md={9}
        sm={12}
        sx={{
          // hsl(210deg 36.65% 93.79%) #efefef
          backgroundColor: "hsl(210deg 36.65% 93.79%)",
          // opacity: "0.5",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          height: "calc(100vh - 72px)",
          overflowY: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <AllTasks />
      </Grid>
      <Grid item lg={3} md={3}>
        <RightSideBar />
      </Grid>
    </Grid>
  );
};

export default Home;
