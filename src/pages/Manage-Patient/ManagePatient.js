// import { Button } from "bootstrap";
import React from "react";
import Table from "react-bootstrap/Table";
import "../../Style/ManagePatient.css";
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";

const ManagePatient = () => {
  return (
    <div className="manage-patient p-5">
      <div className="header d-flex justify-content-between mb-5 ">
        <h3 className="text-center mb-3">Manage-Patient</h3>
        <Link to={"add"} className="btn btn-success">
          +Add New Patient{" "}
        </Link>
      </div>

      <Table striped bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Patient Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>ahmed</td>
            <td>have lkas asfas daflfai asfljlf</td>
            <td>
              <Link to={"show"} className="btn btn-sm btn-info mx-2">
                show
              </Link>
              <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
                Delete
              </Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>shehab</td>
            <td>have lkas asfas daflfai asfljlf</td>
            <td>
              <Link to={"show"} className="btn btn-sm btn-info mx-2">
                show
              </Link>
              <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
                Delete
              </Link>
            </td>
          </tr>{" "}
          <tr>
            <td>3</td>
            <td>omer</td>
            <td>have lkas asfas daflfai asfljlf</td>
            <td>
              <Link to={"show"} className="btn btn-sm btn-info mx-2">
                show
              </Link>
              <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
                Update
              </Link>
              <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
                Delete
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManagePatient;
