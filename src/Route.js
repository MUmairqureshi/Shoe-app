import React from 'react';
import Home from './Component/Home.js';
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import {TransProvider} from "./Globalcontext";
import Product from "./Component/Product";
import ProductItem from "./Component/Productitem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
 
function RouteConfig ()  {
    return(

        <div> 
            <TransProvider>
<Router>      
    <Navbar/> 
    <Switch>
    

     <Route exact  path= '/' component ={  Home  }/ >
             <Route  exact  path= '/about' component ={  About }/ >
             <Route exact  path= '/product' component ={   Product }/ >
             <Route exact  path= '/contact' component ={   Contact }/ >            
            <Route  exact path= '/product/:id' component ={  ProductItem  }/ >
            <Route   path= '*' component ={ ()=><h2> 404 </h2> }/ >
          
            </Switch>


  </Router>
  </TransProvider>
        </div>
    
    
    
    )
}
export default RouteConfig


