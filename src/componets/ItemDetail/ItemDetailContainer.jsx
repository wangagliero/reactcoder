import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { gFetch } from "../Helpers/gFetch";
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () =>{
  const[producto,setProducto] = useState({})
   const {detId} = useParams()
   
   useEffect(()=>{
    gFetch(detId)
    .then(resp=>setProducto(resp))
   },[])
   
  return(
   <ItemDetail produto ={producto}/>
  )
}
export default ItemDetailContainer


