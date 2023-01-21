
import { useStates, useEffect } from 'react';

import { gFetch } from '../Helpers/gFetch';


 export const ItemListComponent =( {saludo} ) => {
   const [productos,setProductos] = useStates([])
   const [loading,setLoading] = useStates(true)
   
   
    useEffect (()=>{
        gFetch()
      .then(respuestaPromesa => {
        
        setProductos(respuestaPromesa)
     })

      .catch(err =>console.log(err))
      .finally(()=> setLoading(false))
    },[])
    console.log(productos)

       return(
        <div>
          
                 {  loading
                    ?
                      <center>
                        <h1>cargando...</h1>
                      </center>
                    :
                                               <>{productos.map}(producto => <div key={producto.id} className='card'></div>

                                               <div classname='card-head'>
                                                {producto.name}
                                               </div>

                                               <div className='card-body'>
                                              <img src={producto.foto}/>
                                               <h5>Categoria:{producto.categoria}</h5>
                                                <h5>precio:{producto.precio}</h5>
                                               </div>

                                               <div className='card-footer'>
                                              <button className='btn btn-outline-dark'>click</button>

                                               </div>)
                                             
                       </>
                  }
          </div>
                 
        )     
      
                }
                export default ItemListComponent