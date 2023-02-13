import ItemCount from "./Counter";
import  useCartContext  from "../../contex/CartContext";
import { useContext } from "react";

const CardConteiner = () =>{
  const contex = useContext(useCartContext);
  const { cartList, vaciarCarrito } = useCartContext()
  
    return(
      
      <div>
           { cartList.map(prod => <div key={producto.id}>
                              <img src={producto.foto}/>
                              <label>nombre: {producto.name}</label>
                              <label >cantidad: {producto.cantidad}</label>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
      </div>)}
      </div>
     
    
    )
  }
  export default CardConteiner;