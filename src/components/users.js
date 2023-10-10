import React from "react"
import "./user.css"
import { useState } from "react";
import dataDB from "./data/data";
function Users({id,name,api,created,lastUsed,remove}){
    
  const [block,setBlock] = useState("true");
  function handleBlock(e){
    e.stopPropagation()
  setBlock(!block)
 
  }
  const [oldApi,newApiKey]= useState(api)
   function handleKey(){
    newApiKey(Math.random().toString().substr(2, 6));
    
   }
  
   
    return (
    <>
      <td className={block ? "no-line" : "line"} > {name}</td>
      <td className={block ? "no-line" : "line"}>{oldApi}
      <button onClick={handleKey} >New Key </button>
       </td>
      <td className={block ? "no-line" : "line"}> {created}</td>
      <td className={block ? "no-line" : "line"}> {lastUsed}</td>
      <td> 
        <div>
            <button  onClick={handleBlock}> {block?"Block" : "Unblock"}</button>
            <button onClick={()=>remove(id)}> Delete</button>

        </div>
      </td>
   

    </>
)}
 export default Users