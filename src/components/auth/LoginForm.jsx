import React from "react";
import { useFormik } from "formik";
import TextField from "../formElements/TextField.jsx";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import loginMutation from "../../api/auth/loginMutation.js";
import useGetAllUsers from "../../api/getAllUsers.js";
import Link from "../buttons/Link.jsx";
import { Bounce, toast } from "react-toastify";

const LoginForm = () => {
  const navigate = useNavigate();
  const getAllUsers = useGetAllUsers();

  const createloginMutation = loginMutation({
    onSucessCallback: (data) => {
      console.log({ api: data });
      localStorage.setItem("user", JSON.stringify(data.data.user));

      if (data.status === 200) {
        localStorage.setItem("accessToken", data.data.accessToken);
        toast.success("Logged in Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate("/");
      }
      getAllUsers.refetch();
    },
    onErrorCallback: (err) => {
      toast.error(err.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      if (err.response.status === 403) {
        navigate("/registerSuccess");
      }
    },
  });

  const handleSubmit = (values) => {
    createloginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Typography>Sign in</Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            helperText={formik.errors.email}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.touched.password && formik.errors.password}
            helperText={formik.errors.password}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Stack spacing={0.5} alignItems="end">
            <Typography variant="h5">Forgot password?</Typography>
            <Stack direction="row" spacing={0.3}>
              <Typography variant="h5">Don't have an account? </Typography>
              <Link href="/register">Create one</Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};
export default LoginForm;
