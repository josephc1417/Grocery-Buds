import {useState} from "react"
import { Form } from "./components/Form";
import { nanoid } from "nanoid";
import { Items } from "./components/Items";
const App = () => {

 // so in this case, we didnt import an obj that had KVP's already
// we just create the state variable name that corresponed to an an empty list
// what we want to do now is create an obj literal that will have KVP's that can be updated or removed 
// we can then assign the obj to a variable and display the list 
//**! [items] Array =[]  */
  const [items, setItems] = useState([])  

  //!Creating objl list of kvp's
 //*! {addItem} Function =    */
 const addItem =(newItemName) => {
  const newItem = {
    id:nanoid(),
    name:newItemName,
    completed:false,
    }
  
    setItems([...items,newItem])//!updates state value
  console.log(items);//! logs updated state value
}


//Again, we can create the function here in App.jsx and then pass it as a prop to the List component 
const removeItem = (itemId) => {
const newItems = items.filter((item) => item.id !== itemId);
  setItems(newItems);
};


return (
  <section className="section-center">
    <Form addItem={addItem}/>
    <Items items={items} removeItem ={removeItem}/>
    </section>
  )
};

export default App;
