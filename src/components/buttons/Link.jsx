import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Link = ({ children, href }) => {
  const navigate = useNavigate();
  return (
    <Typography
      variant="h5"
      onClick={() => {
        navigate(href);
      }}
      sx={{ color: "#0066c0" }}
    >
      {children}
    </Typography>
  );
};
export default Link;
