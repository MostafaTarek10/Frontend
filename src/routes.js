import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import App from "./App";
import ManageMedicine from "./pages/manage-medicine/ManageMedicine";
import AddMedicine from "./pages/manage-medicine/AddMedicine";
import UpdateMedicine from "./pages/manage-medicine/UpdateMedicine";

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
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/manage-medicine",
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
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"}/>,
  },
]);
