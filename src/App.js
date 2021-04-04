import React from 'react';
import CartProvider from './contexts/cartcontext/CartProvider';


import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Ruta from "./Ruta";

function App() {
  return (
    <div className='App'>
      <CartProvider >
        <Ruta />
      </CartProvider>
    </div>
  );
}

export default App;
