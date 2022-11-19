import {useContext} from 'react'
import Button from "react-bootstrap/Button"
import { ThemeContext } from '../contexts/ThemeContext';
import { TodoContext } from '../contexts/TodoContext';
import { DELETE_TODO } from '../reducers/types';

const TodoItem = (props) => {
    const {todo} = props

    const {dispatch} = useContext(TodoContext)
    
    const {theme} = useContext(ThemeContext)

    const {isLightTheme, light, dark } = theme
    const style = isLightTheme ? light: dark
    
    const handleDeleteTodo = () => {
        dispatch ({
            type: DELETE_TODO,
            payload: {
                id: todo.id
            }
        })
    }

    return (
        <li style={style}>
            <div className='todo-item'>
                {todo.title}
                <Button 
                variant="danger" 
                onClick={handleDeleteTodo}
                >X</Button>
            </div>
        </li>
    )
}

export default TodoItem