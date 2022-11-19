import {useContext} from "react"
import { TodoContext } from "../contexts/TodoContext"
import { AuthContext } from "../contexts/AuthContext"
import { TodoForm } from "./TodoForm"
import TodoItem from "./TodoItem"

const Todo = () => {
    const {todos} = useContext(TodoContext)    
    const {auth} = useContext(AuthContext)

    return ( 
        <div className="todo-list">
            <TodoForm />
            { auth ? (
                <>
                    <ul>
                        {todos.map(todo => 
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                        />)}
                    </ul>
                </>
            ):  
                <p style={{textAlign: "center"}}>Not authorised</p>
            }
        </div>
    )
}
export default Todo
