import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getArray } from '../Helpers/getArray';
import { array } from '../../data/data';
import {ItemDetail} from './ItemDetail'

export const ItemDetailContainer = () => {
     const[Product,SetProduct] = useState({})
     const [Loading, setLoading] = useState(true)

    useEffect(() => {
      getArray(array)
      .then(res=> {
        const item = res.find ((item)=> item.id === 2)
        SetProduct(item)
      })
      .catch(err=>console.log(err))
      .finally(()=> setLoanding(false))
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
