import React, { useEffect, useState } from 'react'
import { ListGroup, Table } from 'react-bootstrap';
import { getFirestore } from "../../configs/firebase";
import './viewmodal.css'

import Loader from '../loader/Loader'




const ViewModal = ({date}) =>{

    const [item, setItem] = useState("")
    const [db, setDb] = useState(getFirestore());

    useEffect(() => {
        const itemCollection = db.collection('orders');
        itemCollection.get().then(res=>{
        
        if (res.size > 0) {
            const aux = res.docs.map((d) => ({id: d.id, ...d.data()}));
            console.log(aux);
            const items= aux.filter(items => items.date === date);
            setItem(items[0]) 
            console.log("final: ", items[0]);
          }
        })  
    }, [date]);    

    const handleClose = ()=>{
        window.location.reload();
    };

    return item === "" ? <Loader /> : (
        <div className="ventana">
            <div className="bg-light p-3 rounded border border-secondary">
                <h2 className="alert-success p-2 rounded">Tu compra fue realizada con exito!</h2>
                <ListGroup className="mb-3">
                    <ListGroup.Item className="mb-2">Tu orden de compra es: <strong>{item.id}</strong> </ListGroup.Item>
                    <ListGroup.Item variant="info"> <strong>{item.buyer.name}</strong> este es tu resumen</ListGroup.Item>
                </ListGroup>
                
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>    
                            {(item.items).map(list => (
                                <tr key={list.title}>
                                    <td>{list.title}</td>
                                    <td>{list.quantity}</td>
                                    <td>{list.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <ListGroup>
                    <ListGroup.Item>Total de la compra: {item.total}</ListGroup.Item>
                    <ListGroup.Item variant="success" action onClick={()=>handleClose()}>Aceptar</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );        
    

}

export default ViewModal;