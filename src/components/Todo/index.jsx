import { useState } from "react"
import TodoForm from "../TodoForm/index.jsx"
import TodoList from '../TodoList/index.jsx'
import './Todo.css'
const Todo = () => {
    const [data, setData] = useState([]);

    const addTodos = (text) => {
        setData([...data, { id: data.length + 1, text, complete: false }]);
    }
    const deleteTodo = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const statusChange = (ids) => {
        setData(data.map((items) =>
            items.id == ids ? { ...items, complete: !items.complete } : items
        ))
    }

    return (
        <>
            <div className="Todo_Div">
                <TodoForm addTodo={addTodos} />
                <TodoList Listitem={data} deleteTodo={deleteTodo} statusChange={statusChange} />
            </div>
        </>
    )
}
export default Todo