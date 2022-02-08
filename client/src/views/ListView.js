import React, {useState} from 'react';
import ListDisplay from '../components/ListDisplay';
import ListForm from '../components/ListForm';


const ListView = (props) => {
    const [todoList, setTodoList] = useState([])

    return(
        <div>
            <ListForm todoList={todoList} setTodoList={setTodoList}/>
            <ListDisplay todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default ListView;