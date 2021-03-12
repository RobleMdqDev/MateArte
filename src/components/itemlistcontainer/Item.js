import React, { useState } from 'react'

// Bootstrap components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Alert } from 'react-bootstrap';

import ImageCap from "../../assets/img/imagecap.svg";
import ItemCount from '../itemcount/ItemCount';

const Item = (props) => {

    
    const {id, title, descripcion, price, stock, pictureUrl} = props.item;
    
    const [stockActual, setStockActual] = useState(stock)
    
    let stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;

    if (stockActual === 0) {
      stockHTML = <Alert variant='danger'>Stock {stockActual}</Alert>;
    } else {
      stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;
    }
    
    const handleStock = (stockResta) => {
        
        setStockActual(stockActual - stockResta);
               
    }

    return (
        <>  
    <Card className='bg-light m-3' style={{ width: "18rem" }}>
        <Card.Img variant='top' src={ImageCap} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Card.Text><strong>${price}</strong></Card.Text>
        </Card.Body>
        <ListGroup className='list-group-flush'>{stockHTML}</ListGroup>
        <ItemCount stock={stockActual} initial={1} onAdd={handleStock} />
    </Card>
    <br/>
    </>
    )
};

export default Item;