import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Item from './components/item/Item';
import ItemList from './components/itemlist/ItemList';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/navbar/NavBar';


const Ruta = ()=>{

    return (
      <BrowserRouter>
        <NavBar />
        <Container fluid className='mt-3'>
          <Row className='justify-content-center'>
            <Switch>
              <Route exact path='/ofertas/:discounts' component={ItemListContainer} />
                
              <Route exact path='/category/:idCategory' component={ItemListContainer} />
               
              <Route exact path='/item/:id' component={ItemListContainer} />
               
              
              <Route exact path='/' component={ItemListContainer} />
                
              <Route exact path='*'>
                <h1>404 NotFound</h1>
              </Route>
            </Switch>
          </Row>
        </Container>
      </BrowserRouter>
    );


}

export default Ruta;