import React, { useState, useEffect } from "react";
import "../../Style/MedDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const MedDetails = () => {
  let { id } = useParams();
  // const auth = getAuthUser();
  const [Medicine, setMedicine] = useState({
    loading: true,
    result: null,
    err: null,
    reload: 0,
  });
  useEffect(() => {
    setMedicine({ ...Medicine, loading: true });
    axios
      .get("http://localhost:4000/admin/listMed/" + id)
      .then((resp) => {
        setMedicine({
          ...Medicine,
          result: resp.data,
          loading: false,
          err: null,
        });
      })
      .catch((err) => {
        setMedicine({
          ...Medicine,
          loading: false,
          err: " something went wrong, please try again later ! ",
        });
      });
  }, []);
  return (
    <div className="Med-Details-container p-5">
      {Medicine.loading === true && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {Medicine.loading === false && Medicine.err == null && (
        <>
          <div className="row">
            <h3> {Medicine.result[0].name} </h3>
            <p className="Details">{Medicine.result[0].description}</p>
            <p className="Price">Price: {Medicine.result[0].price}</p>
            {/* <button className="Buy">Buy Now</button> */}
            <p>expirationDate: {Medicine.result[0].expirationDate}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default MedDetails;
