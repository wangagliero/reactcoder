
import React from 'react'
import { useState } from 'react'



export const Counter = (stock,inicial,onAdd) => {
  const [cot, setCount] = useState(inicial)
  const Add = ()=>{
    setCount (cot+1)
  }
  const Res = ()=>{
    setCount (cot-1)
  }

  return (
    <div id="Counter">
      <div>
      <button onClick={Add} disabled={cot === stock}>+</button>
      <h1>{cot}</h1>
      <button onClick={Res} disabled={cot===inicial}>-</button>
      </div>
      <button className='Add' onClick={()=>onAdd(cot)}>Agregar al carrito</button>
    </div>
  )
}

