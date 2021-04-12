import React, { useContext, useEffect, useState } from "react";

import ItemList from "../itemlist/ItemList";

import 'firebase/firestore'

import { useParams } from "react-router";
import ProductContext from "../../contexts/productcontext/ProductContext";

export default function ItemListContainer() {

  const {items} = useContext(ProductContext)

  const { idCategory, discounts, id } = useParams();

  const [auxHtml, setAuxHtml] = useState();  
  const [style, setStyle] = useState("")
  
  useEffect(() => {

    setAuxHtml(items);   

    if (idCategory) return setAuxHtml(items.filter((item) => item.idCategory === parseInt(idCategory)));
    
    if (id){
       setStyle("bg-light m-3 card-one");
       return setAuxHtml (items.filter((item) => item.id === parseInt(id)));
    }
    
    if (discounts) return setAuxHtml(items.filter((item) => item.discount === true));
    
  }, [id, idCategory, discounts, items]);

  return auxHtml ? <ItemList items={auxHtml} style={style} /> : <ItemList items={items} style={style}/>;
}
