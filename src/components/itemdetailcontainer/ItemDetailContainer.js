import React, { useState } from 'react'

import ItemDetail from '../itemdetail/ItemDetail'

const ItemDetailContainer = ({id, title, descripcion, price, pictureUrl})=>{

    const [itemHTML, setItemHTML] = useState("");

    const getItem = ()=>{

        new Promise((res, req)=>{
            setTimeout(()=> {
              res(<ItemDetail id={id} title={title} descripcion={descripcion} price={price} pictureUrl={pictureUrl} />);
         
            }, 1000);
            
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