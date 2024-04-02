import { Navigate, useRoutes } from "react-router-dom";
import Login from "../components/auth/Login.jsx";
import Register from "../components/auth/Register.jsx";
import RegisterSuccessPage from "../components/auth/RegisterSuccessPage.jsx";
import PrivateOutlet from "./PrivateOutlet.jsx";
import Home from "../components/Home.jsx";
import PublicOutlet from "./PublicOutlet.jsx";
import TaskDetails from "../components/tasks/TaskDetails.jsx";
import CategoryMainPage from "../components/categories/CategoryMainPage.jsx";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <PublicOutlet />,
      children: [
        { path: "", element: <Navigate to="/login" /> },
        { path: "login", element: <Login /> },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "registerSuccess",
          element: <RegisterSuccessPage />,
        },
      ],
    },
    {
      path: "/",
      element: <PrivateOutlet />,
      children: [
        { path: "tasks", element: <Home /> },
        { path: "categories", element: <CategoryMainPage /> },
        { path: "tasks/:taskId", element: <TaskDetails /> },
      ],
    },
  ]);
  return routes;
};
export default AppRoutes;
