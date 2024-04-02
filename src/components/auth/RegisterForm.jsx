import React from "react";
import { useFormik } from "formik";
import TextField from "../formElements/TextField.jsx";
import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useGetAllUsers from "../../api/getAllUsers.js";
import useRegisterMutation from "../../api/auth/RegisterMutation.js";
import Link from "../buttons/Link.jsx";
import theme from "../../styles/theme.js";

const RegisterForm = () => {
  const navigate = useNavigate();
  const registerMutation = useRegisterMutation({
    onSuccussCallback: (data) => {
      console.log({ data });
      if (data) navigate("/registerSuccess");
    },
    onErrorCallback: (err) => console.log(err),
  });

  const handleSubmit = (values) => {
    registerMutation.mutate({
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
      bio: values.bio,
    });
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      bio: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Typography>Sign Up</Typography>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <TextField
            id="name"
            name="name"
            type="text"
            label="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && formik.errors.name}
            helperText={formik.errors.name}
          />
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
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          xl={12}
          sx={{ width: "400px" }}
        >
          <InputLabel>Role</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={formik.values.role}
            onChange={(e) => formik.setFieldValue("role", e.target.value)}
            sx={{
              "& .MuiInputBase-input": {
                [theme.breakpoints.up("md")]: {
                  width: "267px",
                },
                [theme.breakpoints.between("xl", "lg")]: {
                  width: "340px",
                },
                [theme.breakpoints.up("sm")]: {
                  width: "167px",
                },
                [theme.breakpoints.up("xs")]: {
                  width: "240px",
                },
                padding: "7px",
              },
            }}
          >
            {["ADMIN", "USER"].map((item) => {
              return (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <TextField
            id="bio"
            name="bio"
            type="text"
            label="Bio"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bio}
            error={formik.touched.bio && formik.errors.bio}
            helperText={formik.errors.bio}
          />
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12} xl={12}>
          <Stack spacing={0.5} alignItems="end">
            <Stack direction="row" spacing={0.5}>
              <Typography>Already have an account? </Typography>
              <Link href="/login">login</Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};
export default RegisterForm;
