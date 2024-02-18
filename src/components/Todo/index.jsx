import { useState } from "react"
import TodoForm from "../TodoForm/index.jsx"
import TodoList from '../TodoList/index.jsx'
const Todo = () => {
    const[data,setData]=useState([]);

    const addTodos = (text) => {
        setData([...data, { id: data.length + 1, text, complete: false }]);
    }

    return (
        <>
            <TodoForm addTodo={addTodos} />
            <TodoList Listitem={data} />
        </>
    )
}
export default Todo