import React from 'react';
import pic from  './images.png'
function About ()  {
    return(

        <div> 
            <div> <h1> Our Mission </h1>
            <p> To Provide The Best Quality Product</p>
            </div>
        <div><h1>ABOUT US</h1></div>
        <h7>  To us , Shoes reperasent something much larger than just a part of our outfit. They're a part of our life ,
       the big celeberation amd <br/>small moment that make every day famous. We're the work boot you pull every morning ans the slipper 
       you can't wait to slide in to night . <br/> We're the axfords you wore on your secound interview and the chukka boot you wore on your first date . We'ae  
       the basketball shoes you lace <br/> up when you shoot hoops with the guys  and the sport shoes that help you to chase 
       you kids around te park
                  </h7>
                  <br/>
                  <img className="pic" src={pic}    alt="shoe" />    
        </div>
    
    
    
    )
}
export default About
