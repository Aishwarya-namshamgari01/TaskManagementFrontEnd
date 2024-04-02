import { IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { openModal } from "../modals/modalSlice";
import { DeleteOutline } from "@mui/icons-material";
import useDeleteTaskMutation from "../../api/tasks/deleteTaskMutation";
import { Bounce, toast } from "react-toastify";
import useGetAllTasks from "../../api/tasks/getAllTasks";

const TaskCard = ({ id, name, description, status, priority, labels }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getAllTasks = useGetAllTasks();
  const deleteTaskMutation = useDeleteTaskMutation({
    id: id,
    onSuccessCallback: (data) => {
      if (data?.status === 200) {
        toast.success("Task deleted", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        getAllTasks.refetch();
      }
    },
    onErrorCallback: (error) => {
      console.log({ error });
    },
  });
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ margin: "5px" }}
    >
      <Stack
        sx={{
          padding: "10px",
        }}
        onClick={() => {
          navigate(`/tasks/${id}`);
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Typography>
        <Typography>{status}</Typography>
        <Typography>{priority}</Typography>
      </Stack>
      <Stack sx={{ padding: "7px" }}>
        <IconButton
          onClick={() => {
            dispatch(
              openModal({
                modalName: "createTaskModal",
                modalProps: {
                  edit: true,
                  id: id,
                },
              })
            );
          }}
        >
          <EditIcon fontSize="small" sx={{ color: "var(--main-color)" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            deleteTaskMutation.mutate();
          }}
        >
          <DeleteOutline fontSize="small" sx={{ color: "var(--main-color)" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default TaskCard;
