
import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

 const Counter = ({stock, onAdd}) => {
     
      const [ count,setCount] = useState (1)

      function add(){
        if(count < stock)
           setCount(count + 1)
      }
      function substract (){
          if(count > 0)
            setCount(count -1)
      }
      function reset (){
             setCount (1)
      }
  return (
    <div>
       <div className='counter-box'>
         <h1>Counter</h1>
         <p>Stock: {stock}</p>
         <p>Cantidad: {count} </p>

         <div>
          <Button variant="outline-primary" onClick={substract} >-</Button>
          <Button variant="outline-secondary"onClick={reset} >Reset</Button>
          <Button variant="outline-success" onClick={add} >+</Button>
       </div>
       <div>
       <Button variant="outline-success"  onClick={() => onAdd(count)}>Confirmar</Button>
       </div>
       </div>
       
    </div>
  );
}
export default Counter;