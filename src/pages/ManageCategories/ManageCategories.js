import React from "react";
import "../../Style/ManageCategories.css";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
const ManageCategories = () => {
  return (
    <div className="manage-cat">
      <div className="header">
        <h3>ManageCategories</h3>
        <Link to={"add"} className="btn btn-success">
          Add New Categorie
        </Link>
      </div>

      <Alert variant={"danger"} className="p-2">
        This is a alert—check it out!
      </Alert>
      <Alert variant={"success"} className="p-2">
        This is a alert—check it out!
      </Alert>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Categorie Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="Categories-img"
              />
            </td>
            <td>Heart Issues</td>
            <td>
              {" "}
              Some quick example text to build on the card title and make{" "}
            </td>
            <td>
              <Link className="btn btn-sm btn-danger">Delete</Link>
              <Link to={"Update"} className="btn btn-sm btn-primary mx-5">
                Update
              </Link>
              <Link to={"show"} className="btn btn-sm btn-info">
                Show
              </Link>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="Categories-img"
              />
            </td>
            <td>Heart Issues</td>
            <td>
              {" "}
              Some quick example text to build on the card title and make{" "}
            </td>
            <td>
              <Link className="btn btn-sm btn-danger">Delete</Link>
              <Link to={"Update"} className="btn btn-sm btn-primary mx-5">
                Update
              </Link>
              <Link to={"/MedDetails"} className="btn btn-sm btn-info">
                Show
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCategories;
