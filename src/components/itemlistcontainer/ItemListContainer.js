import React from 'react'

// Bootstrap components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import ImageCap from "../../assets/img/imagecap.svg"


export default function ItemListContainer ({greeting}){


    return(
        <Card className="bg-light" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={ImageCap} />
        <Card.Body>
            <Card.Title>{greeting.title}</Card.Title>
            <Card.Text>{greeting.text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">            
            <ListGroupItem>Stock {greeting.stock}</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Agregar</Card.Link>
            <Card.Link href="#">Borrar</Card.Link>
        </Card.Body>
        </Card>
    )
}