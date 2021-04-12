import React, { useContext } from 'react'
import ItemList from '../itemlist/ItemList'
import CartContext from '../../contexts/cartcontext/CartContext'
import { Link } from 'react-router-dom'
import CartTotal from '../carttotal/CartTotal'
import { Row } from 'react-bootstrap'

const Cart = ()=>{

    const {cart} = useContext(CartContext);

    const style = "bg-light m-3 card-cart";
    console.log(cart);
    return cart.length === 0 ? <p>No Hay Items en el Carrito <Link to={"/"} >Volver!</Link></p> : (
        <>  
        <Row>
        <CartTotal cart={cart}/>
        </Row>
        <Row className="d-flex justify-content-center">
        <ItemList items={cart} style={style}/>
        </Row>
        </>
    )
}

export default Cart