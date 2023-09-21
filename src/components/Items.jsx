import { SingleItem } from "./SingleItem"

export const Items = ({items, removeItem,editItem}) => {
  return (
    <div className="items">
    {items.map((item) => {
    console.log(item.name);
    return(
<SingleItem key={item.id} item = {item} removeItem = {removeItem} editItem = {editItem}/>
    )
    })}
    </div>
  )
}