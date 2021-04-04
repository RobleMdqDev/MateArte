import Item from "../item/Item";

const ItemList = ({ items }) => {

    const style = "bg-light m-3 card-one"

    return items.length === 1 ? <Item key={items[0].id} items={items[0]} style={style}/> : items.map((item) => <Item key={item.id} items={item} />);

}
export default ItemList;
