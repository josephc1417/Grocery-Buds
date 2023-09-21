import {useState} from "react"
import { Form } from "./components/Form";
import { nanoid } from "nanoid";
import { Items } from "./components/Items";
import { ToastContainer,toast } from "react-toastify";


// {/*getLocalStorage*/}
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list')
  
//   {/*pre-condition */}
//   if(list){
//     list = JSON.parse(localStorage.getItem('list'))
  
//   {/*post-condition */}
//   }else{
//     list = []
//   }
//   return list
// }  

{/*setLocalStorage*/}
const setLocalStorage = (items) => {
  localStorage.setItem('list',JSON.stringify(items))
}

{/*defaultList  Get-One-liner*/}
const defaultList = JSON.parse(localStorage.getItem('list') || '[]');


const App = () => {
  {/*State*/}
  const [items, setItems] = useState(defaultList)  


  {/*addItem*/}
  const addItem =(newItemName) => {
    const newItem = {
      id:nanoid(),
      name:newItemName,
      completed:false,
    };
    const newItems = [...items,newItem] 
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item added to the list');
}

{/*removeItem*/}
const removeItem = (itemId) => {
  const newItems = items.filter((item) => item.id !== itemId);
  setItems(newItems);
  setLocalStorage(newItems)
  toast.success('Item removed from the list')
  };
  
  {/*editItem*/}
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if(item.id === itemId){
        const newItem = {...item, completed:!item.completed};
        return newItem; 
      }
      return item;
    })
  setLocalStorage(newItems);
  setItems(newItems);
  };

return (
  <section className="section-center">
    <Form addItem={addItem}/>
    <Items items={items} removeItem ={removeItem} editItem={editItem}/>
    <ToastContainer position="top-center"/>
</section>
   )
};
export default App;
