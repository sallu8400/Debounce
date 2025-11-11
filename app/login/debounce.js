// "use client"

// import { useEffect, useState } from "react"

// const page = () => {
// const [query,setquery]=useState('')

// const [debounced,setdbounced]=useState("")

// useEffect(()=>{

//   const handler=setTimeout(() => {

//     setdbounced(query)
    
//   }, 10000);

//   return ()=>{
//     clearTimeout(handler)
//   }

     
// },[query])

// useEffect(()=>{

//   if(debounced)

//     {
//       console.log(debounced)
//     }
// },[debounced])



//   return (
//     <div>

//       <input
//        placeholder="Enter serch"
//        onChange={(e)=>setquery(e.target.value)}


//       />

//    User Type: {query} <br/>
      
//      debounce value 500: {debounced}
//     </div>
//   )
// }

// export default page


"use client"

import { useEffect, useRef, useState } from "react";


const App=()=>{
  const ValuePrev=useRef<number | null >(null)
  const [count,setcount]=useState(0)


  useEffect(()=>{

    if(count)
    {
      ValuePrev.current=count
    }
  },[count])
return (

  <>
count:{count}
previousCount:{ValuePrev.current}


  <button onClick={()=>setcount(count+1)}>+</button>
  
  
  </>
)
}

export default App;
