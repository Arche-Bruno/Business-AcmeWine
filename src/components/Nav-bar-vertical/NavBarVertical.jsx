import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWine from "./../../images/perfil-wine.avif";
import promotions from "./../../images/promotions.png";
import discounts from "./../../images/discounts.png";
import more_popular from "./../../images/more_popular.png";
import opening_hours from "./../../images/opening_hours.png";

import { Button } from "@nextui-org/react";

import "./NavBarVertical.css";
import { ContextShoppingCart } from "../../Context/ContextShoppingCart/ContextShoppingCart";

import { ProductsContext } from "../../Context/ContextProducts/ProductsContext";


const NavBarVertical = () => {

   const {showMenu} = useContext(ContextShoppingCart);
   const {url} = useContext(ProductsContext)

   const handleHideMenu=(value)=>{
    showMenu(value)
   }
   const handleUrl =(link,value)=>{
    url(link)
    showMenu(value)
   }


  return (
    <div className="containerNavBarVertical">
      <div className="container-links">
        <div className="container-logo-closed">
          

        <div className="container-logo">
           <img src={logoWine} width={35} alt="wine" />
        
           </div>
         
           <Button color="danger" className="closed-NavVertical" onClick={()=>handleHideMenu(false)} >
            X
           </Button>
        </div>

        <ul className="nav-menu">
        <li>
    <NavLink to={'/Vodka/search.php?f=a' } onClick={()=>handleUrl('search.php?f=a',false)}>
      <div className="nav-menu-link">
        <img src={promotions} alt="wine" />
        <span>Promotions</span>
      </div>
      <hr className="hr"/>
    </NavLink>
  </li>
          <li>
            <NavLink to={'/Vodka/filter.php?c=Ordinary_Drink'} onClick={()=>handleUrl('filter.php?c=Ordinary_Drink',false)}>
    
              <div className="nav-menu-link">
                <img src={discounts} alt="wine" />
                <span>Discounts</span>
              </div>
              <hr className="hr"/>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/Vodka/filter.php?c=Cocktail'} onClick={()=>handleUrl('filter.php?c=Cocktail',false)}>
          
              <div className="nav-menu-link">
                <img src={more_popular} alt="wine" />
                <span>More Popular</span>
              </div>
              <hr className="hr"/>
            </NavLink>
          </li>
          <li>
            <Link>
            
              <div className="nav-menu-link">
                <img src={opening_hours} alt="wine" />
                <span>Opening Hours</span>
              </div>
              <hr className="hr"/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarVertical;
