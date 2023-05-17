import React from "react"
import Vertical from "./Vertical"
export default function Mainlayout({children}){
    return(
     <div>
        <Vertical/>
        {children}
      </div>  
    )
}