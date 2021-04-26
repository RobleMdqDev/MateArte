import React, { useContext, useEffect, useState } from "react";

import ItemList from "../itemlist/ItemList";

import { useParams } from "react-router";
import ProductContext from "../../contexts/productcontext/ProductContext";


export default function ItemListContainer() {

  const {items} = useContext(ProductContext)

  const { idCategory, discounts, id } = useParams();

  const [auxHtml, setAuxHtml] = useState();  
  const [style] = useState("bg-light m-3")
  
  useEffect(() => {

    setAuxHtml(items);   

    if (idCategory) return setAuxHtml(items.filter((item) => item.idCategory === parseInt(idCategory)));
    
    if (id) return setAuxHtml (items.filter((item) => item.id === id));
        
    if (discounts) return setAuxHtml(items.filter((item) => item.discount === true));
    
  }, [id, idCategory, discounts, items]);

  return auxHtml ? <ItemList items={auxHtml} style={style} /> : <ItemList items={items} style={style}/>;
}
