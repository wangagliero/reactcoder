import React, { useState } from 'react';
import {useEffect}  from 'react';
import {getArray} from '../Helpers/getArray';
import {array} from '../../data/data';

import '../css/ItemListComponets.css';

import {Item} from './Item';

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
    array.map((item) => <Item {...item}/>)
  );
}



export default ItemListComponent;