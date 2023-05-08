// import React, { useState, useEffect } from "react";
// import "../../Style/Patient.css";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import Spinner from "react-bootstrap/Spinner";

// const PatientDetails = () => {
//   //   let { id } = useParams();
//   //   // const auth = getAuthUser();
//   //   const [Patient, setPatient] = useState({
//   //     loading: true,
//   //     result: null,
//   //     err: null,
//   //     reload: 0,
//   //   });
//   //   useEffect(() => {
//   //     setPatient({ ...Patient, loading: true });
//   //     axios
//   //       .get("http://localhost:4000/admin/listMed/" + id)
//   //       .then((resp) => {
//   //         setPatient({
//   //           ...Patient,
//   //           result: resp.data,
//   //           loading: false,
//   //           err: null,
//   //         });
//   //       })
//   //       .catch((err) => {
//   //         setPatient({
//   //           ...Patient,
//   //           loading: false,
//   //           err: " something went wrong, please try again later ! ",
//   //         });
//   //       });
//   //   }, []);
//   //   return (
//   //     <div className="Med-Details-container p-5">
//   //       {Patient.loading === true && (
//   //         <div className="text-center">
//   //           <Spinner animation="border" role="status">
//   //             <span className="visually-hidden">Loading...</span>
//   //           </Spinner>
//   //         </div>
//   //       )}
//   //       {Patient.loading === false && Patient.err == null && (
//   //         <>
//   //           <div className="row">
//   //             <h3> {Patient.result[0].name} </h3>
//   //             <p className="Details">{Patient.result[0].description}</p>
//   //             <p className="Price">Price: {Patient.result[0].price}</p>
//   //             {/* <button className="Buy">Buy Now</button> */}
//   //             <p>expirationDate: {Patient.result[0].expirationDate}</p>
//   //           </div>
//   //         </>
//   //       )}
//   //     </div>
//   //   );
// };

// export default PatientDetails;
