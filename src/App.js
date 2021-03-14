import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';


function App() {

  return (
    <div className="App">
      
        <NavBar />
        <Container className="mt-3">
          <Row className="justify-content-center">
            <ItemListContainer />
          </Row>
        </Container>
    </div>
  );
}

export default App;
