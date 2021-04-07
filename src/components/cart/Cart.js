import React, { useContext } from 'react'
import ItemList from '../itemlist/ItemList'
import CartContext from '../../contexts/cartcontext/CartContext'
import { Link } from 'react-router-dom'
import CartTotal from '../carttotal/CartTotal'

const Cart = ()=>{

    const {cart} = useContext(CartContext);
    console.log(cart);
    return cart.length === 0 ? <p>No Hay Items en el Carrito <Link to={"/"} >Volver!</Link></p> : (
        <>  
        <CartTotal cart={cart}/>
        <ItemList items={cart}/>
        </>
    )
}

export default Cart