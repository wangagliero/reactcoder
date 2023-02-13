
import { useContext } from "react";
import { CartContexProvider } from "../../contex/CartContext";


const CardConteiner = () =>{
  const contex = useContext(CartContexProvider);
  const { cartList, vaciarCarrito } = CartContexProvider()
  
    return(
      
      <div>
           { cartList.map(prod => <div key={prod.id}>
                              <img src={prod.foto}/>
                              <label>nombre: {prod.name}</label>
                              <label >cantidad: {prod.cantidad}</label>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
      </div>)}
      </div>
     
    
    )
  }
  export default CardConteiner;