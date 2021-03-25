import { useEffect, useState } from 'react';
import Item from '../item/Item'

const ItemList = ({items, idCategory, discounts, id}) => {   
   
   const [auxHtml, setAuxHtml] = useState("Loading...")
   
   useEffect(() => {

      if (discounts) {
         const aux = items.filter(item => (item.discount === true))
         .map(item => <Item key={item.id} items={item} />)        
         setAuxHtml(aux);   
      } 
      if (idCategory) {
         const aux = items.filter(item => item.idCategory === parseInt(idCategory))
         .map(item => <Item key={item.id} items={item} />)        
         setAuxHtml(aux);   
      }
      if (id) {
         const aux = items.filter(item => item.id === parseInt(id))
         .map(item => <Item key={item.id} items={item} />)        
         setAuxHtml(aux);   
      } 
      
      
   }, [idCategory, discounts, id])      
   
      return (idCategory || discounts || id) ? auxHtml : items.map(item => <Item key={item.id} items={item} />)
}    

export default ItemList;