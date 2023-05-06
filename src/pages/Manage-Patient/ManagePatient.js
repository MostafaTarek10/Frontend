// // import { Button } from "bootstrap";
// import React from "react";
// import Table from "react-bootstrap/Table";
// import "../../Style/ManagePatientsPatients.css";
// import { Link } from "react-router-dom";
// // import { Button } from "bootstrap";

// const ManagePatientsPatients = () => {
//   return (
//     <div className="manage-Patients p-5">
//       <div className="header d-flex justify-content-between mb-5 ">
//         <h3 className="text-center mb-3">Manage-PatientsPatients</h3>
//         <Link to={"add"} className="btn btn-success">
//           +Add New PatientsPatients{" "}
//         </Link>
//       </div>

//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Image</th>
//             <th>PatientsPatients Name</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>1</td>
//             <td>
//               <img
//                 src="https://picsum.photos/200"
//                 alt="alfd"
//                 className="image-avatar"
//               />
//             </td>
//             <td>ahmed</td>
//             <td>have lkas asfas daflfai asfljlf</td>
//             <td>
//               <Link to={"show"} className="btn btn-sm btn-info mx-2">
//                 show
//               </Link>
//               <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
//                 Update
//               </Link>
//               <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
//                 Delete
//               </Link>
//             </td>
//           </tr>
//           <tr>
//             <td>2</td>
//             <td>
//               <img
//                 src="https://picsum.photos/200"
//                 alt="alfd"
//                 className="image-avatar"
//               />
//             </td>
//             <td>shehab</td>
//             <td>have lkas asfas daflfai asfljlf</td>
//             <td>
//               <Link to={"show"} className="btn btn-sm btn-info mx-2">
//                 show
//               </Link>
//               <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
//                 Update
//               </Link>
//               <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
//                 Delete
//               </Link>
//             </td>
//           </tr>{" "}
//           <tr>
//             <td>3</td>
//             <td>
//               <img
//                 src="https://picsum.photos/200"
//                 alt="alfd"
//                 className="image-avatar"
//               />
//             </td>
//             <td>omer</td>
//             <td>have lkas asfas daflfai asfljlf</td>
//             <td>
//               <Link to={"show"} className="btn btn-sm btn-info mx-2">
//                 show
//               </Link>
//               <Link to={"Update"} className="btn btn-sm btn-primary mx-2">
//                 Update
//               </Link>
//               <Link to={"delete"} className="btn btn-sm btn-danger mx-2">
//                 Delete
//               </Link>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ManagePatientsPatients;

import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";


const ManagePatients = () => {
  const auth = getAuthUser();
  const [Patients, setPatients] = useState({
    loading: true,
    results: [],
    err: null,
    reload: 0,
  });

  useEffect(() => {
    setPatients({ ...Patients, loading: true });
    axios
      .get("http://localhost:4000/admin/listPatient")
      .then((resp) => {
        // console.log(resp);
        setPatients({
          ...Patients,
          results: resp.data,
          loading: false,
          err: null,
        });
      })

      .catch((err) => {
        setPatients({
          ...Patients,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, [Patients.reload]);

  const deletePatients = (id) => {
    axios
      .delete("http://localhost:4000/admin/deletePatient/" + id,)
      .then((resp) => {
        setPatients({ ...Patients, reload: Patients.reload + 1 });
      })
      .catch((err) => {});
  };
  return (
    <div className="manage-Patients p-5">
      <div className="header d-flex justify-content-between mb-5">
        <h3 className="text-center ">Manage Patients
  </h3>
        <Link to={"add"} className="btn btn-success">
          +Add New Patients
    
        </Link>
      </div>

      {/* <Alert variant="danger" className="p-2">
        This is simple Alert
      </Alert>
      <Alert variant="success" className="p-2">
        This is simple Alert
      </Alert> */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Patientsname</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Patients.results.map((Patients) =>(
          <tr key = {Patients.id}>
          <td>{Patients.id}</td>
          <td>{Patients.name}</td>
          <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={(e) => {deletePatients(Patients.id);}}>
                  Delete
                </button>
                <Link
                  to={"" + Patients.id}
                  className="btn btn-sm btn-primary mx-2">
                  Update
                </Link>
                <Link to={"/" + Patients.id} className="btn btn-sm btn-info">
                  show
                </Link>
              </td>
        </tr>


          ))}

        </tbody>
      </Table>
    </div>
  );
};

export default ManagePatients;
