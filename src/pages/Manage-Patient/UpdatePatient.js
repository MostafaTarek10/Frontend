// import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// const Updatepatient = () => {
//   return (
//     <div>
//       <Form className="login-container">
//         <h1>Update patient </h1>

//         <Alert variant={"danger"} className="p-2">
//           This is a alert—check it out!
//         </Alert>
//         <Alert variant={"success"} className="p-2">
//           This is a alert—check it out!
//         </Alert>

//         <Form.Group className="mb-3">
//           <Form.Control type="text" placeholder="patient Name" />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <textarea
//             className="form-control"
//             placeholder="Description"
//             rows={5}
//           ></textarea>
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <input type="file" className="form-control" />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Update patient
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default Updatepatient;


import React, { useState, useRef, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { getAuthUser } from "../../helper/Storage";
import axios from "axios";
import { useParams } from "react-router-dom";

const Updatepatient = () => {



    let { id } = useParams();
    const auth = getAuthUser();
    const [patient, setpatient] = useState({
      name: "",
      email: "",
      password: "",
      Phone: "",
      err: "",
      loading: false,
      success: null,
    });
  
    const Updatepatient = (e) => {
      e.preventDefault();
  
      setpatient({ ...patient, loading: true });
  

      axios
        .put("http://localhost:4000/admin/updatePatient/" + id, {
          name: patient.name,
          email: patient.email,
          password: patient.password,
          Phone: patient.Phone,
        })
        .then((resp) => {
          setpatient({

            ...patient,
            name: "",
            email: "",
            password: "",
            Phone: "",
            err: null,
            loading: false,
            success: "Pateint Created Successfully !",
            reload: patient.reload + 1,
          });
        })
        .catch((err) => {
          setpatient({
            ...patient,
            loading: false,
            success: null,
            err: "Something went wrong, please try again later !",
          });
        });
    };
  

  return (
    <div className="login-container">
      <h1>Update patient</h1>

      {patient.err && (
        <Alert variant="danger" className="p-2">
          {patient.err}
        </Alert>
      )}

      {patient.success && (
        <Alert variant="success" className="p-2">
          {patient.success}
        </Alert>
      )}

      <Form onSubmit={Updatepatient}>
        <Form.Group className="mb-3">
          <Form.Control
            value={patient.name}
            onChange={(e) => setpatient({ ...patient, name: e.target.value })}
            type="text"
            required
            placeholder="patient Name"
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control
            value={patient.email}
            onChange={(e) => setpatient({ ...patient, email: e.target.value })}
            type="text"
            required
            placeholder="email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            value={patient.password}
            onChange={(e) => setpatient({ ...patient, password: e.target.value })}
            type="text"
            required
            placeholder="password"
          />
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Control
            value={patient.Phone}
            onChange={(e) => setpatient({ ...patient, Phone: e.target.value })}
            type="text"
            
            placeholder="Phone"
          />
        </Form.Group>

        {/* <Form.Group className="mb-3">
          <input type="file" className="form-control" ref={image} required />
        </Form.Group> */}

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
         Update patient
        </Button>
      </Form>
    </div>
  );
};

export default Updatepatient;