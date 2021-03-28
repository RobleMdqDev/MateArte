import React, { useState } from "react";

import "./item.css";

// Bootstrap components
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Alert } from "react-bootstrap";

import ItemCount from "../itemcount/ItemCount";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import { Link } from "react-router-dom";

const Item = ({ items }) => {
  const { id, title, descripcion, price, stock, pictureUrl } = items;
  const [stockActual, setStockActual] = useState(stock);
  const [finCompra, setFinCompra] = useState("");

  let stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;

  if (stockActual === 0) {
    stockHTML = <Alert variant='danger'>Stock {stockActual}</Alert>;
  } else {
    stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;
  }

  const handleStock = (stockResta) => {
    setStockActual(stockActual - stockResta);
    setFinCompra(
      <Link to={`/cart`} className='btn btn-info finCompra'>
        Finalizar Compra
      </Link>
    );
  };

  return (
    <>
      <Card key={id} className='bg-light m-3 card' style={{ width: "24rem" }}>
        {finCompra}
        <ItemDetailContainer
          id={id}
          title={title}
          descripcion={descripcion}
          price={price}
          pictureUrl={pictureUrl}
        />
        <ListGroup className='list-group-flush'>{stockHTML}</ListGroup>
        <ItemCount stock={stockActual} initial={1} onAdd={handleStock} />
      </Card>

      <br />
    </>
  );
};

export default Item;
