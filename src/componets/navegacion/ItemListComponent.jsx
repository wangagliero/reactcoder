
import { useState, useEffect } from 'react';
import { gFetch } from '../Helpers/gFetch';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
 export const ItemListComponent =( {saludo} ) => {
   const [productos,setProductos] = useState([])
   const [loading,setLoading] = useState(true)
   const {categoryId} = useParams()
   
    useEffect (()=>{
      if(categoryId){
        gFetch()
        .then(respuestaPromesa => {
          
          setProductos(respuestaPromesa.filter(items => items.categoria === categoryId.Id ))
       })
  
        .catch(err =>console.log(err))
        .finally(()=> setLoading(false))
      }
      else{
        gFetch()
        .then(respuestaPromesa => {
          
          setProductos(respuestaPromesa)
       })
  
        .catch(err =>console.log(err))
        .finally(()=> setLoading(false))
      }
       
    },[categoryId])
    

    return(
      <div>
        
               {  loading
                  ?
                    <center>
                      <h1>cargando...</h1>
                    </center>
                  :
                                             <>{productos.map(producto => <div key={producto.id} className='card'>

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
                                             </div>)}
                                           
                     </>
                }
        </div>
               
      )     
    
              }
              export default ItemListComponent;