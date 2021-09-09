// import { func } from 'prop-types'
// import Shoes from './shoes.json';
// import React  from 'react'

// import { keys } from '@material-ui/core/styles/createBreakpoints';
// import { useReducer  , createContext} from 'react';
//  const initialstate = [ ]
//     // {    "name": "JORDAN IMPACT TR" , "price" : "$200",},
//     // { "name": "LANGLEY 4 MENS SHOE",  "price" : "$250"},
//     // { "name": "ADIDAS CONTINENTAL 80",  "price" : "$300"} ,
//     // {"name": "NEW BALANCE ","price" : "$350"},
//     // { "name": "JORDAN TR","price" : "$400"},
//     // {  "name": "NIKE ONE RUN", "price" : "$500"},
//     // {"name": "Nike Original 3","price" : "$320"} ,



// export const TransContext = createContext(initialstate)
 
// export const Transreducer = ( state,  action ) => {
//     switch (action.type) {
//     case 'Add_Value':{
// return [ ...state ,
// {
//       id : action.id ,
//         name : action.name,
//     price :  action.price
// }
// ] }

// case 'Delete_val':{
// return state.filter(item => item.id != action.id)
// }

// default:
//     return state;
//     };
// }

// export  const TransProvider = ({children})=>{
//     const [data , dispatch] = React.useReducer(TransContext ,  Transreducer  )

// const additem = (id , name , price ) => {
//     dispatch ({
//         type : "Add_Value" ,
//         id ,
//         name ,
//         price 
//     })

// }

// const delitem = (id  ) => {
// dispatch({
//     type : " Delete_val",
//     id
// })
// }
// const values = {
//     data,
//     additem ,
//     delitem

// }

// return(
// <TransContext.Provider value={values} >
// {children}
// </TransContext.Provider>
// )
// }






























import React, {createContext} from 'react'

const iState = [];
export const Data = createContext(iState);

const reducer = (state, action) =>{
    switch(action.type){
        
        case "ADD_VAL":{

            return [
                ...state,
                {
                id: action.id,
                name: action.name,
                img: action.img,
                title: action.title,
                price: action.price
                }
            ]
        }
        case "DELETE_LIST":{
        return state.filter(item => item.id !== action.id)
           
    
    }
        
        default : return state;     
        
    }
            
};

export const TransProvider = ({children}) =>{
    let [data, dispatch] = React.useReducer(reducer, iState);
    

const addVal = (id, name, img, title, price) =>{
    dispatch({
        type: "ADD_VAL",
        id,
        name,
        img,
        title,
        price
    })

}
const deleteVal = (id) =>{
    dispatch({
        type: "DELETE_LIST",
        id,
    })

} 

const values ={
    data,
    addVal,
    deleteVal,
}
    return(
        <>

        <Data.Provider value={values}>
                {children}
        </Data.Provider>
        
        </>
        
    )
}