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
          <button onClick={() => onAdd(count)}> agregar al carrito </button>
        </div>

      </div>

    </div>
  )
}
export default ItemCount;
