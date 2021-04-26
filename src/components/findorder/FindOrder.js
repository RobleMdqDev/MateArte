import { Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react'
import { FormControl, InputGroup } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import "./findorder.css";

import { Link } from 'react-router-dom';

const FindOrder = () => {

    

    const [inputOrder, setInputOrder] = useState();
   
    const handleChange = (e)=>{
        setInputOrder(e.target.value);
        
    }

   
    return(       
        <> 
            <InputGroup className="searchForm">
                <FormControl id="order" className="searchOrder" placeholder="Buscar Orden" onChange={(e)=>handleChange(e)}/>
               <Button type="button" className="searchButton"> <Link to={`/order/${inputOrder}`}><FontAwesome name="search" className="search" /></Link></Button>
            </InputGroup>           
        </>
        
    );
}

export default FindOrder;