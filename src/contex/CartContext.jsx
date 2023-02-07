import { useContext } from "react";
import { useState, createContext } from "react";

export const CartContext = createContext ([])
export const useCardContext = () => useContext(CartContext)


 export const CartContexProvider = ({children}) =>{

    const [CartList,setCartList] = useState ([])

    const agregarCarrito = (product) =>{

         setCartList( [...CartList, product])
    }
    const vaciarCarrito = () =>{
        setCartList([])

    }

    return(
        <CartContext.Provider value ={{
            CartList,
            agregarCarrito,
            vaciarCarrito
        }}>
           {children}
        </CartContext.Provider>
       
       
    )
}