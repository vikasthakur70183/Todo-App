const TodoList = ({ Listitem }) => {
    return (
        <>
            <h1>Todolist</h1>
            <div>
                <div className='List'>
                    {
                        Listitem.map((item,index) => (
                            <div key={index}>
                                {item.text}
                                <button>Completed</button>
                                <button>delete</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default TodoList