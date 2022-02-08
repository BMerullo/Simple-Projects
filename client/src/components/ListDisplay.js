import React from 'react';



const ListDisplay = (props) => {

    const { todoList, setTodoList } = props
    const handleCompleted = (todo) => {
        todo.complete = !todo.complete
        const updatedTodos = [...todoList]
        setTodoList(updatedTodos)
    }
    const style = (handleCompleted) =>{
        if(handleCompleted === true) {
            return "completed"
        } else {
            return "notCompleted"
        }
    }
    const handleDelete = (delIdx)=> {
        const filteredTodos = todoList.filter((todo, index)=> {
            return index !== delIdx
    });
    setTodoList(filteredTodos)
    }
    return (
        <div style={{display: 'inline-block'}}>
            {
                todoList.map((todo, index) => (
                    <div 
                    key={index}
                    className={style(todo.complete)}
                    >
                        <p>
                            {todo.text}
                        </p>
                        <input
                            type="checkbox"
                            onChange={(e)=>handleCompleted(todo)}
                        />
                        <button onClick={(e)=>handleDelete(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}


export default ListDisplay;