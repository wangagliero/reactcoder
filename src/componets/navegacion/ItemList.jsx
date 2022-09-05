import React from 'react';
import {Item} from './Item';

export const ItemList = ({Items}) => {
  return (
    <>
    {
        Item.map((Item)=>
           < Item key={Item.id} {...Item}/>
        )
       
       
    }
    </>
  )
}
