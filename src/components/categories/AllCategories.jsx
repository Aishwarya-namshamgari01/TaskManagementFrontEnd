import React from "react";
import useGetAllTasks from "../../api/tasks/getAllTasks";
import { CircularProgress, Grid, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import { openModal } from "../modals/modalSlice";
import useGetAllCategories from "../../api/categories/getAllCategories";
import CategoryCard from "./CategoryCard";

const AllCategories = () => {
  const getAllCategories = useGetAllCategories();
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
                modalName: "createEditCategoryModal",
                modalProps: {},
              })
            );
          }}
        />
      </Stack>
      {(() => {
        if (getAllCategories?.isLoading)
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
        if (getAllCategories?.data)
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
              {getAllCategories?.data?.categories.map((category) => {
                return (
                  <>
                    <Grid
                      item
                      spacing={4}
                      lg={3}
                      md={4}
                      xl={2}
                      xs={4}
                      sm={4}
                      key={category?._id}
                      sx={{
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        width: "fit-content",
                      }}
                    >
                      <CategoryCard
                        name={category.name}
                        description={category.description}
                        color={category.color}
                        id={category._id}
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

export default AllCategories;
