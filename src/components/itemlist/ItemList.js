
import Item from '../item/Item'

const ItemList = ({items}) => { 
         
   
      return items.map(item => <Item key={item.id} items={item} />)
}    

export default ItemList;