import React from "react";
import Card from "react-bootstrap/Card";
import "../Style/MedList.css";

const MedicineList = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="title">Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#" className="Card-Link">
          Buy Now
        </Card.Link>
        <Card.Link href="#" className="Another-Link">
          Show Details
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default MedicineList;
