import React, { useContext, useState } from "react";
import { ContextShoppingCart } from "../../Context/ContextShoppingCart/ContextShoppingCart";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import wineTrolley from "./../../images/wineTrolley2.png";

import print2 from "./../../images/print2.svg";
import back from "./../../images/back.svg";

import "./Trolley.css";

const Trolley = () => {
  const { state, deleteCart,setButton, refreshButton ,deleteCarts,button} = useContext(ContextShoppingCart);
  const [cost, setCost] = useState(10)
  const [showAlert, setshowAlert] = useState(false);

  const handleBtnComprar = (value) => {
    setshowAlert(value);
   
  };



  const handlePrint = () => {
    deleteCarts();
    setButton({})
    const printTable = document.querySelector(".container-all");
    const costTotal = document.querySelector(".trolley-container-totalPrice")
    costTotal.style.marginBottom= "20px"
    costTotal.style.display= "flex"
    costTotal.style.alignItems= "center"
    costTotal.style.justifyContent= "space-around"
  
    if (printTable) {
      // Clonamos la tabla para no afectar la original
      const clonedTable = printTable.cloneNode(true);
  
      // Reducimos el tamaño de las imágenes en la tabla clonada
      const imgElements = clonedTable.querySelectorAll("img");
      imgElements.forEach((img) => {
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.borderRadius = "50%";
      });
  
      const printWindow = window.open('', '', 'width=600,height=600');
      printWindow.document.open();
      printWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
              }
              .receipt {
                width: 80%;
                margin: 20px auto;
                border: 1px solid #ccc;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
              }
              .receipt h2 {
                text-align: center;
              }
              .table-container {
                margin-top: 20px;
                border-collapse: collapse;
                width: 100%;
              }
              .table-container th, .table-container td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              .table-container th {
                background-color: #f2f2f2;
              }
            </style>
          </head>
          <body>
            <div class="receipt">
              <h2>Receipt</h2>
              ${clonedTable.outerHTML}
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
      printWindow.close();
    }
  };
  
  const handleDeleteCart = (id) => {
   
    refreshButton(id, false);
    deleteCart(id);
  };

  return (
    <div className="container-trolley ">
      
      <div className="container-all">
      <div className="container-table">
      
        <Table isHeaderSticky 
          aria-label="Example static collection table"
          className="trolley-container-table"
        >
          <TableHeader  className="trolley-tableHeader">
            <TableColumn>Image</TableColumn>
            <TableColumn>NAME</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>STATUS</TableColumn>
          </TableHeader>
          <TableBody>
            {state.map((itm) => (
              <TableRow key={itm.idDrink}>
                <TableCell>
                  {console.log(state.length)}
                  <div className="imgTable">
                    <img src={itm.strDrinkThumb} alt={itm.strCategory} />
                  </div>{" "}
                </TableCell>
                <TableCell>{itm.strDrink} </TableCell>
                <TableCell>S/. {cost}  </TableCell>
                <TableCell>

                  <Button
                    color="danger"
                    onClick={() => handleDeleteCart(itm.idDrink)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
       
        </Table>
        <div className="container-table-max"></div>
       
      </div>
      <div className="trolley-container-totalPrice">
          <h3>TOTAL PRICE =</h3> <span>S/. {state.length * cost} </span>
         </div>

     </div>
      {state.length > 0 ? (
      
       
          <Button
            onClick={()=>handleBtnComprar(true)}
            color="secondary"
            className=" button-trolley"
          >
            Comprar
          </Button>
          
    
        ) : (
          <Button color="danger" className=" button-trolley" disabled>
            Comprar
          </Button>
        )}
      {showAlert ? (
  <section className="trolley-container-alert">
    <div className="alert">
      <h3>Thanks for your purchase!🌹</h3>
      <div className="alert-buttons">
        <button onClick={handlePrint}>
          <img src={print2} alt="Print" />
        </button>
        <button onClick={() => handleBtnComprar(false)}>
          <img src={back} alt="Close" />
        </button>
      </div>
    </div>
  </section>
) : (
  <></>
)}
    </div>
  );
};

export default Trolley;
