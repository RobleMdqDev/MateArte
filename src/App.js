import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {

  const greeting = {
    title: "Termo",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eaque voluptates, laudantium itaque expedita, molestiae ad eius sapiente laboriosam.",
    stock: 100  
  }

  return (
    <div className="App">
      
        <NavBar />

        <Container className="mt-3">
          <ItemListContainer greeting={greeting}/>
        </Container>
    </div>
  );
}

export default App;
