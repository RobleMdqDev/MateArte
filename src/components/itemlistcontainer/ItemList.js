import Item from './Item'

const ItemList = props => (props.item).map(items =>{
   return <Item key={items.id} item={items} />
})
        
   
    
    

export default ItemList;