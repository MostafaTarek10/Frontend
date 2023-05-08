import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../../Style/ReadPatient.css";

const ReadPatient = () => {
  let { id } = useParams();
  // const auth = getAuthUser();
  const [Patient, setPatient] = useState({
    loading: true,
    result: null,
    err: null,
    reload: 0,
  });
  useEffect(() => {
    setPatient({ ...Patient, loading: true });
    axios
      .get("http://localhost:4000/admin/listPatient/" + id)
      .then((resp) => {
        setPatient({
          ...Patient,
          result: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setPatient({
          ...Patient,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, []);
  return (
    <div className="Med-Details-container p-5">
      {Patient.loading === true && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {Patient.loading === false && Patient.err == null && (
        <>
          <div className="row">
            <h3> {Patient.result.name} </h3>
            <p className="Details">{Patient.result.description}</p>
          </div>
        </>
      )}
    </div>
  );
};
export default ReadPatient;
