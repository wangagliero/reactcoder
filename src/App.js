import {React} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import {ItemListComponent} from './componets/navegacion/ItemListComponent';
import  ItemDetailContainer  from './componets/ItemDetail/ItemDetailContainer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import  CartConteiner  from './componets/navegacion/CartConteiner';
import { CartContexProvider } from './contex/CartContext';



function  App  () {
  return(

    <CartContexProvider>
    <BrowserRouter> 
    <NavBar />
      <Routes>
      
      <Route path='/' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/detail/:detailId' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<CartConteiner />}/>


      <Route path='*' element={<Navigate to='/'/>}/>
      
    
   
  
    
     </Routes>
    </BrowserRouter> 
    </CartContexProvider>
  );
  
};

export default App;
