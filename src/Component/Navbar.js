import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import { Link } from 'react-router-dom';
import './header.css'
import logo from './logo.png'
function NavBar() {

  return (

    <header>
      <h1> MENS SHOES </h1>      
      <nav>
      
        <ul>
        <li><Link to="/"> Home </Link></li>
        <li> <Link to="/product"> Product </Link> </li>
        <li><Link to="/about"> About </Link> </li>
        <li>    <Link to="/contact"> <AddShoppingCartIcon /> </Link> </li>
        </ul>
        
        </nav>  
	
  </header>

  );
}

export default NavBar;



