import { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Form, InputGroup } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);
  const [variant, setVariant] = useState("info");

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
    console.log(contador);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (stock !== 0) {
      console.log({ stockActualItemCount: stock });
      onAdd(contador);
      setContador(initial);
    }
  };

  useEffect(() => {
    if (stock === 0) {
      setVariant("danger");
    }
  }, [stock]);

  return (
    <form id='counterForm' className="itemCount">
      <br />
      <ButtonGroup >
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
      <Form.Group controlId='formBasicRange'>
        <RangeSlider
          variant={variant}
          className='p-3'
          value={contador}
          name='range'
          min={initial}
          max={stock}
          onChange={(changeEvent) => setContador(changeEvent.target.value)}
        />
        <Button
          variant={"outline-" + variant}
          name='submit'
          type='sumbit'
          onClick={(e) => {
            handleOnSubmit(e);
          }}
          block>
          Agregar
        </Button>
      </Form.Group>
      
        
     
    </form>
  );
};

export default ItemCount;
