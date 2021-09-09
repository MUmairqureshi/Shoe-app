import blue from  './blue.jpg'
import React from 'react';
import Button from '@material-ui/core/Button';
import './home.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';

 
function Home ()  {
    return(
<div>
      


         <div class=" mb-3">
  <div class="row g-0">
       <div  className="text"> 
    <div class="col-md-8">
      <div class="card-body">
      
        <h1  id="Shoes"> Nice Shoes <br/> UT ENIM 2020</h1>
        <h2  id="Summer" >Summer Collection 2020</h2>
        <p class="card-text">  Quality is our top-priority. Here, you can get both big and small<br/>
          shoes with best services. We deal with all famous brands of shoes. <br/>The
          quality of our brands is totally verified. We provide you the best<br/>
          international and local famous Brands.</p>
      
      </div>

    <Link 
    className="link"
    to="./Product">
     <Button id="btn" variant="contained" color="primary" disableElevation>
     Shop Now
    </Button>
    </Link>
  
     
    </div>
    </div>
    <div class="col-md-4">
      <img src={blue}   className="image rounded-start" alt="..."/>
    </div>
  </div>
</div>


















         </div>
        
         
        
)}
export default Home