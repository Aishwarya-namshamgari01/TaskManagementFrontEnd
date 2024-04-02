import { Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ id, name, description, color }) => {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        padding: "10px",
        // backgroundColor: color,
        // color: "white",
      }}
      //   onClick={() => {
      //     navigate(`/task/${id}`);
      //   }}
    >
      <Typography sx={{ fontWeight: "bold", fontSize: "16px", color: color }}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>
      <Typography>{color}</Typography>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default CategoryCard;
