import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import App from "./App";
import ManageMed from "./ManageMedicines/ManageMed";
import ManagePatient from "./pages/Manage-Patient/ManagePatient";
import CrearePatient from "./pages/Manage-Patient/CrearePatient";
import ReadPatient from "./pages/Manage-Patient/ReadPatient";
import UpdatePatient from "./pages/Manage-Patient/UpdatePatient";

// import DeletePatient from "./pages/Manage-Patient/DeletePatient";
export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ManageMedicines",
        element: <ManageMed />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/test",
        element: <Register />,
      },
      {
        path: "/Manage-Patient",
        children: [
          {
            path: "",
            element: <ManagePatient />,
          },
          {
            path: "Create",
            element: <CrearePatient />,
          },
          {
            path: "show",
            element: <ReadPatient />,
          },
          {
            path: "Update",
            element: <UpdatePatient />,
          },
          {
            path: "add",
            element: <CrearePatient />,
          },
          // {
          //   path: "delete",
          //   element: <DeletePatient />,
          // },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);
