import { Stack, Typography, Box, CircularProgress } from "@mui/material";
import React from "react";
import useGetAllTasks from "../../api/tasks/getAllTasks";

const RightSideBar = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const getAllTasks = useGetAllTasks();
  return (
    <>
      {(() => {
        if (getAllTasks?.isLoading)
          return (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "absolute",
                top: "50%",
                right: "10%",
                transform: "translate(-50, -50)",
              }}
            >
              <CircularProgress color="secondary" />
            </Stack>
          );
        if (getAllTasks?.data) {
          return (
            <Stack>
              <Stack direction="row" spacing={5} justifyContent="space-around">
                <Box>
                  <Typography>Hello,</Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "30px" }}>
                    {userData?.name}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    backgroundColor: "#4f3cc975",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                  }}
                ></Box>
              </Stack>
              <Box
                sx={{
                  height: "1px",
                  width: "inherit",
                  backgroundColor: "gray",
                  opacity: "0.5",
                  margin: "30px",
                }}
              />
              <Stack
                direction="row"
                justifyContent="space-around"
                sx={{ margin: "10px" }}
              >
                <Stack spacing={2} alignItems="flex-start">
                  <Typography>Total tasks</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        height: "30px",
                        width: "2px",
                        backgroundColor: "#3b49e5",
                      }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      {getAllTasks?.data?.totalTasks}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={2} alignItems="flex-start">
                  <Typography>Completed tasks</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        height: "30px",
                        width: "2px",
                        backgroundColor: "#2ad0d4",
                      }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      {getAllTasks?.data?.completedTasks}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-around"
                sx={{ margin: "10px" }}
              >
                <Stack spacing={2} alignItems="flex-start">
                  <Typography>Pending tasks</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        height: "30px",
                        width: "2px",
                        backgroundColor: "#fdde0c",
                      }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      {getAllTasks?.data?.pendingTasks}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack spacing={2} alignItems="flex-start">
                  <Typography>Inprogress tasks</Typography>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Box
                      sx={{
                        height: "30px",
                        width: "2px",
                        backgroundColor: "red",
                      }}
                    />
                    <Typography sx={{ fontWeight: "bold" }}>
                      {getAllTasks?.data?.inProgressTasks}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          );
        }
      })()}
    </>
  );
};

export default RightSideBar;
