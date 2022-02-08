import React, {useState} from 'react';



const ListForm = (props) => {
const {todoList, setTodoList} = props
const [todos, setTodos] = useState("")
const submitHandler = (e) => {
    e.preventDefault()
    setTodoList([...todoList, {
        text: todos,
        complete: false
    }]);
    setTodos("");
    
}

    return(
        <div>
            <form 
            action="list"
            onSubmit={submitHandler}
            >
                <label htmlFor="Todo">Add Todo </label>
                <input 
                type="text"
                name="todo"
                value={todos}
                onChange={(e)=>setTodos(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default ListForm;