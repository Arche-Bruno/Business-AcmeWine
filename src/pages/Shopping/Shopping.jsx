import React, { useContext } from "react";

import {CircularProgress} from "@nextui-org/react";

import CardProduct from "../../components/CardProduct/CardProduct";
import "./Shopping.css";
import { ProductsContext } from "../../Context/ContextProducts/ProductsContext";
import { ContextShoppingCart } from "./../../Context/ContextShoppingCart/ContextShoppingCart.jsx";
import ShowCard from "../../components/ShowCard/ShowCard";
import NavBarVertical from "../../components/Nav-bar-vertical/NavBarVertical";

const Shopping = () => {
  const { loading, error, data } = useContext(ProductsContext);
  const { addCart, deleteCart,button,refreshButton,verticalMenuVisibleRight,verticalMenuVisible } =
    useContext(ContextShoppingCart);
    

    const handleAdd =(drink)=>{
      refreshButton(drink.idDrink,true)
    
      addCart(drink)
    }
  const handleDelete =(id)=>{
    refreshButton(id,false)
    deleteCart(id)
    }
 

  return (
    <div className="p-8 container-shopping" >
      <div className="grid-container">
        {loading ? (
                  <CircularProgress aria-label="Loading..." />
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          
          data.drinks.map((drink) => {
            
            return (
              <CardProduct
                key={drink.idDrink}
                id={drink.idDrink}
                description={drink.strDrink}
                image={drink.strDrinkThumb}
                category={drink.strCategory}
                instructions={drink.strInstructions}
                handleAdd={() => handleAdd(drink)}
                handleDelete={() => handleDelete(drink.idDrink)}
                isActiveButton={button[drink.idDrink]}
              />
            );
          })
        )}
       <>
      
     
       {verticalMenuVisible &&<NavBarVertical/>  }
           {verticalMenuVisibleRight && <ShowCard/>}
      
       </>

     
        
      </div>
  
    </div>
  );
};

export default Shopping;
