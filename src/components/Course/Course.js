import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

import "./Course.css";
import { CardDeck } from "react-bootstrap";

const Course = (props) => {
  const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />;
  const { image, name, author, price, description } = props.course;
  return (
    <div className="course">
      <div>
        <div>
          <CardDeck style={{ display: "flex", flexDirection: "row" }}>
            <Card style={{ flex: 1 }} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  By: {author}
                </Card.Subtitle>
                <br></br>
                <p>
                  <small>
                    <Button variant="success">
                      Course Price: ${price}
                      <span className="sr-only">unread messages</span>
                    </Button>
                  </small>
                </p>

                <Card.Text>
                  {" "}
                  <h6>About Course:</h6> {description}
                </Card.Text>

                <Button
                  className="btn btn-info"
                  onClick={() => props.handleAddCourse(props.course)}
                >
                  {cartIcon} Enroll Now
                </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </div>
      </div>
    </div>
  );
};

export default Course;
