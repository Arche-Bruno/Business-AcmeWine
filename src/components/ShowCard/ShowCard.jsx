import React, { useContext } from 'react'
import "./ShowCard.css"


import {Card, CardBody, Image,Button, Progress,CircularProgress} from "@nextui-org/react";
import { ContextShoppingCart } from '../../Context/ContextShoppingCart/ContextShoppingCart';
import { ProductsContext } from '../../Context/ContextProducts/ProductsContext';

const ShowCard = () => {

  const {hideCard,showCardId,addCart,deleteCart,refreshButton,button} = useContext(ContextShoppingCart)
  const{ data,loading,error} = useContext(ProductsContext)
   
  console.log(button)
  const handleHideCard =(drink,id)=>{
    refreshButton(id,true)

    addCart(drink)
    hideCard();
  }
  const handleRemoveBtn = (id)=>{
    deleteCart(id)
    refreshButton(id,false)
    hideCard();
  }

  return (

    <div className="modal">

      <div className='containerShowCard'>

      {loading ? (

                  <CircularProgress aria-label="Loading..." />

        ) : error ? (

          <p>Error: {error.message}</p>

        ) : ( 

          data.drinks.map((drink) => {

            if(drink.idDrink === showCardId.id){
              return (
               
                <Card
                classNames="card"
                key={drink.idDrink}
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
              >
                 
                <CardBody>

                  <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">

                    <div className="relative col-span-6 md:col-span-4">

                      <Image
                        alt="Album cover"
                        className="object-cover img"
                        height={200}
                        shadow="md"
                        src={drink.strDrinkThumb}
                        width="100%"
                      />

                    </div>
          
                    <div className="flex flex-col col-span-6 md:col-span-8">

                      <div className="flex justify-between items-start">

                        <div className="flex flex-col gap-0">
                          
                          <h3 className="font-semibold text-foreground/90">{drink.strDrink}</h3>
                          <p className="text-small text-foreground/80">{drink.strCategory} </p>
                          <h1 className="mt-2">More popular</h1>
                       
                    </div>
                     
                      </div>
          
                      <div className="flex flex-col mt-3 gap-1">
                        <Progress
                          aria-label="Music progress"
                          classNames={{
                            indicator: "bg-default-800 dark:bg-white",
                            track: "bg-default-500/30",
                          }}
                          color="default"
                          size="sm"
                          value={33}
                        />
                        <div className="flex justify-between">
                          <p className="text-small">1:23</p>
                          <p className="text-small text-foreground/50">4:32</p>
                        </div>
                      </div>
          
                      <div className="flex w-full items-center justify-center">

                        {button[showCardId.id] ?   <Button
                      onClick={()=>handleRemoveBtn(drink.idDrink)}  
                      disableRipple
                      color="danger" 
                      size="lg"
                      className='showCard-btn'
                      >
               Remove
              </Button>:   <Button
                      onClick={()=>handleHideCard(drink,drink.idDrink)}  
                      disableRipple
                      className='showCard-button'
                      size="lg"
                     
                      >
               Separate
              </Button> }
                   
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              );
            }else{
              return null;
            }
            
         
          })
        )}

      </div>



   
      

  </div>
  )
}

export default ShowCard