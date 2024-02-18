import { useState } from "react"

const TodoForm = ({ addTodo }) => {
    const [getText, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(getText)
        setText("");
    }
    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <input value={getText} onChange={e => setText(e.target.value)} type="text" />
                <button>add</button>
            </form>
        </>
    )
}
export default TodoForm