import {
  Avatar,
  Box,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useGetTaskById from "../../api/tasks/getTaskById";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-regular-svg-icons";
import FlagIcon from "@mui/icons-material/Flag";
import TaskDetailTabs from "./TaskDetailTabs";
import { AddOutlined } from "@mui/icons-material";
import useGetAllUsers from "../../api/getAllUsers";
import useUpdateTaskMutation from "../../api/tasks/updateTaskMutation";
import useGetAllTasks from "../../api/tasks/getAllTasks";

const TaskDetails = () => {
  const { taskId } = useParams();
  const [user, setUser] = React.useState("unAssigned");

  const getTaskById = useGetTaskById({
    id: taskId,
    onSuccessCallback: (data) => {
      console.log({ data });
      setUser(data?.task?.userId?._id);
    },
  });
  console.log({ user });
  const getAllTasks = useGetAllTasks();
  const updateTaskById = useUpdateTaskMutation({
    id: taskId,
    onSucessCallback: (data) => {
      getAllTasks.refetch();
    },
    onErrorCallback: (error) => {},
  });

  const handleChange = (event) => {
    setUser(event.target.value);
    updateTaskById.mutate({
      ...getTaskById?.data?.task,
      userId: event.target.value,
    });
  };

  const getAllUsers = useGetAllUsers();

  return (
    <>
      {(() => {
        if (getTaskById?.isLoading)
          return (
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                position: "absolute",
                top: "37%",
                left: "40%",
                transform: "translate(-50, -50)",
              }}
            >
              <CircularProgress color="secondary" />
            </Stack>
          );
        if (getTaskById?.data)
          return (
            <>
              <Grid container spacing={2}>
                <Grid
                  item
                  lg={9}
                  md={9}
                  sx={{
                    backgroundColor: "hsl(240deg 4.9% 83.9% / 69%)",
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
                  <Stack>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                      {getTaskById?.data?.task?.name?.charAt(0)?.toUpperCase() +
                        getTaskById?.data?.task?.name?.slice(1)}
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Typography>Priority:</Typography>
                      <Typography>
                        {getTaskById?.data?.task?.priority === "medium" ? (
                          <FlagIcon sx={{ color: "orange" }} fontSize="small" />
                        ) : getTaskById?.data?.task?.priority === "low" ? (
                          <FlagIcon sx={{ color: "green" }} fontSize="small" />
                        ) : (
                          <FlagIcon sx={{ color: "red" }} fontSize="small" />
                        )}
                      </Typography>
                      <Typography>
                        {" "}
                        {getTaskById?.data?.task?.priority}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Typography>Status:</Typography>
                      <Typography>{getTaskById?.data?.task?.status}</Typography>
                    </Stack>

                    <Box
                      sx={{
                        width: "inherit",
                        height: "0.8px",
                        backgroundColor: "black",
                        margin: "10px",
                        opacity: "0.5",
                      }}
                    />

                    {/* Assignee */}

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography>Assignee: </Typography>
                      {/* {getTaskById?.data?.task?.userId?.name ? (
                        <Chip
                          sx={{ height: "30px", width: "fit-content" }}
                          label={getTaskById?.data?.task?.userId?.name}
                        ></Chip>
                      ) : (
                        <AddOutlined />
                      )} */}
                      {
                        <FormControl sx={{ width: "200px" }}>
                          {/* <InputLabel id="demo-simple-select-label">
                            Age
                          </InputLabel> */}
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={user}
                            onChange={handleChange}
                            defaultValue="unAssigned"
                            sx={{
                              height: "45px",
                              border: "none",
                              padding: "0px",
                              ".MuiOutlinedInput-notchedOutline": {
                                border: 0,
                              },
                              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                                {
                                  border: "2px solid gray",
                                  opacity: "0.5",
                                },
                              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                                {
                                  border: "2px solid gray",
                                  opacity: "0.5",
                                },
                            }}
                          >
                            <MenuItem value="unAssigned">
                              <Stack direction="row" alignItems="center">
                                <Avatar sx={{ marginRight: "10px" }}>U</Avatar>
                                <Typography>Unassigned</Typography>
                              </Stack>
                            </MenuItem>
                            {getAllUsers?.data?.data?.users?.map((user) => (
                              <MenuItem value={user?._id}>
                                <Stack direction="row" alignItems="center">
                                  <Avatar sx={{ marginRight: "10px" }}>
                                    {user?.name.charAt(0)}
                                  </Avatar>
                                  <Typography>{user?.name}</Typography>
                                </Stack>
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      }
                    </Stack>

                    {/* Due data */}

                    <Stack direction="row" alignItems="center">
                      <Typography>Due date: </Typography>
                      {getTaskById?.data?.task?.dueDate && (
                        <Chip
                          sx={{ height: "30px", width: "fit-content" }}
                          label={getTaskById?.data?.task?.dueDate}
                        ></Chip>
                      )}
                    </Stack>

                    {/* Labels */}

                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography>Labels: </Typography>
                      {getTaskById?.data?.task?.labels &&
                        getTaskById?.data?.task?.labels?.map((label) => {
                          console.log({ label });
                          return (
                            <Chip
                              sx={{ height: "30px", width: "fit-content" }}
                              label={label?.name}
                            ></Chip>
                          );
                        })}
                    </Stack>

                    {/* tabs */}
                    <TaskDetailTabs task={getTaskById?.data?.task} />
                  </Stack>
                </Grid>
                <Grid item lg={3} md={3}>
                  {/* <RightSideBar /> */}
                </Grid>
              </Grid>
            </>
          );
      })()}
    </>
  );
};

export default TaskDetails;
