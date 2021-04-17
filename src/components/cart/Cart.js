import React, { useContext } from "react";
import ItemList from "../itemlist/ItemList";
import CartContext from "../../contexts/cartcontext/CartContext";
import { Link } from "react-router-dom";
import CartTotal from "../carttotal/CartTotal";
import { Container, Row } from "react-bootstrap";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const style = "bg-light m-3 card-cart";

  return cart.length === 0 ? (
    <p>
      No Hay Items en el Carrito <Link to={"/"}>Volver!</Link>
    </p>
  ) : (
    <Container>
      <Row className='p-2'>
        <CartTotal cart={cart} />
      </Row>
      <Row className='d-flex justify-content-center p-2'>
        <ItemList items={cart} style={style} />
      </Row>
    </Container>
  );
};

export default Cart;
