import { useState } from "react";
import { Button, ButtonGroup, Card, InputGroup } from "react-bootstrap";


const ItemCount = ({stock, initial, onAdd}) =>{
    
    const [contador, setContador] = useState(initial);
        
    const handleOnAdd = (e)=>{
        
        if ((e.target.value === "-") && (initial < contador)) {
            setContador((contador)=>(contador - 1 ));
        }
        if ((e.target.value === "+") && (stock > contador)){
            setContador((contador)=>(contador + 1 ));
        }
        
    }    

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(stock !== 0){
            console.log({stockActualItemCount: stock})
            onAdd(contador);
            setContador(initial);  
        }
               
    }

    

    return(
        <form id="counterForm">
            <br/>           
            <ButtonGroup >
            <Button variant="info" value="-" onClick={(e) => handleOnAdd(e)}>-</Button>            
            <InputGroup.Text > - <strong>{contador}</strong> - </InputGroup.Text>
            <Button variant="info" value="+" onClick={(e) => handleOnAdd(e)}>+</Button>
            </ButtonGroup>
            <Card.Body>
            <Button
                variant="outline-info"
                name="submit"
                type="sumbit" 
                onClick={(e)=>{handleOnSubmit(e)}} 
                block               
                >Agregar
            </Button>            
            </Card.Body>           
        </form>
    );
}

export default ItemCount;