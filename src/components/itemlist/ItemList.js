import Item from "../item/Item";

const ItemList = ({ items, style }) => {   
    
    const styleOne = "bg-light m-3 card-one";

    return items.length === 1 ? <Item key={items[0].index} items={items[0]} style={styleOne}/> : items.map((item) => <Item key={item.id} items={item} style={style}/>);

}
export default ItemList;
