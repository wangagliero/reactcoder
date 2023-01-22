 import ItemCount from '../navegacion/Counter';

 const onAdd = (cant)=>{
  console.log(cant)
 }
const ItemDetail =({producto}) => {
  return(
    <div className="contenedor">
      <div className="row">
        <div className="detalle">
          <img src = {producto.foto}/>
          <h1>Nombre:{producto.name}</h1>
          <h2>categoria:{producto.categoria}</h2>
          <h5>precio:{producto.precio}</h5>

        </div>
         <div>
          <ItemCount onAdd={onAdd}/>
         </div>
      </div>

    </div>
  )
}
export default ItemDetail