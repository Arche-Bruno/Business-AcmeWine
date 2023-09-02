import React, { useContext } from 'react'
import { ProductsContext } from '../../Context/ContextProducts/ProductsContext';
import { ContextShoppingCart } from '../../Context/ContextShoppingCart/ContextShoppingCart';
import CardProduct from '../../components/CardProduct/CardProduct';

import {CircularProgress} from "@nextui-org/react";
import { useParams } from 'react-router-dom';
import NavBarVertical from '../../components/Nav-bar-vertical/NavBarVertical';
import ShowCard from '../../components/ShowCard/ShowCard';

const Margarita = () => {
  const { name } = useParams();
  console.log(name);


    const { loading, error, data } = useContext(ProductsContext);
 
  
    const { addCart, deleteCart,button,refreshButton,verticalMenuVisible,verticalMenuVisibleRight  } =
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
      <div className="p-8 container-vodka">
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
      <div>
      {verticalMenuVisible &&<NavBarVertical/>  }
           {verticalMenuVisibleRight && <ShowCard/>}
      </div>
     
      </>
        </div>
      </div>
    );
}

export default Margarita