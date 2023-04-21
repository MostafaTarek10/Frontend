import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import App from "./App";
import ManageMed from "./ManageMedicines/ManageMed";
import MedDetails from "./MedDetails/MedDetails";
import ManageCategories from "./pages/ManageCategories/ManageCategories";
import AddCategories from "./pages/ManageCategories/AddCategories";
import UpdateCategories from "./pages/ManageCategories/UpdateCategories";
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
        element: <ManageMed/>,
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
        path: "/MedDetails",
        element: <MedDetails/>,
      },
      {
        path: "/Manage-Cat",
        children: [
          {
            path:"" ,
            element: <ManageCategories/>
          },
          {
            path:"add" ,
            element: <AddCategories/>,
          },
          {
            path:"update" ,
            element: <UpdateCategories/>,
          }

        ]
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/"}/>,
  },
  
]);
