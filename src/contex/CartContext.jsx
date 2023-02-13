
import { useState, createContext } from "react";

export const CartContext = createContext ()
export function CartContexProvider(props){
   let [Cart,setCart] = useState([]);

   function addItem(item){
    const isInCart = Cart.some((itemInCart)=> itemInCart.id === item.id);
     if(isInCart) {
      let newCart = [...Cart];
      let index = Cart.findIndex((itemIdCart) => itemIdCart.id === item.id);

      alert("ya esta agregado")
   }
   else {
    setCart([...Cart, item]);
   }
}

function removeItem(idtodel){
 setCart(Cart.pop());

}
function clearcart(){

}
function getTotalItem(){
    let total = 0
    Cart.foreach((item) => (total += 1));
    return total;
}
function getTotalPrecie(){
    return 999;
}
const value = {
    Cart,
    addItem,
    getTotalItem,
    removeItem,
    clearcart,
    getTotalPrecie,
};
return(
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
);
}
