import React, { useEffect, useState } from 'react'

import ItemList from '../itemlist/ItemList';

import mockItems from '../../assets/mockItems'
import { useParams } from 'react-router';

export default function ItemListContainer (){

  const {idCategory, discounts, id} = useParams();
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    new Promise((res, req)=>{
      setTimeout(()=> {
        res(mockItems);
   
      }, 1000);
      
    }).then((res)=>{
      
        setItems(res);
        
    })    
    .catch((req)=>{
        console.log({error:req.message});
    });

  },[]);
  
    return (
      <ItemList items={items} idCategory={idCategory} discounts={discounts} id={id}/>
  );
    

}