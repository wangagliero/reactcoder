import Item from "./Item";

const ItemList = ({ productos }) => {
  
  return ( 
    productos.map(producto => <Item key={producto.key} producto={producto}/>)
  )
  
  
  }

  
export default ItemList;