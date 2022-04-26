import React from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";

const Package1 = ({id,img,price,title,description,quantity,delete1,plus,minus}) => {
  return (
    <>
     <div className="d-flex flex-sm-row  flex-column justify-content-between align-items-center my-sm-2"  >
               <div>
                   <img src={img} alt="..." style={{width:"100px",height:"100px"}}/>
               </div>
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <AiOutlineMinus  onClick={()=>minus(id)}/>
                    <input type="text" style={{width:"25px",margin:"0px 10px"}} className="text-center" placeholder={quantity}/>
                    <AiOutlinePlus onClick={()=>plus(id)}/>
                </div>
               <p>{price}</p>
               <AiTwotoneDelete onClick={()=>delete1(id)}/>
            </div>
            <hr />
    </>
  )
}

export default Package1