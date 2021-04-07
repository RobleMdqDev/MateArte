import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) =>{
    
    const [cart, setCart] = useState(defaultValue);
    
    const addItem = ( item, quantity ) =>{
        console.log(cart);
        if (isInCart(item.id) !== -1) {        
            cart[isInCart(item.id)].quantity += parseInt(quantity);
            return setCart([...cart]);
        }
        setCart([
            ...cart, 
            { ...item, quantity: parseInt(quantity) }            
        ]);
        
    };
    const removeItem = (itemId) => {
        if (isInCart(itemId) !== -1) {        
            setCart([
               ...cart.filter(item => item.id !== itemId)  
            ]);
        }
    };
    const clear = () => {
       
        setCart(defaultValue);

    };

    const isInCart = (idItem) => {        
        const auxItem = cart.findIndex(item => item.id === idItem);
        return auxItem;
    }   
    
    return(
        <CartContext.Provider value={{ cart, addItem, removeItem, clear}} >
            { children }
        </CartContext.Provider>
    );
};

export default CartProvider;