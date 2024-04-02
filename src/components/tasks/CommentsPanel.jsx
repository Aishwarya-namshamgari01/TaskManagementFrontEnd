import { Stack, Box, Typography, Avatar } from "@mui/material";
import dayjs from "dayjs";
import React from "react";

const CommentsPanel = ({ task }) => {
  return (
    <>
      {(() => {
        if (task?.comments?.length === 0)
          return <Typography>No comments found</Typography>;
        if (task?.comments?.length > 0) {
          return (
            <Box>
              {task?.comments?.map((comment) => {
                return (
                  <Stack
                    sx={{
                      width: "inherit",
                      height: "fit-content",
                      border: "1px solid white",
                      padding: "8px",
                      margin: "8px",
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    <Stack direction="row" spacing={1}>
                      <Avatar sx={{ backgroundColor: "#4f3cc975" }}>
                        {comment?.user?.name?.charAt(0)}
                      </Avatar>
                      <Stack>
                        <Stack direction="row" spacing={2}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            {comment?.user?.name?.charAt(0).toUpperCase() +
                              comment?.user?.name?.slice(1)}
                          </Typography>
                          <Typography>
                            {dayjs(comment?.updatedAt).format(
                              "MMMM DD, YYYY HH:mm:ss"
                            ) ?? "-"}
                          </Typography>
                        </Stack>
                        <Typography>{comment?.comment}</Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          );
        }
      })()}
    </>
  );
};

export default CommentsPanel;
