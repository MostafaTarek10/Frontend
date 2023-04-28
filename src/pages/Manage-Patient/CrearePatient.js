import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const CrearePatient = () => {
  return (
    <div>
      <Form className="login-container">
        <h1>Add New Patient</h1>

        <Alert variant={"danger"} className="p-2">
          This is a alert—check it out!
        </Alert>
        <Alert variant={"success"} className="p-2">
          This is a alert—check it out!
        </Alert>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Patient Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            rows={5}
          ></textarea>
        </Form.Group>

        <Form.Group className="mb-3">
          <input type="file" className="form-control" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add New Patient
        </Button>
      </Form>
    </div>
  );
};

export default CrearePatient;
