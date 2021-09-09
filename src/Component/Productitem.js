import Button from '@material-ui/core/Button';
import React ,{useContext} from 'react';
import { useParams } from 'react-router-dom'
import shoes from "./../shoes.json";
import './header.css'
import {Data} from '../Globalcontext'

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Productitem() {
  const {addVal} = useContext(Data)
  const classes = useStyles();
    const { id } = useParams();

    const Shoe = shoes[id]

    if (!Shoe)
        return <h2> Product Not Found ! </h2>

    console.log(Shoe)


    return (

        <div>
  <div className=" mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
    <div className="link-img" >

<img  src={Shoe.img} height={400} width={500}  alt='Soe' margin-top=" 30000px "
margin-left = "20px" 
/>

</  div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
          <h3 className="card-title1">  NIKE TIEMPOX RIO IV IC MENS <br/> Rs.3,999.00 </h3>
        <h7 className="card-text1">
Full canvas double sided print with rounded toe construction,<br/>
 Lace-up closure for a snug fit, Soft textile lining with lightweight<br/>
  construction for maximum comfort,High-quality EVA outsole for traction and <br/>
  exceptional durability. 
  </h7>

                      </div>
           <Button variant="contained" color="primary" margin-left= "40px" 
      >
       BUY Now
      </Button>
      

    </div>
  </div>
</div>
        </div>
    )
}
export default Productitem



