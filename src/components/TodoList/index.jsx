import './TodoList.css'
const TodoList = ({ Listitem, deleteTodo, statusChange }) => {
    return (
        <>


            <div className='List'>
                <h1 className='Heading'>Todo-list</h1>
                {
                    Listitem.map((item, index) => (
                        <div className="item" key={index}>
                            {item.complete ? <p className="marked">{item.text}</p> : <p>{item.text}</p>}
                            <button className='btn' id="completed" onClick={() => { statusChange(item.id) }}>{item.complete ? "Completed" : "Pending"}</button>
                            <button className='btn' id="delete" onClick={() => { deleteTodo(item.id) }}>delete</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default TodoList