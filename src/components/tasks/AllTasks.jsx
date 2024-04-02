import React from "react";
import useGetAllTasks from "../../api/tasks/getAllTasks";
import { CircularProgress, Grid, Typography, Stack } from "@mui/material";
import TaskCard from "./TaskCard";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openModal } from "../modals/modalSlice";

const AllTasks = () => {
  const getAllTasks = useGetAllTasks();
  const dispatch = useDispatch();
  return (
    <>
      <Stack
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{ marginRight: "20px" }}
      >
        <AddIcon
          onClick={() => {
            dispatch(
              openModal({
                modalName: "createTaskModal",
                modalProps: {},
              })
            );
          }}
        />
      </Stack>
      {(() => {
        if (getAllTasks?.isLoading)
          return (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50, -50)",
              }}
            >
              <CircularProgress color="secondary" />
            </Stack>
          );
        if (getAllTasks?.data)
          return (
            <Grid
              container
              spacing={0}
              sx={{
                width: "100%",
                rowGap: "20px",
                columnGap: "50px",
              }}
            >
              {/* <Grid
                item
                spacing={4}
                lg={3}
                md={4}
                xl={2}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  width: "fit-content",
                  justifyContent: "center",
                }}
              >
                <Typography>new</Typography>
              </Grid> */}
              {getAllTasks?.data?.tasks.map((task) => {
                return (
                  <>
                    <Grid
                      item
                      spacing={4}
                      lg={3}
                      md={4}
                      xl={2}
                      sm={4}
                      xs={4}
                      key={task?._id}
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        width: "fit-content",
                      }}
                    >
                      <TaskCard
                        name={task.name}
                        description={task.description}
                        status={task.status}
                        priority={task.priority}
                        id={task._id}
                      />
                    </Grid>
                  </>
                );
              })}
            </Grid>
          );
      })()}
    </>
  );
};

export default AllTasks;
