import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = ({ id, title, descripcion, price, pictureUrl }) => {
  return (
    <>
      <Link className='item-a' to={`/item/${id}`}>
      <Card.Img variant='top' src={pictureUrl} alt={pictureUrl} />
      </Link>
   
        <p className="card-text">{descripcion}</p>
      <div className="card-body">
        <Card.Title>{title}</Card.Title>
        <h3>${price}</h3>
      </div>
      </>
  );
};

export default ItemDetail;
