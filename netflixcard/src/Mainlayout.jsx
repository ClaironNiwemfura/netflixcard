import React from "react"
import Vertical from "./Vertical"
export default function Mainlayout({children}){
    return(
      <div className="body">
     <div>
        <Vertical/></div>
        <div> {children}</div>
       
        </div>
    )
}