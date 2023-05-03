import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../Style/MedCat.css";
import { Link } from "react-router-dom";

const MedCat = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={"/6"} className="Card">
            Show More
          </Link>
          {/* <Link to={'/ManageMedicines'} className='Card'>Show More</Link> */}
        </Card.Body>
      </Card>
    </div>
  );
};
export default MedCat;
