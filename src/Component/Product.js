import  { useContext } from 'react';
import Button from '@material-ui/core/Button';


import { Link } from 'react-router-dom';
import Shoes from './../shoes.json';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

import {Data} from '../Globalcontext'



import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));



function Product() {
  
const {addVal} = useContext(Data)

  const classes = useStyles();
    return (
        <div>

          <div className="productContainer">
                {Object.keys(Shoes).map(keyName=>{
                    const {name , img, price} = Shoes[keyName];
                    return(
                  <div className="link" > 
                     
                        
 <img src={img} height={300} alt="shoe" /> 
                      <p>{name} </p>
                      <p>{price}</p>
                      <Link key={keyName} 
                            
                            to={`/product/${keyName}`}>        
                                <Button variant="contained" color="primary" margin-left= "40px"  >
       More info
      </Button>
                            
                                       </Link>  
                                
                                       </div>
                    )
                })}
    
            </div>
        </div>
    );
}
export default Product;
