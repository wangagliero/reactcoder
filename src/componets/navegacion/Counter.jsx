import { useState } from "react"

const ItemCount = ({initial=1, stock=10,onAdd}) =>{
  const [ count,setCount] = useState(initial)

  const handleSuma = () =>{
    if(count < stock){
      setCount(count + 1)
    }
  }
  const handleResta =() =>{
    if(count > initial){
      setCount(count - 1)
    }
  }
  const handleOnAdd = () =>{
    onAdd(`a seleccionado esta cantidad ${count}`)
  }
  return(
    <div className="card">
      <div className="card-body">
        <button onClick={handleSuma}> + </button>
        <center>
        <label>{count}</label>
        </center>
        <button onClick={handleResta}> - </button>
        <div className="card-footer">
          <button> agregar al carrito </button>
        </div>

      </div>

    </div>
  )
}
export default ItemCount;
/*import React from 'react'
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

*/