import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Drawer,
  Icon,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RightSideBar from "./RightSideBar";

const GlobalTopNav = () => {
  const navigate = useNavigate();
  const path = window.location.pathname;
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack
        direction="row"
        spacing={4}
        justifyContent="left"
        alignItems="center"
        sx={{ padding: "10px" }}
      >
        <img src="vite.svg" alt="" />
        <Typography
          onClick={() => navigate("/tasks")}
          sx={[
            {
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#4f3cc975",
                padding: "4px 15px",
                borderRadius: "5px",
              },
            },
            path.includes("/tasks")
              ? {
                  backgroundColor: "#4f3cc975",
                  padding: "4px 15px",
                  borderRadius: "5px",
                }
              : null,
          ]}
        >
          Tasks
        </Typography>
        <Typography
          onClick={() => navigate("/categories")}
          sx={[
            {
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#4f3cc975",
                padding: "4px 15px",
                borderRadius: "5px",
              },
            },
            path.includes("/categories")
              ? {
                  backgroundColor: "#4f3cc975",
                  padding: "4px 15px",
                  borderRadius: "5px",
                }
              : null,
          ]}
        >
          Categories
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="end"
        alignItems="center"
        spacing={2}
        sx={{ padding: "10px" }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faBell} />
        <IconButton
          onClick={toggleDrawer(true)}
          size="small"
          sx={{
            color: "black",
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              xl: "none",
              lg: "none",
            },
          }}
        >
          <FontAwesomeIcon icon={faUser} />
        </IconButton>
        <Button
          sx={{
            color: "#4f3cc975",
            "&:hover": {
              color: "#fff",
              backgroundColor: "#4f3cc975",
            },
          }}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)} anchor={"right"}>
          <Stack sx={{ padding: "25px" }}>
            <RightSideBar />
          </Stack>
        </Drawer>
      </Stack>
    </Stack>
  );
};

export default GlobalTopNav;
