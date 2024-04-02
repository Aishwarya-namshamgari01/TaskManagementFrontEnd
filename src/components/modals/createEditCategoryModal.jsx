import React, { useRef } from "react";
import { Button, Typography } from "@mui/material";
import MyModal from "./MyModal";
import { Field, Form, Formik } from "formik";
import TextField from "../formElements/TextField";
import MySelect from "../formElements/Select";
import useCreateTaskMutation from "../../api/tasks/createTaskMutation";
import useGetAllTasks from "../../api/tasks/getAllTasks";
import { DatePicker } from "../formElements/DatePicker";
import { Bounce, toast } from "react-toastify";
import useCreateCategoryMutation from "../../api/categories/createCategoryMutation";
import useGetAllCategories from "../../api/categories/getAllCategories";

const createEditCategoryModal = ({ open, handleClose, modalProps }) => {
  const formikRef = useRef();
  const getAllCategories = useGetAllCategories();
  const createCategoryMutation = useCreateCategoryMutation({
    onSucessCallback: (data) => {
      if (data.status === 200) {
        toast.success("Category created", {
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
        getAllCategories.refetch();
        handleClose();
      }
    },
    onErrorCallback: (error) => {
      console.log({ error });
    },
  });
  const handleSubmit = (values) => {
    createCategoryMutation.mutate({
      name: values.name,
      description: values.description,
      color: values.color,
    });
  };
  return (
    <MyModal
      open={open}
      handleClose={handleClose}
      title="Create Category"
      actions={[
        <Button
          onClick={handleClose}
          variant="outlined"
          sx={{
            borderColor: "var(--main-color)",
            color: "var(--main-color)",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "var(--main-color)",
            },
          }}
        >
          Cancel
        </Button>,
        <Button
          type="submit"
          onClick={() => {
            formikRef.current.handleSubmit();
          }}
          variant="outlined"
          sx={{
            borderColor: "var(--main-color)",
            color: "var(--main-color)",
            fontWeight: "bold",
            "&:hover": {
              borderColor: "var(--main-color)",
            },
          }}
        >
          Save
        </Button>,
      ]}
    >
      <Formik
        innerRef={formikRef}
        initialValues={{
          name: "",
          description: "",
          color: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          ...rest
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <TextField
              label="Category name"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={values.name}
              error={errors.name && touched.name}
              helperText={errors.name && touched.name}
            />
            <TextField
              label="description"
              type="text"
              id="descripton"
              name="description"
              onChange={handleChange}
              value={values.description}
              error={errors.name && touched.name}
              helperText={errors.name && touched.name}
            />
            <TextField
              label="Color"
              type="text"
              id="color"
              name="color"
              onChange={handleChange}
              value={values.color}
              error={errors.color && touched.color}
              helperText={errors.color && touched.color}
            />
          </Form>
        )}
      </Formik>
    </MyModal>
  );
};

export default createEditCategoryModal;
