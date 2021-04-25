import { useEffect, useState } from "react";
import { Button, ButtonGroup, Form, InputGroup } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "../item/item.css";

const ItemCount = ({ stock, initial, onAdd, onRemove }) => {
  const [contador, setContador] = useState(initial);
  const [variant, setVariant] = useState("");

  const handleCounter = (e) => {
    if (e.target.value === "-" && initial < contador) {
      setContador((contador) => (contador = contador - 1));
    }
    if (e.target.value === "+" && stock > contador) {
      setContador((contador) => (contador = parseInt(contador) + 1));
    }
    if (e.target.type === "range" && stock >= contador) {
      setContador(e.target.value);
    }
    
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (stock !== 0) {
      
      onAdd(contador);
      setContador(initial);
    }
  };

  useEffect(() => {
    if (stock === 0) {
      setVariant("danger");
    }else{
      setVariant("info");
    }
  }, [stock]);

  return (
    <form className="itemCount">
      
      <Form.Group className="mt-2" controlId='formBasicRange'>
      <ButtonGroup className="mt-1">
        <Button variant={variant} value='-' onClick={(e) => handleCounter(e)}>
          -
        </Button>
        <InputGroup.Text>
          {" "}
          - <strong>{contador}</strong> -{" "}
        </InputGroup.Text>
        <Button variant={variant} value='+' onClick={(e) => handleCounter(e)}>
          +
        </Button>
      </ButtonGroup>
      
        <RangeSlider
          variant={variant}
          value={contador}
          name='range'
          min={initial}
          max={stock}
          onChange={(changeEvent) => setContador(changeEvent.target.value)}
        />
        <Button
          variant={variant}
          name='submit'
          type='sumbit'
          className="mt-3"
          onClick={(e) => {
            handleOnSubmit(e);
          }}
          >
          Agregar
        </Button>
        
      </Form.Group>        
      <button          
          className='deleteButton'
          type='button'
          onClick={() => onRemove()}
          >
          X
        </button>
    </form>
  );
};

export default ItemCount;
