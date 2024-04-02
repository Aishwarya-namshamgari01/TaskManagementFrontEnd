import { Box, Grid, Stack, Typography } from "@mui/material";
import LoginForm from "./LoginForm.jsx";

const Login = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item md={6} lg={6} xl={6} sm={6} xs={1}>
        <Box sx={{ background: "#4f3cc975", height: "100vh" }}></Box>
      </Grid>
      <Grid
        item
        md={5}
        lg={5}
        xl={5}
        sm={5}
        xs={10}
        sx={{
          height: "inherit",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box padding="20px 40px">
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Login;
