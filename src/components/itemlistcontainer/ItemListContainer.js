import React, { useState } from 'react'

// Bootstrap components
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

import ImageCap from "../../assets/img/imagecap.svg"
import ItemCount from '../itemcount/ItemCount';


export default function ItemListContainer ({greeting}){

    let {title, text, stock} = greeting;

    const [stockActual, setStockActual] = useState(stock)

    
    const handleStock = (stockResta) => {
        
        setStockActual(stockActual - stockResta);
        console.log({stockResta: stockResta})
        console.log({stockActualItemList: stockActual})
    }

    return(
        <Card className="bg-light" style={{ width: '18rem'}}>
        <Card.Img variant="top" src={ImageCap} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">            
            <ListGroupItem>Stock {stockActual}</ListGroupItem>
        </ListGroup>

        <ItemCount stock={stockActual} initial={1} onAdd={handleStock} />        
       
        </Card>
    )
}