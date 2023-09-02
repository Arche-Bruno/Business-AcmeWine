import React, { useReducer, useState } from "react";
import { ContextShoppingCart } from "./ContextShoppingCart";

export const ShoppingCartProvider = ({ children }) => {

  const [verticalMenuVisible, setVerticalMenuVisible] = useState(false);
  const [verticalMenuVisibleRight, setVerticalMenuVisibleRight] = useState(false)
  const [showCardId, setShowCardId] = useState({})



//////////////////////////
//Card of promotions

    const showMenu=(value)=>{
    setVerticalMenuVisible(value)
   
    }


  //////////////////////
// Card of itms

  const showIdCard=(id,value)=>{
    setVerticalMenuVisibleRight(value)
    setShowCardId({id})
   }
 const hideCard=()=>{
   setVerticalMenuVisibleRight(false)
 }


 ////////////////////////

   const [button, setButton] = useState({});
 
   const refreshButton =(id,state)=>{
    setButton((prev) => ({ ...prev, [id]: state }));
   
   }
  
   

  const initialState = [];
  const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case "[shoppingCart]_add":
        return [...state, action.payload];
      case "[shoppingCart]_delete":
        return state.filter((itm)=> itm.idDrink !== action.payload );
       case "[shoppingCarts]_delete":
        return [];

      default:
        state;
    }
  };[]

  const addCart = (received) => {
  
    const action = {
      type: "[shoppingCart]_add",
      payload: received,
    };
    dispatch(action);
  };
  const deleteCart = (id) => {
    const action = {
      type: "[shoppingCart]_delete",
      payload: id,
    };
    dispatch(action)
  };
  const deleteCarts = ()=>{
    const action={
      type: "[shoppingCarts]_delete"
      
    }
    dispatch(action)
  }
  
  const increaseCart = () => {};
  const decreaseCart = () => {};

  const [state, dispatch] = useReducer(cartReducer, initialState);



  return (
    <ContextShoppingCart.Provider value={{ state, addCart,deleteCart,button,refreshButton,verticalMenuVisible,showMenu,hideCard,verticalMenuVisibleRight,showIdCard,showCardId , deleteCarts,setButton}}>
      {children}
    </ContextShoppingCart.Provider>
  );
};
