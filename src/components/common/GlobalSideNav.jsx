import { Stack, Typography } from "@mui/material";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsProgress,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const GlobalSideNav = () => {
  return (
    <Stack
      sx={{ padding: "10px", backgroundColor: "#fff", margin: "10px" }}
      direction="column"
    >
      <Stack
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ padding: "10px", margin: "10px" }}
      >
        <FontAwesomeIcon
          icon={faBarsProgress}
          style={{
            color: "black",
            fontSize: "20px",
          }}
        />
        <FontAwesomeIcon
          icon={faLayerGroup}
          style={{ color: "black", fontSize: "20px" }}
        />
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "black", fontSize: "20px" }}
        />
        {/* <ListAltIcon />
        <AppsIcon />
        <ListAltIcon />
        <AppsIcon />
        <ListAltIcon /> */}
      </Stack>
    </Stack>
  );
};

export default GlobalSideNav;
