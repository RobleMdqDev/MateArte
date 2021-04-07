import React, { useEffect, useState } from 'react'

const CartTotal = ({cart})=>{

    const [total, setTotal] = useState(0);

    useEffect(() => {        
        setTotal(cart.map(item=> item.quantity * item.price).reduce((acc, quantity) => acc + quantity, 0));
        console.log(total);
     }, [cart])


    return(
        <div>
            <h2>Total: {total}</h2>
        </div>
    );
}

export default CartTotal