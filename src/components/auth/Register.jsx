import { Box, Grid } from "@mui/material";
import RegisterForm from "./RegisterForm";

const Register = () => {
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
          width: "100%",
        }}
      >
        <Box
          padding="20px 40px"
          sx={{
            height: "calc(100vh - 100px)",
            overflowY: "scroll",
            width: "90%",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <RegisterForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
