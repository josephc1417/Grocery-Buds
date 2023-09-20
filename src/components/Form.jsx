import {useState} from 'react'

export const Form = ({addItem}) => {
const [newItemName, setNewItemName] = useState('')  
const handleSubmit = (e) => {
  e.preventDefault();
  
//we want to create a conditional to make sure 
//that there is an item to add before we invoke the 
//addItem() function
//! We can also set the input-value back to an empty string 

  if(!newItemName) return;
  addItem(newItemName);
  setNewItemName('');
 

}
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Buds</h4>
            <div className='form-control'>
                <input 
                    style={{boxShadow:'1px solid black'}}
                    className="form-input" 
                    type="text" 
                    value={newItemName} placeholder='Add item' 
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <button type="submit" className="btn" >
                    add Item 
                </button>
            </div>
        </form>
    )
}