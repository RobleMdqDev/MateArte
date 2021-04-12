import { useEffect, useState } from "react";
import ItemDetail from "../itemdetail/ItemDetail";
import Loader from '../loader/Loader'

const ItemDetailContainer = ({ id, title, descripcion, price, pictureUrl }) => {

  const [itemHTML, setItemHTML] = useState(<Loader />);


 useEffect(() => {
   setItemHTML(
     <ItemDetail
       id={id}
       title={title}
       descripcion={descripcion}
       price={price}
       pictureUrl={pictureUrl}
     />
   );
 }, [id]);

    return itemHTML

  }

  

export default ItemDetailContainer;
