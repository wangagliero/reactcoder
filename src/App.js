
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from './componets/navegacion/NavBar';
import ItemListComponent from './componets/navegacion/ItemListComponent';




function  App  () {

  return (
    <div className='App'> 
     <NavBar />
    
    <ItemListComponent greeting={"este mensaje"}/>

    

    </div>
    
  
     
    
  );
}



export default App;
