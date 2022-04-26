export const reducer = (state,action)=>{
    if(action.type === "delete"){
        return{
            ...state,
           item: state.item.filter((curelem)=>{
               return curelem.id !== action.payload
           })
    
        }
        
       
    }

    if(action.type === "increment"){
        const updatecar= state.item.map((curelem)=>{
            if(curelem.id === action.payload){
                return{...curelem, quantity:curelem.quantity+1}
            }
            return curelem
        })
        return{...state,item:updatecar}
    }
    if(action.type === "decrement"){
        const updatecar1= state.item.map((curelem)=>{
            if(curelem.id === action.payload){
                return{...curelem, quantity:curelem.quantity-1}
            }
            return curelem
        }).filter((curelem)=>{
            return (curelem.quantity !== 0)
        })
        return{...state,item:updatecar1}
    }
  if(action.type === "allclear"){
      return{
          ...state,
          item:[]
      }
  }
if(action.type === "sum_of"){
    const {totaltax}= state.item.reduce((accum,curelem)=>{
            accum.totaltax += curelem.quantity
            return accum
    },{
        totaltax:0
    })
    return{...state,totaltax}
}
 

if(action.type === "sum_of_total"){
    const {totalamount}=state.item.reduce((accum,curelem)=>{

       accum.totalamount += (curelem.quantity) * (curelem.price)
      return accum
    },{
        totalamount:0
    })
    return{...state,totalamount}
}
return state
}