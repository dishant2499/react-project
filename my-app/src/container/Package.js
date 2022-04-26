import React,{useReducer,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";

import { products } from './data';
import Package1 from './Package1';
import {reducer} from "./reducer"



const Package = () => {
const intialstate={
    item:products,
    totalamount:0,
    totaltax:0
}


const [state, dispatch] = useReducer(reducer,intialstate)
useEffect(() => {
  

  
}, [])

    const delete1 = (id)=>{
        dispatch({
            type:"delete",
            payload:id
        })
    }

    const plus=(id)=>{
        dispatch({
            type:"increment",
            payload:id
        })
    }
    const minus=(id)=>{
        dispatch({
            type:"decrement",
            payload:id
        })
    }
    const clearcart=()=>{
        dispatch({
            type:"allclear",
            
        })
    }

useEffect(()=>{
    dispatch({type : "sum_of"})
},[state.item])

useEffect(()=>{
    dispatch({type : "sum_of_total"})
},[state.item])
    
  return (
      <>
    <div  className="container my-5 ">
        <header className="d-flex justify-content-between align-items-cente my-3">
            <div className="ms-2">
            <AiOutlineArrowLeft /> Continue Shopping
            </div>
            <div className="me-5 value2">
                <span ><BsFillCartCheckFill /></span>
                <p className="value3">{state.totaltax}</p>
            </div>

        </header>
        <hr />
        <div className="my-3">
            <h3>SHOPPING CARD</h3>
            <p>You have {state.totaltax} items in your card</p>
        </div>

        <div className=" px-5 py-2 container value1" >

            {/* map method here */}
            {
                state.item.map((curelem)=>{
                    return(<>
                    
                   
                    <Package1 key={curelem.id} {...curelem} delete1={ delete1 } plus ={plus} minus={minus}/>
                    
                    </>
                        
                    )
                })
            }
        
            
           
            
        </div>
        <div className='my-3 text-end'>
            <p>Total Amount : {state.totalamount} rs</p>
            <button className='btn btn-primary mx-4'>Submit</button>
            <button className='btn btn-danger' onClick={clearcart}>Clearcart</button>
        </div>
    </div>
    </>
  )
}

export default Package