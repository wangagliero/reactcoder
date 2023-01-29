import { Link } from "react-router-dom";

const Item = ( {producto }) => {
  return (
    <div className="contenedor-cart">
         <div key={producto.id} >
         <div classname='card-head'>
                {producto.name}
        </div>
             <div className='card-body'>
               <img src={producto.foto} alt='foto' className='fotos'/>
               <h5>Categoria:{producto.categoria}</h5>
                <h5>precio:{producto.precio}</h5>
             </div>
             <div className='card-footer'>
                  <Link to={`/detail/${producto.id}`}>
                  <button className='boton'>click</button>
                  </Link>
    
             </div>
          </div>
    </div>      
      
  )
}
export default Item;