import React,{useState,useEffect} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';
import { HiOutlinePencil } from 'react-icons/hi';

const Todo = () => {
  let storedata=()=>{ 
    
    let reset=localStorage.getItem("setdata")
    if(reset){
      return JSON.parse(reset)
    }else{
      return []
    }
  }
  const [data, setData] = useState("")
  const [tace, setTace] = useState(storedata())
  const [isnext,setIsnext] = useState(false)
  const [isnext1,setIsnext1] = useState("")
 
const result=()=>{

  if(data.length === 0){
    alert("please enter something first")
  }
  else if(data && isnext ){
      setTace(
        tace.map((curelem)=>{
          if(curelem.time1 === isnext1){
            return {...curelem , data : data}
          }
          return curelem
        })
      )
      setData("")
      setIsnext(false)
  }
  else{
  const data1={
    time1: new Date().getTime().toString(),
    data:data
  }
 setTace([...tace,data1])
 setData('')
}
}

const delete1 =(id)=>{
  const abc =tace.filter((curelem)=>{
      return curelem.time1 !== id
  });
 setTace( abc)
}


useEffect(() => {
  
  localStorage.setItem("setdata",JSON.stringify(tace))
}, [tace])
  

const clearall=()=>{
  setTace([])
}

const update1=(id)=>{
 const apk= tace.find((curelem)=>{
   return curelem.time1 === id
 })
 setData(apk.data)
 setIsnext(true)
 setIsnext1(id)
}


  return (
   
   <>
   <div className='w-100  bg-info d-flex justify-content-center align-items-center flex-column' style={{height:"100vh"}}>
     <h1>TODO LIST</h1>
     <div className='detail1'>
     <input type="text" className='input1' value={data} onChange={(e)=>setData(e.target.value)} style={{width:"330px", borderRadius:"10px", padding:"7px"}}/>
    {isnext ? <HiOutlinePencil className='abc1' onClick={result} />:<AiOutlinePlus className='abc1' onClick={result}/>} 
     
     </div>

     {/* MAP MATHOD IS HERE */}

     {tace.map((curelem,index)=>{
       return(
         
         
     <div className='detail2 d-flex justify-content-between my-1' key={index}>
       <span>{index+1}.
        <span style={{margin:"3px"}}> {curelem.data}</span></span>
       <div>
       <FiEdit className='abc2 mx-3' onClick={()=>update1(curelem.time1)} />
     <AiFillDelete className='abc3' onClick={()=>delete1(curelem.time1)}/>  </div>
     </div>
         
       )
     })}
     <button className='btn btn-danger my-3' onClick={clearall}>Clear All</button>
   </div>
   </>
  )
}

export default Todo