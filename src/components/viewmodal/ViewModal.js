import React, { useState } from 'react'
import { getFirestore } from "../../configs/firebase";


const ViewModal = ({date}) =>{
console.log("date: ", date);
    const [item, setItem] = useState("")
    const [db, setDb] = useState(getFirestore());
    const itemCollection = db.collection('orders');
    itemCollection.get().then(res=>{
        
        if (res.size > 0) {
            const aux = res.docs.map((d) => ({id: d.id, ...d.data()}));
            console.log(aux);
            const items= aux.filter(items => items.date === date);
            setItem(items[0].id) 
            console.log(items);
          }
    })

    return(
        <h3>
            Tu Orden de compra es: {item.id}
        </h3>
    );

}

export default ViewModal;