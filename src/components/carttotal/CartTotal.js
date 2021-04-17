import React, { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { getFirestore } from "../../configs/firebase";
import ProductContext from "../../contexts/productcontext/ProductContext";

import Login from '../login/Login';
import ViewModal from "../viewmodal/ViewModal";

const CartTotal = ({ cart }) => {

  const {user, setOrderCollection, orderCollection} = useContext(ProductContext);
  const [db, setDb] = useState(getFirestore());

  const [total, setTotal] = useState(0);
  const [viewModal, setViewModal] = useState();

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}-${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}:${current.getMilliseconds()}`;

  const handleClose = ()=>{
    setViewModal();
  } 

  useEffect(() => {
    setTotal(
      cart
        .map((item) => item.quantity * item.price)
        .reduce((acc, quantity) => acc + quantity, 0)
    );
  }, [cart]);

  const finCompra = async ()=> {   
    if (user === "") {
      setViewModal(        
        <Login handleModal={handleClose} />        
      ); 
    }else{
      
      const items = cart.map(item => (
        {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity
        }
      ));

      setOrderCollection({
        buyer: user,
        items: items,
        date: date,
        total: total
      });
      
      let errorStock = [];

      const comprobarStock = async ()=>{
        cart.forEach(item => {
          const itemCollection = db.collection('items').doc(item.id);
          itemCollection.get().then(res=>{
            const itemBase = res.data();
            const restaStock = itemBase.stock - item.quantity;
            if (restaStock < 0) {            
                errorStock.push(item.title);               
            }          
          }); 
        
      });
      };
      
      comprobarStock();

        console.log(errorStock);
        setTimeout(()=>{
          if (errorStock.length === 0) {
            cart.forEach(item => {
              const itemCollection = db.collection('items').doc(item.id);
              itemCollection.get().then(res=>{
                const itemBase = res.data();
                const restaStock = itemBase.stock - item.quantity;
                itemCollection.update({stock: restaStock});
                console.log("update de stock de: ", item.title);
              })         
            })
            
                        
            const orders = db.collection("orders");
            console.log("Orden de compra: ", orderCollection);
            orders.add(orderCollection);
            setViewModal(<ViewModal date={orderCollection.date} />);
          }else{
            alert("Los siguientes productos no tienen stock suficiente: ", errorStock.map(item => ` ${item} `));
          }
          
        }, 2000)
        
      } 
         
  
  }

  
  return (
    <div>
      <h2>Total: {total}</h2>
      <Button variant="info" value='Finalizar Compra' onClick={(e) => finCompra(e)}>
         Finalizar Compra
      </Button>
      {viewModal}
    </div>
  );
};

export default CartTotal;
