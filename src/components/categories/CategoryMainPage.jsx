import React from "react";
import { Stack, Typography, Box, Grid } from "@mui/material";
import AllCategories from "./AllCategories";

const CategoryMainPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        lg={9}
        md={9}
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
        <AllCategories />
      </Grid>
      <Grid item lg={3} md={3}>
        {/* <RightSideBar /> */}
      </Grid>
    </Grid>
  );
};

export default CategoryMainPage;
