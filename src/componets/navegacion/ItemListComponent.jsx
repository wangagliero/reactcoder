
import { useState, useEffect } from 'react';
import { gFetch } from '../Helpers/gFetch';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';


 export const ItemListComponent =( {saludo} ) => {
   const [productos,setProductos] = useState([])
   const [loading,setLoading] = useState(true)
   const {categoryId} = useParams()
   
    useEffect (()=>{
      if(categoryId){
        gFetch()
        .then(respuestaPromesa => {
          
          setProductos(respuestaPromesa.filter(items => items.categoria === categoryId  ))
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
                  
                          <ItemList productos={productos}/>                 
                }
        </div>
               
      )     
    
              }
              export default ItemListComponent;