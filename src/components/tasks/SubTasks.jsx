import { Stack, Typography } from "@mui/material";
import React from "react";

const SubTasks = ({ task }) => {
  console.log({ su: task.subTasks });
  return (
    <>
      {(() => {
        if (task?.subTasks?.length == 0) {
          return <Typography>No sub tasks found</Typography>;
        }
        if (task?.subTasks?.length > 0) {
          return (
            <Stack>
              {task.subTasks?.map((subTask) => {
                return (
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{
                      width: "inherit",
                      height: "fit-content",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      padding: "10px 20px",
                    }}
                  >
                    <Typography>{subTask?.name}</Typography>
                    <Typography>{subTask?.status}</Typography>
                  </Stack>
                );
              })}
            </Stack>
          );
        }
      })()}
    </>
  );
};

export default SubTasks;
