import { useEffect, useState } from "react";
import ItemDetail from "../itemdetail/ItemDetail";
import Loader from '../loader/Loader'

const ItemDetailContainer = ({ id, title, descripcion, price, pictureUrl }) => {

  const [itemHTML, setItemHTML] = useState(<Loader />);


 useEffect(() => {

    new Promise((res, req)=>{
      setTimeout(()=> {
      
        res(<ItemDetail id={id} title={title} descripcion={descripcion} price={price} pictureUrl={pictureUrl} />);

      }, 2000);       

    }).then((res)=>{
        setItemHTML(res)
    }).catch((err)=>{
      console.log({message: err.message});
    });  

 }, [id]);

    return itemHTML

  }

  

export default ItemDetailContainer;
