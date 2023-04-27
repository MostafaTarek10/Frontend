import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

const AddMedicine = () => {
  return (
    <div className="login-container">
      <h1>Add New Medicine Form</h1>

      <Alert variant="danger" className="p-2">
        This is simple Alert
      </Alert>
      <Alert variant="success" className="p-2">
        This is simple Alert
      </Alert>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Medicine Name" />
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

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New Medicine
        </Button>
      </Form>
    </div>
  );
};

export default AddMedicine;
