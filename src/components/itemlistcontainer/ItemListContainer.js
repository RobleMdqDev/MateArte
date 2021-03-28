import React, { useEffect, useState } from "react";

import ItemList from "../itemlist/ItemList";

import mockItems from "../../data/mockItems";
import { useParams } from "react-router";

export default function ItemListContainer() {
  const { idCategory, discounts, id } = useParams();

  const [items, setItems] = useState([]);

  const [auxHtml, setAuxHtml] = useState();

  useEffect(() => {
    new Promise((res, req) => {
      setTimeout(() => {
        res(mockItems);
      }, 2000);
    })
      .then((res) => {
        setItems(res);
      })
      .catch((req) => {
        console.log({ error: req.message });
      });
  }, []);

  useEffect(() => {

    setAuxHtml(items);   

    if (idCategory) return setAuxHtml(items.filter((item) => item.idCategory === parseInt(idCategory)));

    if (id) return setAuxHtml (items.filter((item) => item.id === parseInt(id)));

    if (discounts) return setAuxHtml(items.filter((item) => item.discount === true));

  }, [id, idCategory, discounts, items]);

  return auxHtml ? <ItemList items={auxHtml} /> : <ItemList items={items} />;
}
