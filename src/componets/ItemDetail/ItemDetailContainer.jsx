import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../Helpers/gFetch";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
  const[producto,setProducto] = useState({})
   const {detId} = useParams()
   console.log(detId)
   useEffect(()=>{
    gFetch(detId)
    .then(resp=>setProducto(resp))
   },[])
   console.log(producto)
  return(
   <ItemDetail produto ={producto}/>
  )
}
export default ItemDetailContainer



/*import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getArray } from '../Helpers/getArray';
import { array } from '../../data/data';
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {
     const[Product,SetProduct] = useState({})
     const [Loading, ] = useState(true)

    useEffect(() => {
      getArray(array)
      .then(res=> {
        const item = res.find ((item)=> item.id === 2)
        SetProduct(item)
      })
      .catch(err=>console.log(err))
      .finally(()=> (false))
    }, [])
    
  return (
    <div>
        { Loading?
            <div>Cargando...</div>
            :
            <ItemDetail {...Product}/>
        }

    </div>
  )
}
*/