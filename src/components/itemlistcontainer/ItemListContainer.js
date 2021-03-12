import React, { useEffect, useState } from 'react'

import ItemList from './ItemList';

export default function ItemListContainer (){
  
  const [item, setItem] = useState();

  const greeting = [
    {
    id: 1,
    title: "Termo",    
    descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eaque voluptates.",
    price: 500,
    pictureUrl: "./img/termo.png",
    stock: 100  
    },
    {
      id: 2,
      title: "Mate",    
      descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eaque voluptates.",
      price: 300,
      pictureUrl: "./img/mate.png",
      stock: 500  
      },
      {
        id: 3,
        title: "Bombilla",    
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eaque voluptates.",
        price: 100,
        pictureUrl: "./img/bombilla.png",
        stock: 1200  
        }
  ];
    
  const promise = new Promise ((res, req) => {
      setTimeout(()=>{
        res(greeting)
      }, 2000);
  });

  useEffect(() => {
    promise.then((res)=>{
      setItem(res);

    }).catch((req)=>{
        console.log({error:req.message});
    });
    

  });
  
    return (
        <ItemList item={greeting}/>
    );

}