import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const ItemDetail = ({id, title, descripcion, price, pictureUrl})=>{


    return (
      <>
        <Link className='item-a' to={`/item/${id}`}>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Img variant='top' src={pictureUrl} alt={pictureUrl} />

        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <h3>${price}</h3>
        </Card.Body>
        </Link>
      </>
    );
}

export default ItemDetail
