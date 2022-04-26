import React,{useState ,useEffect} from 'react'
import "../App.css"

import { WiCloudyGusts } from 'react-icons/wi';
import { WiRain } from 'react-icons/wi';
import {WiSunset } from 'react-icons/wi';
import {WiHumidity } from 'react-icons/wi';


const Weather = () => {
    const [data1,setData1]=useState("mumbai")
    const [data3,setData3]=useState({})
    const [data4,setData4]=useState("")
    const [count, setCount] = useState(0)


    
   
    useEffect(() => {
        tempa();
      },[])
      
    const tempa =async()=>{
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${data1}&units=metric&appid=a0f10ac73a33e06bf405c317752e6d0b`)
        console.log(data)
        const data2= await data.json()
        console.log(data2)

       const {temp,humidity,pressure} =data2.main;
       const {main} =data2.weather[0];
       const {name} = data2;
       const {speed} =data2.wind;
       const {country,sunset} = data2.sys
const main2 = main.toUpperCase()
         
const time1= new Date(sunset *1000)
const time2= `${time1.getHours()}:${time1.getMinutes()} PM`

       const collectdata ={temp,humidity,pressure,main2,name,speed,country,time2}

       setData3(collectdata)
       setData1('')
    }
    useEffect(() => {
       if( data3.main2 === "SUNNY"){
           setData4("wi-day-sunny")
       }
       else if( data3.main2 === "SMOKE"){
           setData4("wi-day-fog")
       }
       else if( data3.main2 === "CLOUDS"){
           setData4("wi-day-cloudy")
       }
       else if( data3.main2 === "DUST"){
           setData4("wi-dust")
       }
       else if( data3.main2 === "HAZE"){
           setData4("wi-day-haze")
       }
       else if( data3.main2 === "DRIZZLE"){
           setData4("wi-day-showers")
       }
       else {
           setData4("wi-day-sunny")
       }
        
      }, [data3.main2]);


      useEffect(() => {
   
        setInterval(() => {
            setCount(new Date().toLocaleTimeString())
        }, 1000);
    }, [])
    
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center result'>
        <div className='my-4'>
<input type="text" placeholder='enter city name' style={{width:"300px", padding:"5px 2px",marginTop:"5px",borderRadius:"10px"}} value={data1} onChange={(e)=>setData1(e.target.value)}  />
<button className='btn btn-success  mx-1' onClick={tempa}>Search</button>
        </div>
        <div className='weather1'>
            <div className='weather2'>

            <i className={`wi ${data4}`} ></i>


            </div>
            <div className='weather3'>
                <div className='dish1'>
                <div>
                    <h1>{data3.temp} &deg;C</h1>

                </div>
                <div>
                    <h2>{data3.main2}</h2>
                    <p>{data3.name},{data3.country}</p>
                </div>
                </div>
                <div className='dish2'>
                    <h3>{new Date().toLocaleDateString()}<br/>{count}</h3>
                    
                </div>
            </div>
            <div className='weather4'>
               <div> <WiSunset size={64}/></div>
               <div>
                   <span>{data3.time2}</span><br/>
                   <span>Sunset</span>
               </div>
               <div> <WiHumidity size={64}/></div>
               <div>
               <span>{data3.humidity}</span><br/>
                   <span>Humidity</span>
               </div>
                <div>   <WiRain size={64}/></div>
                <div>
                <span>pressure</span><br/>
                   <span>{data3.pressure} MM</span>
               </div>
                <div><WiCloudyGusts size={64}/></div>
                <div>
                <span>wind</span><br/>
                   <span>{data3.speed}</span>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Weather