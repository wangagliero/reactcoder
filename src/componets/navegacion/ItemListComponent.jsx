
import { useEffect } from 'react';
import { gFetch } from '../Helpers/gFetch';


 export const ItemListComponent =({saludo}) => {
 useEffect (()=>{
  gFetch 
  .then(respuestaPromesa => {
   console.log(respuestaPromesa)
     })

     .catch(err =>console.log(err))
     .finally(()=> console.log('llegamos'))
    })
       return (
      <div>
      <h2> saludo </h2>
      </div>
     )
 }