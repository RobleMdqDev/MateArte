import React, { useContext, useEffect, useState } from "react";

import "./item.css";

// Bootstrap components
import Card from "react-bootstrap/Card";
import { Alert } from "react-bootstrap";

import ItemCount from "../itemcount/ItemCount";
import ItemDetailContainer from "../itemdetailcontainer/ItemDetailContainer";
import { Link } from "react-router-dom";
import BadgeItem from "../badgeItem/BadgeItem";
import CartContext from '../../contexts/cartcontext/CartContext'
import ProductContext from "../../contexts/productcontext/ProductContext";



const Item = ({ items, style="bg-light m-3" }) => {
 console.log(items);
  const {addItem, removeItem} = useContext(CartContext);
  const {addQuantity, removeQuantity} = useContext(ProductContext)

  const { id, title, descripcion, price, stock, pictureUrl, quantity, index } = items;
  const [stockActual, setStockActual] = useState(stock - quantity);
  const [finCompra, setFinCompra] = useState("");
  const [badgeCount, setBadgeCount] = useState(quantity)

  let stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;

  if (stockActual === 0) {
    stockHTML = <Alert variant='danger'>Stock {stockActual}</Alert>;
  } else {
    stockHTML = <Alert variant='success'>Stock {stockActual}</Alert>;
  }

  const handleStock = (stockResta) => {
    setStockActual(stockActual - stockResta);
    
    addItem(items, stockResta);

    addQuantity(stockResta, index);

    setFinCompra(
      <Link to={`/cart`} className='btn btn-info finCompra'>
        Finalizar Compra
      </Link>
    );     
  };

  const onRemove = ()=>{
    removeItem(id);
    setBadgeCount(0);
    setStockActual(stock);
    removeQuantity(index)
  }

  useEffect(() => {
    setBadgeCount(stock - quantity);
  }, [stockActual]);
  
  return (
    <>
      <Card key={id} className={style}>
        <BadgeItem color="white" bkgColor="magenta" cantidad={quantity}/>        
        <ItemDetailContainer
          id={id}
          title={title}
          descripcion={descripcion}
          price={price}
          pictureUrl={pictureUrl}
        />
        {stockHTML}
        <ItemCount stock={stockActual} initial={1} onAdd={handleStock} onRemove={onRemove} />
        {finCompra}
      </Card>
     
      <br />
    </>
  );
};

export default Item;
