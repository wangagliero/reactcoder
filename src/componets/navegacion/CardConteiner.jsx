import ItemCount from "./Counter";

const CardConteiner = () =>{
  const { cartList, vaciarCarrito } = useCartContext()
  
    return(
      <div>
           { cartList.map(prod => <div key={prod.id}>
                              <img src={prod.foto}/>
                              <label>nombre: {prod.name}</label>
                              <label >cantidad: {prop.cantidad}</label>
          <button onClick={vaciarCarrito}>vaciar carrito</button>
      </div>)}
      </div>
     
    
    )
  }
  export default CardConteiner;