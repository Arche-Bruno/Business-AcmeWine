import React, { useContext } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Badge,
  Avatar,
} from "@nextui-org/react";



import { NavLink } from "react-router-dom";
import icoShoppingCart from "./../../images/carrito.png";
import logoWine from "./../../images/perfil-wine.avif";
import menuIco from "./../../images/menu-ico2.png";
import "./Nav_bar.css";
import { ContextShoppingCart } from "../../Context/ContextShoppingCart/ContextShoppingCart";

import { ProductsContext } from "../../Context/ContextProducts/ProductsContext";

const Nav_bar = () => {
  const { state,showMenu}= useContext(ContextShoppingCart);
  
  const { url } = useContext(ProductsContext);
 
  const handleShowMenu=(value)=>{
    showMenu(value)
  }
  
  const handleUrl =(link,value)=>{
    url(link)
    showMenu(value)
  }

  return (
    <>
  <Navbar className="nav">
        <NavbarBrand>
          <img src={logoWine} width={35} alt="wine" />
          <p className="font-bold text-inherit Nav-name-logo">ACME</p>
        </NavbarBrand>

        <NavbarContent className="flex gap-4 nav-container-links" justify="center">
        <NavbarItem>
          <button onClick={()=>handleShowMenu(true)} >
          <img className="menu-ico" src={menuIco} alt="" width={30}  />
          </button>
  

    </NavbarItem>
          <NavbarItem>
            <NavLink className="nav-link" to="/" onClick={()=>handleUrl('filter.php?a=Alcoholic',false)} >All</NavLink>
          </NavbarItem>

          <NavbarItem>
            <NavLink className="nav-link" to="/Vodka" onClick={()=>handleUrl('filter.php?i=Vodka',false)} >Vodka</NavLink>
          </NavbarItem>



        </NavbarContent>
        <NavbarContent as="div" justify="end">
  <div className="flex gap-3 items-center badge">
    <Badge className={`custom-badge ${state.length > 0 ? 'badge-increase' : ''}`} content={state.length} size="sm" >
      <NavLink to="/Trolley"><img className="cart-icon" src={icoShoppingCart} width={30} alt="icoShoppingCart"/></NavLink>
    </Badge>
  </div>
</NavbarContent>



       
      </Navbar>

   
      
      
    </>
    
    
  );
};

export default Nav_bar;
