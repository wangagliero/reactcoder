import {React} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import ItemListComponent from './componets/navegacion/ItemListComponent';



function  App  () {
  return(
    <>
     <NavBar/>
     <ItemListComponent  />
    </>
  )
};

export default App;
 /* const onAdd =(Cot)=>{
     alert(`agregaste ${Cot} al carrito`)
  }
  
  return (
     
      <div>
            <NavBar/>
 
    
            <ItemListComponent greeting={"este mensaje"}/>
            <ItemDetailContainer/>
            <Counter/>
 

      </div>
   
    
  );
}


 <BrowserRouter> 
      <Routes>
      <NavBar />
      <Route path='/' element={<ItemListComponent greeting={"este mensaje"}/>}/>
      <Route path='/detail' element={<ItemDetailComponent />}/>
      <Route path='/counter' element={<Counter />}/>

    <Route path='*' element={  <Navigate to='/' />}/>
    
   
  
    
     </Routes>
    </BrowserRouter> 
  );*/