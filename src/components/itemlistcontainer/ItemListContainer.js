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
      }, 500);
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

    if (discounts) setAuxHtml(items.filter((item) => item.discount === true));

    if (idCategory) setAuxHtml(items.filter((item) => item.idCategory === parseInt(idCategory)));

    if (id) setAuxHtml(items.filter((item) => item.id === parseInt(id)));

  }, [id, idCategory, discounts, items]);

  return auxHtml ? <ItemList items={auxHtml} /> : <ItemList items={items} />;
}
