import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import App from "./App";
import ManageMedicine from "./pages/manage-medicine/ManageMedicine";
import AddMedicine from "./pages/manage-medicine/AddMedicine";
import UpdateMedicine from "./pages/manage-medicine/UpdateMedicine";
import ManageCategories from "./pages/ManageCategories/ManageCategories";
import AddCategories from "./pages/ManageCategories/AddCategories";
import UpdateCategories from "./pages/ManageCategories/UpdateCategories";
import MedDetails from "./pages/MedDetails/MedDetails";
import CategorieDetails from "./pages/CategorieDetails/CategorieDetails";
import ManagePatient from "./pages/Manage-Patient/ManagePatient";
import CrearePatient from "./pages/Manage-Patient/CrearePatient";
import ReadPatient from "./pages/Manage-Patient/ReadPatient";
import UpdatePatient from "./pages/Manage-Patient/UpdatePatient";
import Guest from "./middleware/Guest";
import Admin from "./middleware/Admin";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: ":id",
      //   element: <MedicineDetails/>,
      // },
      // Guest middleware
      {
        element: <Guest />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
        ],
      },

      {
        path: ":id",
        element: <MedDetails />,
      },
      // {
      //   path: ":id",
      //   element: <CategorieDetails />,
      // },

      // {
      //   path: "MedicineDetails",
      //   element: <MedDeta ,
      // },
      {
        path: "/manage-medicine",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <ManageMedicine />,
          },
          {
            path: "add",
            element: <AddMedicine />,
          },
          {
            path: ":id",
            element: <UpdateMedicine />,
          },
          {
            path: ":id",
            element: <MedDetails />,
          },
        ],
      },
      {
        path: "/Manage-Cat",
        element: <Admin />,
        children: [
          {
            path: "",
            element: <ManageCategories />,
          },
          {
            path: "add",
            element: <AddCategories />,
          },
          {
            path: "update",
            element: <UpdateCategories />,
          },
          {
            path: ":id",
            element: <CategorieDetails />,
          },
        ],
      },
      {
        path: "/Manage-Patient",
        element: <Admin />,
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
