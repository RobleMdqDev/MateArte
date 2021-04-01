import React from 'react'

const GlobalContext = React.createContext(()=>{
    const props = {
        stock: 0,
    }

    const methods = {
        onAdd: (contador)=>{
            console.log(contador);
        }
    }
});

export default GlobalContext;