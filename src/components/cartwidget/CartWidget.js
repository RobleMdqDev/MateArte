import React, { useContext, useEffect, useState } from "react";
import FontAwesome from "react-fontawesome";
import BadgeItem from '../badgeItem/BadgeItem';
import CartContext from '../../contexts/cartcontext/CartContext'

const CartWidget = (props) => {

    const {cart} = useContext(CartContext)

    const [itemCarrito, setItemCarrito] = useState(0)

    useEffect(() => {
       const cantItem = cart.map(item=>item.quantity).reduce((acc, quantity) => acc + quantity, 0);
       setItemCarrito(cantItem);
       console.log(cantItem);
    }, [cart])


    return(
        <>
        <div><BadgeItem cantidad={itemCarrito} /></div> 
        <FontAwesome name={props.icon} className="cart-icon"/>
        </>
    )


};

export default CartWidget;
