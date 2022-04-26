import React, { useState ,useEffect} from 'react'


const Calculator = () => {
    const [first, setfirst] = useState("")
    const [count, setCount] = useState(0)

    const fir =(num)=>{
            console.log(num)
        setfirst([first + num])
    }

    const data=()=>{
    //    setfirst(eval(first).toString())
    }

    const clear=()=>{
        setfirst("")
    }
    useEffect(() => {
   
        setInterval(() => {
            setCount(new Date().toLocaleTimeString())
        }, 1000);
    }, [])
    
  return (
   <>
  <div className='d-flex  align-items-center flex-column' style={{width:"100vw", height:"100vh"}}>
      <h1 className='my-3 text-success'>Calculator</h1>
      <table className='text-center' style={{width:"250px",height:"350px"}}>
          <thead>
          <tr >
              <th className='one ' colSpan={4}><input type="text" className="py-2" value={first} onChange={(e)=>setfirst(e.target.value)} /></th>
          </tr>
          </thead>
          <tbody>
          <tr border={2}>
              <td className='one' onClick={()=>fir(1)}>1</td>
              <td className='one' onClick={()=>fir(2)}>2</td>
              <td className='one' onClick={()=>fir(3)}>3</td>
              <td className='one' onClick={()=>fir("+")}>+</td>
          </tr>
          <tr>
              <td className='one' onClick={()=>fir(4)}>4</td>
              <td className='one' onClick={()=>fir(5)}>5</td>
              <td className='one' onClick={()=>fir(6)}>6</td>
              <td className='one' onClick={()=>fir("-")}>-</td>
          </tr>
          <tr>
              <td className='one' onClick={()=>fir(7)}>7</td>
              <td className='one' onClick={()=>fir(8)}>8</td>
              <td className='one' onClick={()=>fir(9)}>9</td>
              <td className='one' onClick={()=>fir("*")}>*</td>
          </tr>
          <tr>
              <td  className='one' onClick={()=>fir(0)}>0</td>
              <td  className='one' onClick={clear}>C</td>
              <td className='one' onClick={data}>=</td>
              <td className='one' onClick={()=>fir("/")}>/</td>
             
          </tr>
          </tbody>
      </table>
  </div>


  <p>{count}</p>
   </>
  )
}

export default Calculator