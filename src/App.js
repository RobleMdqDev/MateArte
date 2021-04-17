import React, { useEffect, useState } from 'react';
import CartProvider from './contexts/cartcontext/CartProvider';


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Ruta from "./Ruta";
import ProductContext from './contexts/productcontext/ProductContext';
import { getFirestore } from './configs/firebase';

function App() {
  const [items, setItems] = useState([]);
  const [db, setDb] = useState(getFirestore());
  const [user, setUser] = useState("");
  const [orderCollection, setOrderCollection] = useState("");

  console.log(orderCollection);
  
  // ITEMS
  useEffect(() => {
    function getAll() {
      const item = db.collection("items");
  
      item.get().then((res) => {
        
        if (res.size > 0) {
          const aux = res.docs.map((d, index) => ({quantity: 0, index: index, id: d.id, ...d.data()}));
          setItems(aux
            );
        }
      });
    }
    getAll();
    
  }, []);

  const addQuantity = ( quantity, index ) =>{
          
    items[index].quantity += parseInt(quantity);
    
    return setItems([...items]);  
  };
  const removeQuantity = ( index ) =>{
          
    items[index].quantity = 0;
    
    return setItems([...items]);  
  };

  return (
    <div className='App'>
      <CartProvider >
        <ProductContext.Provider value={{items, setItems, addQuantity, removeQuantity, setUser, user, orderCollection, setOrderCollection}}>
          <Ruta />
        </ProductContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
