import React from "react";
import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";

import ItemListContainer from "./components/itemlistcontainer/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import Page404 from "./pages/Page404";

const Ruta = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Container fluid className='mt-3'>
        <Row className='justify-content-center'>
          <Switch>
            <Route
              exact
              path='/ofertas/:discounts'
              component={ItemListContainer}
            />

            <Route
              exact
              path='/category/:idCategory'
              component={ItemListContainer}
            />

            <Route exact path='/cart' component={Cart} />

            <Route exact path='/item/:id' component={ItemListContainer} />

            <Route exact path='/' component={ItemListContainer} />

            <Route exact path='*' component={Page404} />
          </Switch>
        </Row>
      </Container>
    </BrowserRouter>
  );
};

export default Ruta;
