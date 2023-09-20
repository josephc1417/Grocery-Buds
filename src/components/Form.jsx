import {useState} from 'react'

export const Form = () => {
const [newItemName, setNewItemName] = useState('')  
const handleSubmit = (e) => {
  e.preventDefault();
}
    return (
        <form className="">
            <h4>Grocery Buds</h4>
            <div className='form-control'>
                <input 
                    style={{boxShadow:'1px solid black'}}
                    className="form-input" 
                    type="text" 
                    value={newItemName} placeholder='Add item' 
                    onChange={(e) => setNewItemName(e.target.value)}
                />
                <button type="submit" className="btn" onSubmit={handleSubmit}>
                    add Item 
                </button>
            </div>
        </form>
    )
}