import React, { useContext } from 'react';
import './header.css'
import {Data} from '../Globalcontext'
import Button from '@material-ui/core/Button';
 
function Contact ()  {
//  const classes = useStyles();
  const {data} = useContext(Data)
// {id : 21 , desc: avr}
  const initial = [
  {text :"Product ", num : "abc"   } , 
  {text :"Quamtiity ", num : 1   }  ,
  {text :"Priz ", num :100    }  
  ]

  const taxt = 10
  const total = 0
 



  var num =0;
data.map((price) =>{
    return num += price;
})
 const subtotal = taxt + total 
  
  return(

    <div >

        <table  className="table " >

        <tr>  <th  >Product </th>
     
        <th> Quamtiity </th>
        <th  >Price  </th>
        </tr> 
        <tbody className="tbody">
<th>      abc</th>
<th>      100</th>
<th>      1</th>
          
        </tbody>

        </table>
        









        <table  className="table2 " >
          <br/>
<h4 margine-left ="10" >Detail</h4>        
        <tr  >        <tbody className="tbody2">
<th className="tr1" >    <p> Subtotal</p>  </th>
<th className="tr2">     <p>{num}</p></th>        
</tbody>

<hr className="hr" />
<tbody className="tbody2">

<th className="tr1">      <p> Tax </p>  </th>
<th className="tr3" >     <p> {taxt}$</p> </th>        

</tbody>
<hr className="hr" />
<tbody >
<th className="tr1">    <p> Total</p></th>
<th  className="tr4">   <p>{subtotal}$ </p>   </th>        

</tbody>

<hr className="hr" />
</tr>

<Button id="btn" variant="contained" color="primary" disableElevation>
     Shop Now
    </Button>

        </table>



        </div>    
    )
}
export default Contact


