import React, { useState } from 'react'

import ItemDetail from './ItemDetail'

const ItemDetailContainer = ({title, descripcion, price, pictureUrl})=>{

    const [itemHTML, setItemHTML] = useState("");

    const getItem = ()=>{

        new Promise((res, req)=>{
            setTimeout(()=> {
              res(<ItemDetail title={title} descripcion={descripcion} price={price} pictureUrl={pictureUrl} />);
         
            }, 2000);
            
          }).then((res)=>{
            
              setItemHTML(res);
              
          })    
          .catch((req)=>{
              console.log({error:req.message});
           
          });

    }

    getItem()
    
    return itemHTML;
    
}

export default ItemDetailContainer