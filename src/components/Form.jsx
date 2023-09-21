import {useState} from 'react'
import {toast } from "react-toastify";



export const Form = ({addItem}) => {
const [newItemName, setNewItemName] = useState('')  

const handleSubmit = (e) => {
e.preventDefault();
if(!newItemName){
        toast.error('Please provide a value');
        return;
    }
        addItem(newItemName);
        setNewItemName('');
    } 
    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
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