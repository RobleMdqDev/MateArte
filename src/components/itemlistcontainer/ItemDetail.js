import React from 'react'
import { Card } from 'react-bootstrap'
import ImageCap from '../../assets/img/imagecap.svg'
const ItemDetail = ({title, descripcion, price, pictureUrl})=>{


    return (
        <> 
            <Card.Img variant='top' src={ImageCap} alt={pictureUrl} />
            
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text>
              <strong>${price}</strong>
            </Card.Text>
          </Card.Body>
        </>
    )
}

export default ItemDetail
