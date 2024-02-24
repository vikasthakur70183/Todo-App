import { useState } from "react"
import "./TodoForm.css"
const TodoForm = ({ addTodo }) => {
    const [getText, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(getText)
        setText("");
    }
    return (
        <>
        <div className="Todo_form">
            <form className="form" onSubmit={handleSubmit}>
                <input value={getText} onChange={e => setText(e.target.value)} type="text" />
                <button>add</button>
            </form>
            </div>
        </>
    )
}
export default TodoForm