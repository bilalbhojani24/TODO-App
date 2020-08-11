import React, {useState} from 'react';
import ToDoitems from './ToDoitems';

const Todo = () => {
    const[inputList, setInputList] = useState();
    const [Items, setItems] = useState([]); // initialize state as an array
    
    const itemEvent = (event) => {
        setInputList(event.target.value)
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    const deleteItems = (id) =>{
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) =>{
            return index !== id; 
        });  
    });
}
    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>TODO APP</h1>
                    <input type="text" placeholder="Add item" onChange={itemEvent} value={inputList}/> 
                    <button onClick={listOfItems} > + </button>
                    <ol>
                        {
                            Items.map((itemval, index) => {
                            return <ToDoitems key={index} id={index} text={itemval} onSelect={deleteItems}/>
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo;