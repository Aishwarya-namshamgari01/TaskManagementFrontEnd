import { Grid, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Link from "../buttons/Link";

const RegisterSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item md={6} lg={6} xl={6}></Grid>
      <Grid
        item
        md={6}
        lg={5}
        xl={5}
        sx={{
          backgroundColor: "white",
          marginTop: "15rem",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "left",
        }}
      >
        <Box padding="20px 40px">
          <Typography>
            Registration Successful. Please check your email for a verification
            link. And then
          </Typography>
          <Link href="/login">login here</Link>
        </Box>
      </Grid>
    </Grid>
  );
};
export default RegisterSuccessPage;
