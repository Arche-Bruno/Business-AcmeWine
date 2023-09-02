import { useEffect, useState } from 'react'

export const useFetch = (url) => {

   const [datas, setDatas] = useState({
        data:null,
        loading:true,
        error:null,
   })

  const {data,loading,error} = datas;

   const getData=async()=>{


   try{
    const response = await fetch(url);
    const data =await response.json();
  
     setDatas({...datas, 
      data,
      loading:false,
      error:null,
     })
      

   }catch(error){
      setDatas({...datas,
     data:null,
     loading:false,
     error:error,
    })

   }

   }

   useEffect(() => {
    getData();
   
   }, [url])

   return{
    data,
    loading,
    error
     
   }
   


 
}
