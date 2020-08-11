import React, {useState} from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

const ToDoitems = (props) => {
    const [checkItem, setCheckItem] = useState(false)
    const check = () =>{
        console.log("clicked check");
        setCheckItem(true);
    }
    return (
        <div className="todo-style">
            <DeleteForeverIcon className="delete" 
            onClick={ () =>{
                props.onSelect(props.id);
            }}></DeleteForeverIcon>
            <CheckCircleOutlineIcon className="check" onClick={check}/> 
            <li style={ {textDecoration: checkItem ? 'line-through' : 'none'}}> {props.text} </li>
        </div>
    )
}

export default ToDoitems;