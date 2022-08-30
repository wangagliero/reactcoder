import Cards from './Cards';
import Counter from './Counter';

function ItemListComponent  ({greeting}) {
     
  return (
    <>
    <h1>{greeting}</h1>
      <Cards/>

      <Counter />
    </>
    
    
  );
}



export default ItemListComponent;