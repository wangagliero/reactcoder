
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import ItemListComponent from './componets/navegacion/ItemListComponent';
import {Counter} from './componets/navegacion/Counter';
import { ItemDetailContainer } from './componets/ItemDetail/ItemDetailContainer';

function  App  () {
  const onAdd =(Cot)=>{
     alert('agregaste ${cot} al carrito')
  }
  

  return (
    <div className='App'> 
     <NavBar />
     <Counter stock={5} inicial={1} onAdd={onAdd} />
     <ItemDetailConteiner/>
    <ItemListComponent greeting={"este mensaje"}/>
    
    


    </div> 
  );
}



export default App;
