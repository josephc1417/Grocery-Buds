
import { useState } from "react"



export const SingleItem = ({item,removeItem, editItem}) => {
 


return (
    <div className="single-item">
        <input type="checkbox"  checked={item.completed} onChange={()=> editItem(item.id)}/>
        <p style={{textDecoration: item.completed && 'line-through' }} className="">{item.name}</p>
        <button  className="btn"  onClick={() => removeItem(item.id)} type="button">delete</button>
    </div>
  )
 }