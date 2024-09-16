import { createContext, useState } from "react";

export const CartContext = createContext(null)

export const CartContextProvider = (props)=>{
    const [item,setitem] = useState([])
    const [qty,setqty] = useState(1)
    const [size,setsize] = useState("half")
    return(
        <CartContext.Provider value={{item,setitem,qty,setqty,size,setsize}}>
            {props.children}
        </CartContext.Provider>
    )
}