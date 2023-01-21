import {React} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import {ItemListComponent} from './componets/navegacion/ItemListComponent';
import  ItemDetailContainer  from './componets/ItemDetail/ItemDetailContainer';
import Counter from './componets/navegacion/Counter.jsx';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';



function  App  () {
  return(
    <BrowserRouter> 
    <NavBar />
      <Routes>
      
      <Route path='/' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/detail' element={<ItemDetailContainer />}/>
      <Route path='/counter' element={<Counter />}/>

    <Route path='*' element={  <Navigate to='/' />}/>
    
   
  
    
     </Routes>
    </BrowserRouter> 
  );
  
};

export default App;
