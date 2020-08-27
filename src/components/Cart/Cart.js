import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total, crs) => total + crs.price, 0);

  return (
    <div>
      <h4>Order Summary: </h4>
      <br></br>
      <Button variant="primary">
        Total Course Ordered: <Badge variant="light">{cart.length}</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
      <br />
      <br />
      <h3>
        <Badge variant="info">Total Price: {total} $</Badge>
        <span className="sr-only">unread messages</span>
      </h3>
    </div>
  );
};

export default Cart;
