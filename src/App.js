import {React} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import {ItemListComponent} from './componets/navegacion/ItemListComponent';
import  ItemDetailContainer  from './componets/ItemDetail/ItemDetailContainer';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import CardConteiner from './componets/navegacion/CardConteiner';

function  App  () {
  return(
    <BrowserRouter> 
    <NavBar />
      <Routes>
      
      <Route path='/' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/categoria/:CategoriaId' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/detail/:detId' element={<ItemDetailContainer />}/>
      <Route path='/card' element={<CardConteiner/>}/>
      

    <Route path='/' element={  <Navigate to='/' />}/>
    
   
  
    
     </Routes>
    </BrowserRouter> 
  );
  
};

export default App;
