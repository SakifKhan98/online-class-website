import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCart, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import "./Course.css";

const Course = (props) => {
  console.log(props.course.name);
  const cartIcon = <FontAwesomeIcon icon={faShoppingBasket} />;
  const { image, name, author, price, description } = props.course;
  return (
    <div className="course">
      <div>
        <img src={image} alt="" srcset="" />
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
        <button className="enroll-button">{cartIcon} Enroll Now</button>
      </div>
    </div>
  );
};

export default Course;
