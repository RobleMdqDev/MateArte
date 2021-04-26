import Page404 from "../../pages/Page404";
import Item from "../item/Item";

const ItemList = ({ items, style }) => {   
    console.log("En itemList: ", items[0]);
    const styleOne = {style: "bg-light m-3 card-one"};
    
    if(items[0] === undefined) return <Page404 />;      

    return items.length === 1 ? <Item key={items[0].index} items={items[0]} style={styleOne.style}/> : items.map((item) => <Item key={item.id} items={item} style={style}/>);

}
export default ItemList;
