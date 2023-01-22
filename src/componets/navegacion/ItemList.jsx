import Item from "./Item";

const ItemList = ({ productos }) => {
  
  return ( 
    productos.map(producto => <Item key={producto} producto={producto}/>)
  )
  
  
  }

  
export default ItemList;