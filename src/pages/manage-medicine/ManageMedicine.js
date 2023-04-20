import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

const ManageMedicine = () => {
  return (
    <div className="manage-medicine p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage Medicine</h3>
        <Link to={"add"} className="btn btn-success">
          +Add New Medicine
        </Link>
      </div>

      <Alert variant="danger" className="p-2">
        This is simple Alert
      </Alert>
      <Alert variant="success" className="p-2">
        This is simple Alert
      </Alert>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Medicine name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Heart medicine</td>
            <td>ACE inhibitors like ramipril</td>
            <td>
              medications that help relax the veins and arteries to lower blood
              pressure
            </td>
            <td>
              <Link to={"5"} className="btn btn-sm btn-primary ">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info mx-2">
                Show
              </Link>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Heart medicine</td>
            <td>ACE inhibitors like ramipril</td>
            <td>
              {" "}
              medications that help relax the veins and arteries to lower blood
              pressure
            </td>
            <td>
              <Link to={"5"} className="btn btn-sm btn-primary ">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info mx-2">
                Show
              </Link>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Heart medicine</td>
            <td>ACE inhibitors like ramipril</td>
            <td>
              {" "}
              medications that help relax the veins and arteries to lower blood
              pressure
            </td>
            <td>
              <Link to={"5"} className="btn btn-sm btn-primary ">
                Update
              </Link>
              <Link to={"/5"} className="btn btn-sm btn-info mx-2">
                Show
              </Link>
              <button className="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageMedicine;
