import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Course.css";

const Course = (props) => {
  //   console.log(props);
  const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />;
  const { image, name, author, price, description } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h4 className="course-name">{name}</h4>
        <br />
        <p>
          <small>by: {author} </small>
        </p>
        <p>${price}</p>
        <br />
        <p>
          <small>About Course: {description}</small>
        </p>
        <Button
          className="btn btn-info"
          onClick={() => props.handleAddCourse(props.course)}
        >
          {cartIcon} Enroll Now
        </Button>
      </div>
    </div>
  );
};

// className="enroll-button"

export default Course;
