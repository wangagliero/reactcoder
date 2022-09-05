import React, { useState } from 'react';
import {useEffect}  from 'react';
import {getArray} from '../Helpers/getArray';
import {array} from '../../data/data';
import { ItemList } from './ItemList';
import '../css/ItemListComponets.css';

function ItemListComponent  ({greeting}) {
  const [products,setProducts] = useState ([])
  const [loanding, setLoanding] = useState (true)
     useEffect(() => {
       getArray(array)
        .then(res=>setProducts(res))
        .catch(err=>console.log(err))
        .finally(()=> setLoanding(false))
     }, [])
     
  return (
    <div>
      {    
          loanding?
               <div>carga</div>
               :
               <ItemList Item={products}/>
      
      }
    </div>
   
    
    
  );
}



export default ItemListComponent;