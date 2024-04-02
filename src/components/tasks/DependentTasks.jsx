import React from "react";
import TaskCard from "./TaskCard";
import { Grid, Typography } from "@mui/material";

const DependentTasks = ({ task }) => {
  return (
    <>
      {(() => {
        if (task?.dependencies?.length === 0) {
          return <Typography>No dependencies found</Typography>;
        }
        if (task?.dependencies?.length > 0) {
          return (
            <Grid container spacing={1} gap={1}>
              {task?.dependencies?.map((dependency) => {
                return (
                  <Grid
                    item
                    lg={3}
                    md={3}
                    xl={3}
                    sx={{
                      backgroundColor: "#fff",
                      borderRadius: "10px",
                      width: "fit-content",
                    }}
                  >
                    <TaskCard
                      name={dependency.name}
                      description={dependency.description}
                      status={dependency.status}
                      priority={dependency.priority}
                      id={dependency._id}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        }
      })()}
    </>
  );
};

export default DependentTasks;
