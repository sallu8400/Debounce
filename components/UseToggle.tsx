import { useState } from "react"



const useToggle=(initalvalue:boolean=false):[boolean,()=>void]=>{

  const [toggle,settoggle]=useState(initalvalue)

const Toggle=()=>settoggle(!toggle)


return [toggle,Toggle]

    




}
export default useToggle