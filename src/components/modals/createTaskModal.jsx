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
import useGetAllCategories from "../../api/categories/getAllCategories";
import useGetTaskById from "../../api/tasks/getTaskById";
import useUpdateTaskMutation from "../../api/tasks/updateTaskMutation";

const createTaskModal = ({ open, handleClose, edit, id }) => {
  const formikRef = useRef();
  const getAllTasks = useGetAllTasks();
  const getAllCategories = useGetAllCategories();
  const createTaskMutation = useCreateTaskMutation({
    onSucessCallback: (data) => {
      if (data.status === 200) {
        toast.success("Task created", {
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
        getAllTasks.refetch();
        handleClose();
      }
    },
    onErrorCallback: (error) => {
      console.log({ error });
    },
  });
  const getTaskById = useGetTaskById({
    id: id,
    onSuccessCallback: (data) => {
      const date = new Date(data?.task?.dueDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      formikRef.current.setFieldValue("name", data?.task?.name);
      formikRef.current.setFieldValue("description", data?.task?.description);
      formikRef.current.setFieldValue("dueDate", formattedDate);
      formikRef.current.setFieldValue("priority", data?.task?.priority);
      formikRef.current.setFieldValue("status", data?.task?.status);
      formikRef.current.setFieldValue("category", data?.task?.categoryId);
    },
  });
  const updateTaskMutation = useUpdateTaskMutation({
    id: id,
    onSucessCallback: (data) => {
      console.log({ data });
      if (data?.status === 200) {
        toast.success("Task updated", {
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
        getAllTasks.refetch();
        handleClose();
      }
    },
    onErrorCallback: (error) => {
      console.log({ error });
    },
  });
  const handleSubmit = (values) => {
    console.log({ values }, { edit });
    if (!edit) {
      createTaskMutation.mutate({
        name: values.name,
        description: values.description,
        status: values.status,
        priority: values.priority,
        dueDate: values.dueDate,
      });
    } else {
      updateTaskMutation.mutate({
        name: values.name,
        description: values.description,
        status: values.status,
        priority: values.priority,
        dueDate: values.dueDate,
      });
    }
  };
  return (
    <MyModal
      open={open}
      handleClose={handleClose}
      title={edit ? "Edit task" : "Create task"}
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
          priority: "",
          status: "",
          dueDate: "",
          category: "",
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
              label="Task name"
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
              label="Due date"
              type="date"
              id="dueDate"
              name="dueDate"
              onChange={handleChange}
              value={values.dueDate}
              error={errors.dueDate && touched.dueDate}
              helperText={errors.dueDate && touched.dueDate}
            />
            {/* <DatePicker /> */}
            <Field
              name="priority"
              as={MySelect}
              value={values.priority}
              label="Priority"
              options={[
                {
                  label: "low",
                  value: "low",
                },
                {
                  label: "medium",
                  value: "medium",
                },
                {
                  label: "high",
                  value: "high",
                },
              ]}
              setFormikValue={rest.setFieldValue}
            />
            <Field
              name="status"
              as={MySelect}
              value={values.status}
              label="Status"
              options={[
                {
                  label: "pending",
                  value: "pending",
                },
                {
                  label: "inProgress",
                  value: "inProgress",
                },
                {
                  label: "completed",
                  value: "completed",
                },
              ]}
              setFormikValue={rest.setFieldValue}
            />
            <Field
              name="category"
              as={MySelect}
              value={values.category}
              label="Category"
              options={(() => {
                return getAllCategories?.data?.categories?.map((category) => ({
                  label: category?.name,
                  value: category?._id,
                }));
              })()}
              setFormikValue={rest.setFieldValue}
            />
          </Form>
        )}
      </Formik>
    </MyModal>
  );
};

export default createTaskModal;
