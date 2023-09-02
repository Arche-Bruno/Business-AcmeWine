import React, { useState } from 'react'
import {useFetch} from "./../../useHooks/useFetch"

import { ProductsContext } from './ProductsContext';

const ProductsProvider = ({children}) => {
  

  const [urlFetch, setUrlFetch] = useState('filter.php?a=Alcoholic')
 
  const url =(link)=>{
  
     setUrlFetch(link)
   
  }

  
  const { data, loading, error } = useFetch(`https://www.thecocktaildb.com/api/json/v1/1/${urlFetch}`);
  
  return (
    <ProductsContext.Provider value={{data,loading,error,url}}>
   {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider
