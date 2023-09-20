
import { useState } from "react"



export const SingleItem = ({item,removeItem}) => {
const [isChecked, setIsChecked] = useState(item.completed)


    return (
    <div className="single-item">
        <input type="checkbox"  checked={isChecked} onChange={ ()=> setIsChecked(!isChecked)}/>
        <p style={{textDecoration: isChecked && 'line-through' }} className="">{item.name}</p>
        <button  className="btn"  onClick={() => removeItem(item.id)} type="button">delete</button>
    </div>
  )
}