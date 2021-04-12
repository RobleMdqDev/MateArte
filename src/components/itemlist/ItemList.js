import Item from "../item/Item";

const ItemList = ({ items, style }) => {    

    return items.length === 1 ? <Item key={items[0].index} items={items[0]} style={style}/> : items.map((item) => <Item key={item.id} items={item} style={style}/>);

}
export default ItemList;
