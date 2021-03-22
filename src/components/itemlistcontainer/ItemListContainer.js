import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

import mockItems from '../../assets/mockItems'

export default function ItemListContainer (){
  
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    new Promise((res, req)=>{
      setTimeout(()=> {
        res(mockItems);
   
      }, 2000);
      
    }).then((res)=>{
      
        setItems(res);
        
    })    
    .catch((req)=>{
        console.log({error:req.message});
    });
    

  },[]);
  
    
    return (
        <ItemList items={items}/>
    );

}